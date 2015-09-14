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

// Wraps Buoy Group array for json response
type BuoyGroupsWrapper struct {
	BuoyGroups []models.BuoyGroup `json:"buoyGroups"`
}

// Wraps Buoy Instance array for json response
type BuoyInstanceWrapper struct {
	BuoyInstances []models.BuoyInstance `json:"buoyInstances"`
}

// GET /api/buoy_groups
// Responds with HTTP 200. All buoy groups are sent in the response body
func BuoyGroupsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var buoyGroupsWrapper BuoyGroupsWrapper
	var err error

	buoyGroupsWrapper.BuoyGroups, err = env.DB.GetAllBuoyGroups()
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	response, err := json.Marshal(buoyGroupsWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling buoy json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// GET /api/buoy_groups/id
// Responds with HTTP 200. Specified buoy sent in response body.
func BuoyGroupsShow(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy id", http.StatusInternalServerError}
	}

	buoy, err := env.DB.GetBuoyGroupById(id)
	if err != nil {
		return &AppError{err, "Error retrieving buoy", http.StatusInternalServerError}
	}

	response, err := json.Marshal(buoy)
	if err != nil {
		return &AppError{err, "Error marshalling buoy json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/buoy_groups
// Request body contains JSON object of buoy group to be added to database.
// Responds with HTTP 200. Response body empty.
// Example request body:
//
// {
//		"name": "BUOYGROUP-1"
// }
func BuoyGroupsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	buoyGroup := new(models.BuoyGroup)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&buoyGroup)

	// Check if Buoy Group JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}

	// Insert the Buoy into the database
	err = env.DB.CreateBuoyGroup(buoyGroup)
	if err != nil {
		return &AppError{err, "Error inserting buoy into the database", http.StatusInternalServerError}
	}

	// Set return status.
	w.WriteHeader(http.StatusCreated)
	return nil
}

// PUT /api/buoy_groups/id
// Request body contains JSON object of the buoy group which is being replaced.
// Response with HTTP 200. Response body empty.
// Example request body:
//
// {
//		"name": "BUOY-GROUP-1"
// }
func BuoyGroupsUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy group id", http.StatusInternalServerError}
	}

	buoyGroup := new(models.BuoyGroup)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&buoyGroup)

	// Check if Buoy JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}
	buoyGroup.Id = id

	// Replace Buoy Group in the database
	err = env.DB.UpdateBuoyGroup(buoyGroup)
	if err != nil {
		return &AppError{err, "Error updating buoy group in the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// DELETE /api/buoy_groups/id
// Responds with HTTP 200 if successful. Response body empty.
func BuoyGroupsDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy group id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteBuoyGroupWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting buoy group", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// GET /api/buoy_groups/id/buoys
// Responds with HTTP 200. All buoys for the specified buoy groups are sent in the response body.
func BuoyGroupsBuoysIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy group id", http.StatusInternalServerError}
	}

	var buoysWrapper BuoysWrapper
	buoysWrapper.Buoys, err = env.DB.GetBuoysForBuoyGroup(id)
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	response, err := json.Marshal(buoysWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling buoys json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// GET /api/buoy_groups/id/buoy_instances
// Responds with HTTP 200. All buoys instances for the specified buoy group are sent in the request body.
func BuoyGroupsBuoyInstancesIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy group id", http.StatusInternalServerError}
	}

	var buoyInstanceWrapper BuoyInstanceWrapper
	buoyInstanceWrapper.BuoyInstances, err = env.DB.GetBuoyInstancesForBuoyGroup(id)
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
