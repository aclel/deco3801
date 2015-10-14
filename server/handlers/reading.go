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
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"time"

	"github.com/aclel/deco3801/server/models"
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
		reading.Timestamp = time.Unix(reading.UnixTimestamp, 0).UTC()

		if e = validateReading(env, reading); e != nil {
			continue
		}
		validReadings = append(validReadings, reading)

		// Delete warning triggers as well?
		// Add new sensors, disable removed sensors, re-enable old sensors
		updateBuoyInstanceSensorConfiguration(env, buoyInstance.Id, &reading.SensorReadings)
	}

	return &validReadings, e
}

// Check if a sensor on the buoy has been added, removed, or re-enabled.
// If it's been added, add a new buoy instance sensor.
// If it's been removed, set the 'disabled' field to 'true'.
// If it's been re-enabled, set the 'disabled' field to 'false'.
func updateBuoyInstanceSensorConfiguration(env *models.Env, buoyInstanceId int, sensorReadings *[]*models.SensorReading) *AppError {
	dbSensors, err := env.DB.GetSensorsForBuoyInstance(buoyInstanceId)
	if err != nil {
		return &AppError{err, "Error retrieving sensors for buoy instance " + strconv.Itoa(buoyInstanceId), http.StatusInternalServerError}
	}

	// Go through each sensor reading and check what's changed
	var foundSensors []int
	for _, sensorReading := range *sensorReadings {

		foundSensors = append(foundSensors, sensorReading.SensorTypeId)

		err = configureSensor(env, dbSensors, buoyInstanceId, sensorReading.SensorTypeId)
		if err != nil {
			return &AppError{err, "Error updating buoy instance sensors", http.StatusInternalServerError}
		}
	}

	// One or more sensors have been disabled or removed on the buoy, disable them in the db
	for _, s := range dbSensors {
		if !sensorExists(s.SensorTypeId, foundSensors) && !s.Disabled {
			fmt.Println("Disabling sensor type " + strconv.Itoa(s.SensorTypeId))
			err = env.DB.UpdateBuoyInstanceSensorDisabledStatus(buoyInstanceId, s.SensorTypeId, true)
			if err != nil {
				return &AppError{err, "Error disabling buoy instance sensors", http.StatusInternalServerError}
			}
		}
	}

	return nil
}

// Updates the status of the sensor. If it's part of the buoy instance's sensors and it's enabled, nothing
// needs to be done. If it's part of the buoy instance's but it's disabled, it needs to be re-enabled.
// If it isn't part of the buoy instance's sensors, it needs to be added.
func configureSensor(env *models.Env, dbSensors []models.BuoyInstanceSensor, buoyInstanceId int, sensorTypeId int) error {
	for _, sensor := range dbSensors {
		if sensor.SensorTypeId == sensorTypeId {
			if sensor.Disabled == false {
				// Sensor is enabled, nothing needs updating
				return nil
			} else {
				// Sensor is disabled, it needs to be re-enabled
				fmt.Println("Re-enabling sensor type " + strconv.Itoa(sensorTypeId))
				return env.DB.UpdateBuoyInstanceSensorDisabledStatus(buoyInstanceId, sensorTypeId, false)
			}
		}
	}

	fmt.Println("Adding sensor type " + strconv.Itoa(sensorTypeId))
	// A new physical sensor has been added to the buoy, a new buoy instance sensor needs to be created
	return env.DB.AddSensorToBuoyInstance(buoyInstanceId, sensorTypeId)
}

// Check if a given Sensor Type Id exists in the db
func sensorTypeExists(sensorTypeId int, sensorTypes []models.SensorType) bool {
	for _, sensorType := range sensorTypes {
		if sensorType.Id == sensorTypeId {
			return true
		}
	}

	return false
}

// Check if a sensor exists in the given slice of sensors
func sensorExists(sensorTypeId int, sensors []int) bool {
	for _, sensor := range sensors {
		if sensor == sensorTypeId {
			return true
		}
	}
	return false
}

// Ensure the reading has a buoy guid and valid latitude and longitude.
func validateReading(env *models.Env, reading *models.Reading) *AppError {
	// Check if guid is present
	if reading.BuoyGuid == "" {
		return &AppError{errors.New("Reading: "), "No guid", http.StatusBadRequest}
	}

	// Check if latitute is valid
	if reading.Latitude < -90.0 || reading.Latitude > 90.0 {
		return &AppError{errors.New("Reading: "), "Invalid latitude", http.StatusBadRequest}
	}

	// Check if longitude is valid
	if reading.Longitude < -180.0 || reading.Longitude > 180 {
		return &AppError{errors.New("Reading: "), "Invalid longitude", http.StatusBadRequest}
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
