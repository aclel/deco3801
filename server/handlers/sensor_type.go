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

	"github.com/aclel/deco3801/server/models"
)

type SensorTypesWrapper struct {
	SensorTypes []models.SensorType `json:"sensorTypes"`
}

// GET /api/sensor_types
// Get all Sensor Types.
// Responds with HTTP 200. All Sensor Types are returned as JSON in the response body.
func SensorTypesIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var sensorTypesWrapper SensorTypesWrapper
	var err error

	sensorTypesWrapper.SensorTypes, err = env.DB.GetAllSensorTypes()
	if err != nil {
		return &AppError{err, "Error retrieving sensor types", http.StatusInternalServerError}
	}

	// Set return status and write to response body.
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	response, _ := json.Marshal(sensorTypesWrapper)
	w.Write(response)

	return nil
}
