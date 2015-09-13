/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Cleland <andrew.cleland3@gmail.com>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
package handlers

import (
	"encoding/json"
	"errors"
	"net/http"
	"net/url"
	"strconv"
	"time"

	"github.com/aclel/deco3801/server/models"
)

// GET /api/readings
// encodes the readings returned from GetAllReadings() as JSON
func ReadingsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	unixStart, err := strconv.ParseInt(params["start_time"][0], 10, 64)
	if err != nil {
		return &AppError{err, "Error parsing start time", http.StatusInternalServerError}
	}

	unixEnd, err := strconv.ParseInt(params["end_time"][0], 10, 64)
	if err != nil {
		return &AppError{err, "Error parsing end time", http.StatusInternalServerError}
	}

	startTime := time.Unix(unixStart, 0).UTC()
	endTime := time.Unix(unixEnd, 0).UTC()

	if unixEnd < unixStart {
		return &AppError{errors.New("End time before start time"), "End time before start time", http.StatusInternalServerError}
	}

	readings, err := env.DB.GetAllReadings(startTime, endTime)
	if err != nil {
		return &AppError{err, "Error retrieving readings", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	response, err := json.Marshal(readings)
	if err != nil {
		return &AppError{err, "Error marshalling readings json", http.StatusInternalServerError}
	}

	w.Write(response)

	return nil
}

// POST /api/readings
// Accepts an array of readings from a particular buoy. See buoy_reading.go for an example
// of the incoming JSON. Stores each sensor reading in the database.
func ReadingsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsContainer := new(models.BuoyReadingContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsContainer)

	// Check if the request is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Constructs the Readings from the data
	readings, e := buildReadings(env, readingsContainer)
	if e != nil {
		return e
	}

	// Insert each reading into db
	for _, reading := range readings {
		err = env.DB.CreateReading(&reading)
		if err != nil {
			return &AppError{err, "Error inserting the reading into the database", http.StatusInternalServerError}
		}
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusCreated)

	return nil
}

// Constructs Readings from the JSON which was in the request body of a /api/readings POST request.
func buildReadings(env *models.Env, readingsContainer *models.BuoyReadingContainer) ([]models.Reading, *AppError) {
	// Get most recent buoy instance for buoy with guid
	buoyInstance, err := env.DB.GetActiveBuoyInstance(readingsContainer.BuoyGuid)
	if err != nil {
		return nil, &AppError{err, "Could not get the most recent buoy instance for a buoy with the specified guid", http.StatusBadRequest}
	}

	// Go through each reading in the request and build
	// a Reading object for each individual sensor reading
	var readings []models.Reading
	for _, r := range readingsContainer.Readings {
		for _, s := range r.SensorReadings {
			// Assign all properties from BuoyContainer
			// and BuoyReading objects to a Reading object
			reading := &models.Reading{}
			reading.BuoyGuid = readingsContainer.BuoyGuid
			reading.BuoyInstanceId = buoyInstance.Id
			reading.Latitude = r.Latitude
			reading.Longitude = r.Longitude

			// Get sensor type for the reading
			sensorType, err := env.DB.GetSensorTypeWithName(s.SensorName)
			if err != nil {
				return nil, &AppError{err, "Could not find a sensor type with the specified name", http.StatusBadRequest}
			}
			reading.SensorTypeId = sensorType.Id

			reading.Value = s.Value
			reading.Timestamp = time.Unix(r.Timestamp, 0).UTC()
			reading.MessageNumber = r.MessageNumber

			if e := validateReading(reading); e != nil {
				return nil, e
			}

			readings = append(readings, *reading)
		}
	}

	return readings, nil
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
