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
	"net/http"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

// POST /api/buoy_instances
// Request body contains JSON object of Buoy Instance to be added to database.
// Responds with HTTP 200. Response body empty.
// Example request body:
//
// {
//		"buoyId": 1,
//		"buoyGroupId": 1
// }
func BuoyInstancesCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	buoyInstance := new(models.BuoyInstance)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&buoyInstance)

	// Check if Buoy Group JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}

	// Insert the Buoy into the database
	err = env.DB.CreateBuoyInstance(buoyInstance)
	if err != nil {
		return &AppError{err, "Error inserting buoy instance into the database", http.StatusInternalServerError}
	}

	// Set return status.
	w.WriteHeader(http.StatusCreated)
	return nil
}

// DELETE /api/buoy_instances/id
// Responds with HTTP 200 if successful. Response body empty.
func BuoyInstancesDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy instance id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteBuoyInstanceWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting buoy instance", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// POST /api/buoy_instances/id/sensors
// Responds with HTTP 200 if successful. Response body empty.
func BuoyInstancesSensorsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy instance id", http.StatusInternalServerError}
	}

	sensorType := new(models.SensorType)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&sensorType)

	err = env.DB.AddSensorToBuoyInstance(id, sensorType.Id)
	if err != nil {
		return &AppError{err, "Error adding sensor type to buoy instance", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// DELETE /api/buoy_instances/id/sensors
// Responds with HTTP 200 if successful. Response body empty.
func BuoyInstancesSensorsDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	buoyInstanceId, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy instance id", http.StatusInternalServerError}
	}
	sensorTypeId, err := strconv.Atoi(vars["sensor_type_id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteBuoyInstanceSensor(buoyInstanceId, sensorTypeId)
	if err != nil {
		return &AppError{err, "Error deleting buoy instance sensor", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}
