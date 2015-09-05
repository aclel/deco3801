package handlers

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

func ReadingsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readings, err := env.DB.GetAllReadings()
	if err != nil {
		return &AppError{err, "Error retrieving readings", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(readings)

	return nil
}

func ReadingsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	reading := new(models.Reading)
	// Set invalid lat and long in case lat and long aren't in the request.
	// Cannot just check if they equal 0 because 0 is a valid lat/long.
	reading.Latitude = 999
	reading.Longitude = 999

	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&reading)
	// Check if the request is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	if e := validateReading(reading); e != nil {
		return e
	}

	// Get most recent buoy instance for buoy with guid
	buoyInstance, err := env.DB.GetMostRecentBuoyInstance(reading.BuoyGuid)
	if err != nil {
		return &AppError{err, "Could not get the most recent buoy instance for a buoy with the specified guid", http.StatusBadRequest}
	}
	reading.BuoyInstanceId = buoyInstance.Id

	// Get sensor type for the reading
	sensorType, err := env.DB.GetSensorTypeWithName(reading.SensorTypeName)
	if err != nil {
		return &AppError{err, "Could not find a sensor type with the specified name", http.StatusBadRequest}
	}
	reading.SensorTypeId = sensorType.Id

	// Insert reading into db
	err = env.DB.CreateReading(reading)
	if err != nil {
		return &AppError{err, "Error inserting the reading into the database", http.StatusInternalServerError}
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusCreated)

	return nil
}

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
