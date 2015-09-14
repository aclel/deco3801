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

	"github.com/aclel/deco3801/server/models"
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
