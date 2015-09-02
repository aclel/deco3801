package handlers

import (
	"encoding/json"
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
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&reading)

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
