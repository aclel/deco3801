// Flood Monitoring System
// Version 0.0.1 (Duyung)
//
// Copyright (C) Team Neptune
// All rights reserved.
//
// @author     Andrew Cleland <andrew.cleland3@gmail.com>
// @version    0.0.1
// @copyright  Team Neptune (2015)
// @link       https://github.com/aclel/deco3801
package handlers

import (
	"bytes"
	"encoding/csv"
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"time"

	"github.com/aclel/deco3801/server/models"
	"github.com/go-sql-driver/mysql"
)

// GET /api/readings
// Get all readings between the start time and end time that must be present in the
// request url. Responds with HTTP 200. All readings between start time and end time
// are present in the response body.
func ReadingsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	// Parse query parameters
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	// Get start time from query params
	unixStart, err := strconv.ParseInt(params["start_time"][0], 10, 64)
	if err != nil {
		return &AppError{err, "Error parsing start time", http.StatusInternalServerError}
	}

	// Get end time from query params
	unixEnd, err := strconv.ParseInt(params["end_time"][0], 10, 64)
	if err != nil {
		return &AppError{err, "Error parsing end time", http.StatusInternalServerError}
	}

	startTime := time.Unix(unixStart, 0).UTC()
	endTime := time.Unix(unixEnd, 0).UTC()

	if unixEnd < unixStart {
		return &AppError{errors.New("End time before start time"), "End time before start time", http.StatusInternalServerError}
	}

	// Get all readings from the database between the start time and the end time
	readings, err := env.DB.GetAllReadings(startTime, endTime)
	if err != nil {
		return &AppError{err, "Error retrieving readings", http.StatusInternalServerError}
	}

	response, err := json.Marshal(readings)
	if err != nil {
		return &AppError{err, "Error marshalling readings json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/readings
// Accepts an array of readings from a particular buoy. See buoy_reading.go for an example
// of the incoming JSON. Stores each sensor reading in the database.
// Example request body:
//
// {
//     "guid": "e9528b5e-1d8f-4960-91ae-8b21ecc0bcab",
//     "r": [
//         {
//             "lat": -27.425676,
//             "lng": 153.147055,
//             "sR": [
//                 {
//                     "type": 1,
//                     "val": 100
//                 },
//                 {
//                     "type": 2,
//                     "val": 30
//                 }
//             ],
//             "ut": 1442115887,
//             "msgNo": 1
//         }
//     ]
// }
func ReadingsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsContainer := new(models.BuoyReadingContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsContainer)

	// Check if the request is valid
	if err != nil && err != io.EOF {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	var e *AppError
	// Constructs the Readings from the data
	readings, e := buildReadings(env, readingsContainer)

	// Insert each reading into db
	for _, reading := range *readings {
		id, err := env.DB.CreateReading(reading)
		if err != nil {
			e = &AppError{err, "Error inserting the reading into the database", http.StatusInternalServerError}
		}

		for _, sensorReading := range reading.SensorReadings {
			sensorReading.ReadingId = id
			err = env.DB.CreateSensorReading(sensorReading)
			if err != nil {
				e = &AppError{err, "Error inserting the sensor reading into the database", http.StatusInternalServerError}
			}
		}
	}

	// Respond with 201 Created if everything was successful
	if e == nil {
		w.WriteHeader(http.StatusCreated)
	}

	return e
}

// Same as ReadingsCreate except the readings aren't added to the database
// Readings sent to this route are still validated and missing buoy instance sensors
// are still created.
func ReadingsTest(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsContainer := new(models.BuoyReadingContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsContainer)

	// Check if the request is valid
	if err != nil && err != io.EOF {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	var e *AppError
	// Validate the readings and add missing buoy instance sensors
	_, e = buildReadings(env, readingsContainer)

	// Respond with 200 OK if everything was successful
	if e == nil {
		w.WriteHeader(http.StatusOK)
	}

	return e
}

// Constructs Readings from the JSON which was in the request body of a /buoys/api/readings POST request.
func buildReadings(env *models.Env, readingsContainer *models.BuoyReadingContainer) (*[]*models.Reading, *AppError) {
	// Get most recent buoy instance for buoy with guid
	buoyInstance, err := env.DB.GetActiveBuoyInstance(readingsContainer.BuoyGuid)
	if err != nil {
		return nil, &AppError{err, "Could not get the most recent buoy instance for a buoy with the specified guid", http.StatusBadRequest}
	}

	var validReadings []*models.Reading
	var e *AppError
	// Go through each reading in the request. Add metadata to readings (buoy instance id, timestamp)
	// Update sensor configuration for buoy instance.
	for _, reading := range *readingsContainer.Readings {
		reading.BuoyInstanceId = buoyInstance.Id
		reading.BuoyGuid = readingsContainer.BuoyGuid
		reading.Timestamp, err = parseDatetime(reading)
		if err != nil {
			e = &AppError{err, "Error parsing datetime", http.StatusInternalServerError}
			continue
		}

		if e = validateReading(env, reading); e != nil {
			continue
		}
		validReadings = append(validReadings, reading)

		// Add new sensors, update last received
		updateBuoyInstanceSensorConfiguration(env, buoyInstance.Id, mysql.NullTime{reading.Timestamp, true}, &reading.SensorReadings)
	}

	return &validReadings, e
}

// Parses the date and time field in the reading
func parseDatetime(reading *models.Reading) (time.Time, error) {
	datetime := reading.Date + "T" + reading.Time
	parsed, err := time.Parse("020106T150405.999999", datetime)
	if err != nil {
		return time.Now(), err
	}

	return parsed, nil
}

// Add new sensors and update the "last recorded" time of the other sensors with sensor readings.
func updateBuoyInstanceSensorConfiguration(env *models.Env, buoyInstanceId int, readingTimestamp mysql.NullTime, sensorReadings *[]*models.SensorReading) *AppError {
	dbSensors, err := env.DB.GetSensorsForBuoyInstance(buoyInstanceId)
	if err != nil {
		return &AppError{err, "Error retrieving sensors for buoy instance " + strconv.Itoa(buoyInstanceId), http.StatusInternalServerError}
	}

	// Add new sensors, update last received of all
	for _, sensorReading := range *sensorReadings {
		// Buoy instance doesn't have the sensor, add it
		if !sensorExists(sensorReading.SensorTypeId, dbSensors) {
			newSensor := models.BuoyInstanceSensor{
				BuoyInstanceId: buoyInstanceId,
				SensorTypeId:   sensorReading.SensorTypeId,
				LastRecorded:   readingTimestamp,
			}
			err = env.DB.AddSensorToBuoyInstance(&newSensor)
			if err != nil {
				return &AppError{err, "Error adding buoy instance sensor", http.StatusInternalServerError}
			}
		} else {
			// Update the last received time
			for _, sensor := range dbSensors {
				if sensor.SensorTypeId == sensorReading.SensorTypeId {
					sensor.LastRecorded = readingTimestamp
					err = env.DB.UpdateBuoyInstanceSensor(&sensor)
					if err != nil {
						return &AppError{err, "Error updating buoy instance sensor", http.StatusInternalServerError}
					}
					break
				}
			}
		}
	}

	return nil
}

// Check if a sensor exists in the given slice of sensors
func sensorExists(sensorTypeId int, sensors []models.BuoyInstanceSensor) bool {
	for _, sensor := range sensors {
		if sensor.SensorTypeId == sensorTypeId {
			return true
		}
	}
	return false
}

// Ensure the reading has a buoy guid and valid latitude and longitude.
func validateReading(env *models.Env, reading *models.Reading) *AppError {
	// Check if guid is present
	if reading.BuoyGuid == "" {
		return &AppError{errors.New("Reading error"), "No guid", http.StatusBadRequest}
	}

	// Check if latitute is valid
	if reading.Latitude < -90.0 || reading.Latitude > 90.0 {
		return &AppError{errors.New("Reading error "), "Invalid latitude", http.StatusBadRequest}
	}

	// Check if longitude is valid
	if reading.Longitude < -180.0 || reading.Longitude > 180 {
		return &AppError{errors.New("Reading error "), "Invalid longitude", http.StatusBadRequest}
	}

	if len(reading.SensorReadings) == 0 {
		return &AppError{errors.New("Reading error"), "No sensor readings", http.StatusBadRequest}
	}

	// Check if all the sensor readings have sensor types which exist in the db
	for _, sensorReading := range reading.SensorReadings {
		// Get sensor type for the reading
		_, err := env.DB.GetSensorTypeWithId(sensorReading.SensorTypeId)
		if err != nil {
			return &AppError{err, "Could not find a sensor type with the specified id: " + strconv.Itoa(sensorReading.SensorTypeId),
				http.StatusBadRequest}
		}
	}

	return nil
}

// Used to store the reading ids in an incoming POST /api/export request
type ReadingsIds struct {
	Ids []int `json:"readings"`
}

// POST /api/export
// Gets all Readings that have the ids specified in the request body
// Returns all Sensor Readings for the Readings.
// The Readings are written to a CSV file and sent in the response.
// Example request body:
//	{
//		"readings": [1,2,3,4,5,6]
//	}
func ReadingsExport(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsIds := new(ReadingsIds)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsIds)

	readings, err := env.DB.GetReadingsIn(readingsIds.Ids)
	if err != nil {
		return &AppError{err, "Error retrieving readings", http.StatusInternalServerError}
	}

	csvHeader := []string{"value", "latitude", "longitude", "timestamp"}

	// Write the readings to a csv
	b := &bytes.Buffer{}
	wr := csv.NewWriter(b)
	wr.Write(csvHeader)
	wr.WriteAll(readings)

	w.Header().Set("Content-Type", "text/csv")
	w.Header().Set("Content-Disposition", "attachment;filename=export.csv")
	w.WriteHeader(http.StatusOK)
	w.Write(b.Bytes())

	return nil
}
