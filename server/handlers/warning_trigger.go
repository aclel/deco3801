package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

type WarningTriggerContainer struct {
	WarningTriggers []models.WarningTrigger `json:"warningTriggers"`
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
	warningTriggerContainer := new(WarningTriggerContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&warningTriggerContainer)

	// Check if the request body is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Insert each warning trigger into db
	for _, warningTrigger := range warningTriggerContainer.WarningTriggers {
		err = env.DB.CreateWarningTrigger(&warningTrigger)
		if err != nil {
			return &AppError{err, "Error inserting the warning trigger into the database", http.StatusInternalServerError}
		}
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusCreated)

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
	warningTriggerContainer := new(WarningTriggerContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&warningTriggerContainer)

	// Check if the request body is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Insert each warning trigger into db
	for _, warningTrigger := range warningTriggerContainer.WarningTriggers {
		err = env.DB.DeleteWarningTriggerWithId(warningTrigger.Id)
		if err != nil {
			return &AppError{err, "Error deleting the warning trigger in the database", http.StatusInternalServerError}
		}
	}

	// Respond with 201 Created if successful
	w.WriteHeader(http.StatusOK)

	return nil
}
