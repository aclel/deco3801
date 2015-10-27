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
	"time"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

// Wraps Commands array for json response
type CommandsWrapper struct {
	Commands []models.Command `json:"commands"`
}

type CommandIdsWrapper struct {
	CommandIds []int64 `json:"commandIds"`
}

// GET /api/commands/id
// Get a command with the given id
// Responds with HTTP 200. Command sent in response body.
func CommandsShow(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	// Parse Command id
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing command id", http.StatusInternalServerError}
	}

	command, err := env.DB.GetCommandWithId(id)
	if err != nil {
		return &AppError{err, "Error retrieving command", http.StatusInternalServerError}
	}

	response, err := json.Marshal(command)
	if err != nil {
		return &AppError{err, "Error marshalling command json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/commands
// Accepts an array of warning triggers which are to be created.
// Example request body:
// {
//		"commands":[
//			{
//				"buoyId": 1,
//				"commandTypeId": 1,
//				"value": 20
//			},
//			{
//				"buoyId": 1,
//				"commandTypeId": 2,
//				"value": 30
//			}
//		]
// }
func CommandsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	commandsWrapper := new(CommandsWrapper)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&commandsWrapper)

	// Check if the request body is valid
	if err != nil {
		return &AppError{err, "Invalid Command", http.StatusBadRequest}
	}

	addedIds := make([]int64, 0)
	// Insert each command into db
	for _, command := range commandsWrapper.Commands {
		command.CreatedAt = time.Now().UTC()
		newId, err := env.DB.AddCommandToBuoy(&command)
		if err != nil {
			return &AppError{err, "Error inserting command into the database", http.StatusInternalServerError}
		}
		addedIds = append(addedIds, newId)
	}

	commandIdsWrapper := &CommandIdsWrapper{CommandIds: addedIds}
	response, err := json.Marshal(commandIdsWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling command ids json", http.StatusInternalServerError}
	}

	// Respond with 201 Created if successful
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	w.Write(response)

	return nil
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

// PUT /api/commands/id
// Responds with HTTP 200 if successful. Response body empty.
// Example request body:
// {
//     "buoyId": 1,
//     "commandTypeId": 1,
//     "value": 77,
// }
func CommandsUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing command id", http.StatusInternalServerError}
	}

	command := new(models.Command)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&command)

	// Check if Command JSON is valid
	if err != nil {
		return &AppError{err, "Invalid Command", http.StatusInternalServerError}
	}
	command.Id = id

	err = env.DB.UpdateCommand(command)
	if err != nil {
		return &AppError{err, "Error updating command", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// PUT /api/commands
// Accepts an array of commands which are to be replaced.
// Example request body:
// {
// 		"commands": [
//         {
//			   "id": 1,
//             "buoyId": 1,
//             "commandTypeId": 1,
//             "value": 66
//         },
//         {
//			   "id": 2,
//             "buoyId": 1,
//             "commandTypeId": 1,
//             "value": 77
//         }
//     ]
// }
func CommandsBatchUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	commandsWrapper := new(CommandsWrapper)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&commandsWrapper)

	// Check if the request body is valid
	if err != nil {
		return &AppError{err, "Invalid Command", http.StatusBadRequest}
	}

	// Update each command into db
	for _, command := range commandsWrapper.Commands {
		err = env.DB.UpdateCommand(&command)
		if err != nil {
			return &AppError{err, "Error updating the command in the database", http.StatusInternalServerError}
		}
	}

	// Respond with 200 OK if successful
	w.WriteHeader(http.StatusOK)

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
