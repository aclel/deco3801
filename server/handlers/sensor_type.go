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
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

// Wraps Sensor Types array in json response
type SensorTypesWrapper struct {
	SensorTypes []models.SensorType `json:"sensorTypes"`
}

// GET /api/sensor_types
// Get all Sensor Types. Responds with HTTP 200. All Sensor Types are returned as JSON in the response body.
func SensorTypesIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var sensorTypesWrapper SensorTypesWrapper
	var err error

	sensorTypesWrapper.SensorTypes, err = env.DB.GetAllSensorTypes()
	if err != nil {
		return &AppError{err, "Error retrieving sensor types", http.StatusInternalServerError}
	}

	response, err := json.Marshal(sensorTypesWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling sensor types json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/sensor_types
// Request body contains JSON object of Sensor Type to be added to database.
// Responds with HTTP 201. Response body empty.
// Example request body:
//
// {
//    	"name": "Turbidity",
//		"description": "Amount of light that can pass through the water",
//		"unit": "NTU",
//		"lowerBound": 0,
//		"upperBound": 1000
// }
func SensorTypesCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	sensorType := new(models.SensorType)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&sensorType)

	// Check if Sensor Type JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}

	// Insert the Sensor Type into the database
	err = env.DB.CreateSensorType(sensorType)
	if err != nil {
		return &AppError{err, "Error inserting sensor type into the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusCreated)
	return nil
}

// PUT /api/sensor_types/id
// Request body contains JSON object of the Sensor Type which is being replaced.
// Response with HTTP 200. Response body empty.
// Example request body:
//
// {
//    	"name": "Turbidity",
//		"description": "Amount of light that can pass through the water",
//		"unit": "NTU",
//		"lowerBound": 0,
//		"upperBound": 1000
// }
func SensorTypeUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing sensor type id", http.StatusInternalServerError}
	}

	sensorType := new(models.SensorType)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&sensorType)
	// Check if Sensor Type JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}
	sensorType.Id = id

	// Replace Sensor Type in the database
	err = env.DB.UpdateSensorType(sensorType)
	if err != nil {
		return &AppError{err, "Error updating sensor type in the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}
