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
	"strings"
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
// 	"guid":"test",
// 	"readings": [{
// 	    "latitude": -27.425676,
// 	    "longitude": 153.147055,
// 	    "sensorReadings": [{
// 	        "sensorName": "Turbidity",
// 	        "value": 100
// 	    }],
// 	    "timestamp": 1442115887,
// 	    "messageNumber": 1
// 	}]
// }
func ReadingsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsContainer := new(models.BuoyReadingContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsContainer)

	// Check if the request is valid
	if err != nil && err != io.EOF {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Constructs the Readings from the data
	readings, e := buildReadings(env, readingsContainer)
	if e != nil {
		return e
	}

	// Insert each reading into db
	for _, reading := range *readings {
		id, err := env.DB.CreateReading(reading)
		if err != nil {
			return &AppError{err, "Error inserting the reading into the database", http.StatusInternalServerError}
		}
		reading.Id = id
		for _, sensorReading := range reading.SensorReadings {
			sensorReading.ReadingId = id
			err = env.DB.CreateSensorReading(sensorReading)
			if err != nil {
				return &AppError{err, "Error inserting the sensor reading into the database", http.StatusInternalServerError}
			}
		}
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusCreated)

	return nil
}

// Constructs Readings from the JSON which was in the request body of a /api/readings POST request.
func buildReadings(env *models.Env, readingsContainer *models.BuoyReadingContainer) (*[]*models.Reading, *AppError) {
	// Get most recent buoy instance for buoy with guid
	buoyInstance, err := env.DB.GetActiveBuoyInstance(readingsContainer.BuoyGuid)
	if err != nil {
		return nil, &AppError{err, "Could not get the most recent buoy instance for a buoy with the specified guid", http.StatusBadRequest}
	}

	// Go through each reading in the request and build
	// a Reading object for each individual sensor reading
	for _, reading := range *readingsContainer.Readings {
		for _, sensorReading := range reading.SensorReadings {
			// Get sensor type for the reading
			sensorType, err := env.DB.GetSensorTypeWithName(sensorReading.SensorTypeName)
			if err != nil {
				return nil, &AppError{err, "Could not find a sensor type with the specified name", http.StatusBadRequest}
			}
			sensorReading.SensorTypeId = sensorType.Id
		}
		reading.BuoyInstanceId = buoyInstance.Id
		reading.BuoyGuid = readingsContainer.BuoyGuid
		reading.Timestamp = time.Unix(reading.UnixTimestamp, 0).UTC()

		if e := validateReading(reading); e != nil {
			return nil, e
		}
	}

	return readingsContainer.Readings, nil
}

// Ensure the reading has a buoy guid and valid latitude and longitude.
func validateReading(reading *models.Reading) *AppError {
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

	return nil
}

// GET /api/export?readings=1,2,3,4
// Gets all Readings that have the ids specific in the "readings" query parameter.
// Returns all Sensor Readings for the Readings.
// The Readings are written to a CSV file and sent in the response.
func ReadingsExport(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	readingsParam := strings.Split(params["readings"][0], ",")

	var readingsIds []int
	for _, id := range readingsParam {
		i, err := strconv.Atoi(id)
		if err != nil {
			return &AppError{err, "Error parsing query parameters into ints", http.StatusInternalServerError}
		}
		readingsIds = append(readingsIds, i)
	}

	readings, err := env.DB.GetReadingsIn(readingsIds)
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
