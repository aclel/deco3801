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

// Wraps Commands Types array for json response
type CommandTypesWrapper struct {
	CommandTypes []models.CommandType `json:"commandTypes"`
}

// GET /api/command_types
// Get all Command Types.
// Responds with HTTP 200. All Command Types are returned as JSON in the response body.
func CommandTypesIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var commandTypesWrapper CommandTypesWrapper
	var err error

	commandTypesWrapper.CommandTypes, err = env.DB.GetAllCommandTypes()
	if err != nil {
		return &AppError{err, "Error retrieving command types", http.StatusInternalServerError}
	}

	response, err := json.Marshal(commandTypesWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling command types json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/command_types
// Request body contains JSON object of command type to be added to database.
// Responds with HTTP 200. Response body empty.
// Example request body:
//
// {
//		"name": "Poll rate"
// }
func CommandTypesCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	commandType := new(models.CommandType)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&commandType)

	// Check if Command Type JSON is valid
	if err != nil {
		return &AppError{err, "Invalid Command Type", http.StatusInternalServerError}
	}

	// Insert the Command Type into the database
	err = env.DB.CreateCommandType(commandType)
	if err != nil {
		return &AppError{err, "Error inserting command type into the database", http.StatusInternalServerError}
	}

	// Set return status.
	w.WriteHeader(http.StatusCreated)
	return nil
}

// PUT /api/command_types/id
// Request body contains JSON object of the command type which is being replaced.
// Response with HTTP 200. Response body empty.
// Example request body:
//
// {
//		"name": "Poll Rate"
// }
func CommandTypesUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing command type id", http.StatusInternalServerError}
	}

	commandType := new(models.CommandType)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&commandType)

	// Check if Command Type JSON is valid
	if err != nil {
		return &AppError{err, "Invalid Command Type", http.StatusInternalServerError}
	}
	commandType.Id = id

	// Replace Command Group in the database
	err = env.DB.UpdateCommandType(commandType)
	if err != nil {
		return &AppError{err, "Error updating command type in the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// DELETE /api/command_types/id
// Responds with HTTP 200 if successful. Response body empty.
func CommandTypesDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing command type id", http.StatusInternalServerError}
	}

	err = env.DB.ArchiveCommandTypeWithId(id)
	if err != nil {
		return &AppError{err, "Error archiving command type", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}
