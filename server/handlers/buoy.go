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
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

// Wraps Buoys array for json response
type BuoysWrapper struct {
	Buoys []models.Buoy `json:"buoys"`
}

// GET /api/buoys
// Responds with HTTP 200. All buoys are sent in the response body.
func BuoysIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var buoysWrapper BuoysWrapper
	var err error

	buoysWrapper.Buoys, err = env.DB.GetAllBuoys()
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	response, err := json.Marshal(buoysWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling buoy json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// GET /api/buoys/id
// Responds with HTTP 200. Specified buoy sent in response body.
func BuoysShow(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	// Parse Buoy id
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy id", http.StatusInternalServerError}
	}

	buoy, err := env.DB.GetBuoyById(id)
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

// POST /api/buoys
// Request body contains JSON object of buoy to be added to database.
// Responds with HTTP 201. Response body empty.
// Example request body:
//
// {
//    	"guid": "e9528b5e-1d8f-4960-91ae-8b21ecc0bcab",
//		"name": "BUOY-1"
// }
func BuoysCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	buoy := new(models.Buoy)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&buoy)

	// Check if Buoy JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}

	// Insert the Buoy into the database
	newId, err := env.DB.CreateBuoy(buoy)
	if err != nil {
		return &AppError{err, "Error inserting buoy into the database", http.StatusInternalServerError}
	}

	// Insert an initial Buoy Instance for the Buoy. Buoy group 0 is "Unassigned"
	buoyInstance := &models.BuoyInstance{BuoyId: int(newId), Name: buoy.Name, BuoyGroupId: 0}
	err = env.DB.CreateBuoyInstance(buoyInstance)
	if err != nil {
		return &AppError{err, "Error inserting buoy instance into the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusCreated)
	return nil
}

// PUT /api/buoys/id
// Request body contains JSON object of the buoy which is being replaced.
// Response with HTTP 200. Response body empty.
// Example request body:
//
// {
//    	"guid": "e9528b5e-1d8f-4960-91ae-8b21ecc0bcab",
//		"name": "BUOY-1"
// }
func BuoysUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy id", http.StatusInternalServerError}
	}

	buoy := new(models.Buoy)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&buoy)

	// Check if Buoy JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}
	buoy.Id = id

	// Replace Buoy in the database
	err = env.DB.UpdateBuoy(buoy)
	if err != nil {
		return &AppError{err, "Error updating buoy into the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// DELETE /api/buoys/id
// Responds with HTTP 200 if successful. Response body empty.
func BuoysDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy id", http.StatusInternalServerError}
	}

	err = env.DB.ArchiveBuoyWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting buoy", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// POST /api/buoys/id/commands
// Responds with HTTP 200 if successful. Response body empty.
// Example request body:
// {
//
//     "commandTypeId": 1,
//     "value": 30
// }
func BuoyCommandsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	buoyId, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy id", http.StatusInternalServerError}
	}

	commandsWrapper := new(CommandsWrapper)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&commandsWrapper)

	// Check if Command JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}

	for _, command := range commandsWrapper.Commands {
		command.BuoyId = buoyId
		err = env.DB.AddCommandToBuoy(&command)
		if err != nil {
			return &AppError{err, "Error adding command to buoy", http.StatusInternalServerError}
		}
	}

	w.WriteHeader(http.StatusCreated)
	return nil
}

func BuoyCommandsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	// Parse query parameters
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	if params["guid"] == nil {
		return &AppError{err, "Buoy guid is missing from url parameters", http.StatusBadRequest}
	}

	// Retrieve all unsent commands for buoy with guid
	guid := params["guid"][0]
	commands, err := env.DB.GetBuoyCommands(guid, false)
	if err != nil {
		return &AppError{err, "Error retrieving commands from database", http.StatusInternalServerError}
	}

	// Construct custom comma separated response in the following format:
	// COMMAND_TYPE_ID,COMMAND_ID,COMMAND_VALUE;
	var buffer bytes.Buffer
	for _, command := range commands {
		commandTypeId := strconv.Itoa(command.CommandTypeId)
		commandId := strconv.Itoa(command.Id)
		commandValue := strconv.Itoa(command.Value)
		buffer.WriteString(commandTypeId + "," + commandId + "," + commandValue + `;`)
	}

	w.Header().Set("Content-Type", "text/plain")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(buffer.String()))

	return nil
}

type BuoyCommandAcknowledgement struct {
	Guid       string `json:"guid"`
	CommandIds []int  `json:"ids"`
}

// POST /buoys/api/commands/ack
// Buoy sends a request to this route to acknowledge that all commands were received and applied.
// Sets the "sent" field in the buoy_command table for each command id in the ids array.
// Example request body:
//	{
//		"guid": "e9528b5e-1d8f-4960-91ae-8b21ecc0bcab",
//		"ids": [1,2,3,4]
//	}
func BuoyCommandsAcknowledge(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	ack := new(BuoyCommandAcknowledgement)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&ack)

	fmt.Println(r.ContentLength)

	// Check if Acknowledgement JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON for Acknowledgement", http.StatusInternalServerError}
	}

	// Update commands in database to "sent"
	for _, id := range ack.CommandIds {
		command, err := env.DB.GetCommandWithId(id)
		if command == nil {
			return &AppError{err, "No command with id: " + strconv.Itoa(id), http.StatusInternalServerError}
		}

		err = env.DB.UpdateCommandSentStatus(id, true)
		if err != nil {
			return &AppError{err, "Error while updating the command to 'sent' in the database", http.StatusInternalServerError}
		}
	}

	w.WriteHeader(http.StatusOK)

	return nil
}
