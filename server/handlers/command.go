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

// Wraps Commands array for json response
type CommandsWrapper struct {
	Commands []models.Command `json:"commands"`
}

// GET /api/commands
// Gets all Commands - or a filtered set if the "active" query parameter is present in the
// request URL. Returns a HTTP 200. The response body has all Commands in JSON.
func CommandsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	// Get "sent" query parameter
	var sent bool
	if params["sent"] != nil {
		sent, err = strconv.ParseBool(params["sent"][0])
		if err != nil {
			return &AppError{err, "Error parsing sent parameter", http.StatusInternalServerError}
		}
	}

	// If the sent query parameter is present then get all of the sent/unsent Commands.
	// Otherwise just get all Commands.
	var commandsWrapper CommandsWrapper
	if params["sent"] != nil {
		commandsWrapper.Commands, err = env.DB.GetAllCommandsWithSent(sent)
	} else {
		commandsWrapper.Commands, err = env.DB.GetAllCommands()
	}

	if err != nil {
		return &AppError{err, "Error retrieving commands", http.StatusInternalServerError}
	}

	response, err := json.Marshal(commandsWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling commands json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// DELETE /api/commands/id
// Responds with HTTP 200 if successful. Response body empty.
func CommandsDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing command id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteCommandWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting command", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}
