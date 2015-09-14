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

// Wraps WarningTriggers array for json response
type WarningTriggerWrapper struct {
	WarningTriggers []models.WarningTrigger `json:"warningTriggers"`
}

// GET /api/warning_triggers
// Gets all Warning Triggers, or a filtered set if the "active_instances" query parameter is present in the
// request URL. Responds with HTTP 200. The response body has all Buoy Instances in JSON.
func WarningTriggersIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	activeInstances := false
	if params["active_instances"] != nil {
		activeInstances, err = strconv.ParseBool(params["active_instances"][0])
		if err != nil {
			return &AppError{err, "Error parsing 'active_instances' query parameter", http.StatusInternalServerError}
		}
	}

	// If the active query param is present then just get the warning triggers for the active Buoy Instances.
	// The active buoy instance is the instance that was most recently created for each buoy.
	var warningTriggersWrapper WarningTriggerWrapper
	if activeInstances {
		warningTriggersWrapper.WarningTriggers, err = env.DB.GetWarningTriggersForActiveBuoyInstances()
	} else {
		warningTriggersWrapper.WarningTriggers, err = env.DB.GetAllWarningTriggers()
	}

	if err != nil {
		return &AppError{err, "Error retrieving warning triggers", http.StatusInternalServerError}
	}

	response, err := json.Marshal(warningTriggersWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling warning triggers json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/warning_triggers
// Accepts an array of warning triggers which are to be created.
// Example request body:
// {
//		"warningTriggers":[
//			{
//				"value": 20.50,
//				"operator": "<",
//				"message": "The battery level has dropped below 20.50",
//				"buoyInstanceId": 2,
//				"sensorTypeId": 1
//			},
//			{
//				"value": 40.5,
//				"operator": "<",
//				"message": "The battery level has dropped below 40.50",
//				"buoyInstanceId": 2,
//				"sensorTypeId": 1
//			}
//		]
// }
func WarningTriggersCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	warningTriggerWrapper := new(WarningTriggerWrapper)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&warningTriggerWrapper)

	// Check if the request body is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Insert each warning trigger into db
	for _, warningTrigger := range warningTriggerWrapper.WarningTriggers {
		err = env.DB.CreateWarningTrigger(&warningTrigger)
		if err != nil {
			return &AppError{err, "Error inserting the warning trigger into the database", http.StatusInternalServerError}
		}
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusCreated)

	return nil
}

// PUT /api/warning_triggers/id
// Responds with HTTP 200 if successful. Response body empty.
// Example request body:
// {
//     "value": 90.10,
//     "operator": "<",
//     "message": "The battery level has dropped below 20.50%",
//     "buoyInstanceId": 7,
//     "sensorTypeId": 2
// }
func WarningTriggersUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing warning trigger id", http.StatusInternalServerError}
	}

	warningTrigger := new(models.WarningTrigger)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&warningTrigger)

	// Check if Warning Trigger JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}
	warningTrigger.Id = id

	err = env.DB.UpdateWarningTrigger(warningTrigger)
	if err != nil {
		return &AppError{err, "Error deleting warning trigger", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// PUT /api/warning_triggers
// Accepts an array of warning triggers which are to be replaced.
// Example request body:
// {
//		"warningTriggers":[
//			{
//				"value": 20.50,
//				"operator": "<",
//				"message": "The battery level has dropped below 20.50",
//				"buoyInstanceId": 2,
//				"sensorTypeId": 1
//			},
//			{
//				"value": 40.5,
//				"operator": "<",
//				"message": "The battery level has dropped below 40.50",
//				"buoyInstanceId": 2,
//				"sensorTypeId": 1
//			}
//		]
// }
func WarningTriggersBatchUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	warningTriggerWrapper := new(WarningTriggerWrapper)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&warningTriggerWrapper)

	// Check if the request body is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Insert each warning trigger into db
	for _, warningTrigger := range warningTriggerWrapper.WarningTriggers {
		err = env.DB.UpdateWarningTrigger(&warningTrigger)
		if err != nil {
			return &AppError{err, "Error updating the warning trigger in the database", http.StatusInternalServerError}
		}
	}

	// Respond with 200 OK if successful
	w.WriteHeader(http.StatusOK)

	return nil
}

// DELETE /api/warning_triggers/id
// Responds with HTTP 200 if successful. Response body empty.
func WarningTriggersDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing warning trigger id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteWarningTriggerWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting warning trigger", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// DELETE /api/warning_triggers
// Accepts an array of warnings triggers which are to be deleted.
// Example request body:
// {
//		"warningTriggers":[
//			{
//				"id": 1
//			},
//			{
//				"id": 2
//			}
//		]
// }
func WarningTriggersBatchDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	warningTriggerWrapper := new(WarningTriggerWrapper)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&warningTriggerWrapper)

	// Check if the request body is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Insert each warning trigger into db
	for _, warningTrigger := range warningTriggerWrapper.WarningTriggers {
		err = env.DB.DeleteWarningTriggerWithId(warningTrigger.Id)
		if err != nil {
			return &AppError{err, "Error deleting the warning trigger in the database", http.StatusInternalServerError}
		}
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusOK)

	return nil
}
