package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
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
