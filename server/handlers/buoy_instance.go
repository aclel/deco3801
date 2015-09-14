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
	"net/url"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

// Wraps Buoy Instance array for json response
type BuoyInstancesWrapper struct {
	BuoyInstances []models.BuoyInstance `json:"buoyInstances"`
}

// Wraps Buoy Instance Sensor array for json response
type BuoyInstancesSensorWrapper struct {
	Sensors []models.BuoyInstanceSensor `json:"sensors"`
}

// GET /api/buoy_instances
// Gets all Buoy Instances, or a filtered set if the "active" query parameter is present in the
// request URL. Responds with HTTP 200. The response body has all Buoy Instances in JSON.
func BuoyInstancesIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	active := false
	if params["active"] != nil {
		active, err = strconv.ParseBool(params["active"][0])
		if err != nil {
			return &AppError{err, "Error parsing 'active' query parameter", http.StatusInternalServerError}
		}
	}

	// If the active query param is present then just get the active Buoy Instances.
	// The active buoy instance is the instance that was most recently created for each buoy.
	var buoyInstanceWrapper BuoyInstancesWrapper
	if active {
		buoyInstanceWrapper.BuoyInstances, err = env.DB.GetAllActiveBuoyInstances()
	} else {
		buoyInstanceWrapper.BuoyInstances, err = env.DB.GetAllBuoyInstances()
	}

	if err != nil {
		return &AppError{err, "Error retrieving buoy instances", http.StatusInternalServerError}
	}

	response, err := json.Marshal(buoyInstanceWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling buoy instances json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/buoy_instances
// Request body contains JSON object of Buoy Instance to be added to database.
// Responds with HTTP 200. Response body empty.
// Example request body:
//
// {
//		"name": "buoy-instance"
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

	w.WriteHeader(http.StatusCreated)
	return nil
}

// PUT /api/buoy_instances/id
// Request body contains JSON object of the Buoy Instance which is being replaced.
// Response with HTTP 200. Response body empty.
// Example request body:
//
// {
//    	"name": "instance-1",
//		"buoyGroupId": 1
// }
func BuoyInstancesUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy instance id", http.StatusInternalServerError}
	}

	buoyInstance := new(models.BuoyInstance)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&buoyInstance)
	// Check if Buoy Instance JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}
	buoyInstance.Id = id

	// Replace Buoy Instance in the database
	err = env.DB.UpdateBuoyInstance(buoyInstance)
	if err != nil {
		return &AppError{err, "Error updating buoy instance in the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// DELETE /api/buoy_instances/id
// Responds with HTTP 200 if successful. Response body empty.
// If the Buoy Instance was the active instance for the parent Buoy then the "active_buoy_instance_id"
// field on the Buoy is set to 0. This is done with the "buoy_instance_after_delete" trigger on the
// buoy_instance table in the database.
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

// GET /api/buoy_instances/id/sensors
// Responds with HTTP 200. All sensor types for the specified buoy instance are sent in the response body.
func BuoyInstancesSensorsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy instance id", http.StatusInternalServerError}
	}

	var sensorsWrapper BuoyInstancesSensorWrapper
	sensorsWrapper.Sensors, err = env.DB.GetSensorsForBuoyInstance(id)
	if err != nil {
		return &AppError{err, "Error retrieving buoy instance sensors", http.StatusInternalServerError}
	}

	response, err := json.Marshal(sensorsWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling buoy instance sensors json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

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
		return &AppError{err, "Error parsing sensor type id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteBuoyInstanceSensor(buoyInstanceId, sensorTypeId)
	if err != nil {
		return &AppError{err, "Error deleting buoy instance sensor", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// GET /api/buoy_instances/id/warning_triggers
// Responds with HTTP 200. All warning triggers for the specified buoy instance are sent in the response body.
func BuoyInstancesWarningTriggersIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy instance id", http.StatusInternalServerError}
	}

	var warningTriggerWrapper WarningTriggerWrapper
	warningTriggerWrapper.WarningTriggers, err = env.DB.GetWarningTriggersForBuoyInstance(id)
	if err != nil {
		return &AppError{err, "Error retrieving warning triggers", http.StatusInternalServerError}
	}

	response, err := json.Marshal(warningTriggerWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling warning triggers json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}
