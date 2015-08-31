package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

func ReadingsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	if r.Method != "GET" {
		return 405, nil
	}
	readings, err := env.DB.GetAllReadings()
	if err != nil {
		return 405, err
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(readings)

	return 200, nil
}

func ReadingsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	requestReading := new(models.Reading)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestReading)

	reading := *requestReading

	// Get most recent buoy instance for buoy with guid
	buoyInstance, err := env.DB.GetMostRecentBuoyInstance(reading.BuoyGuid)
	if err != nil {
		return http.StatusBadRequest, err
	}
	reading.BuoyInstanceId = buoyInstance.Id

	// Get sensor type for the reading
	sensorType, err := env.DB.GetSensorTypeWithName(reading.SensorTypeName)
	if err != nil {
		return http.StatusBadRequest, err
	}
	reading.SensorTypeId = sensorType.Id

	// Insert reading into db
	err = env.DB.CreateReading(&reading)
	if err != nil {
		return http.StatusInternalServerError, err
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusCreated)

	return http.StatusCreated, nil
}
