package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

// POST /api/buoy_instances
// Request body contains JSON object of Buoy Instance to be added to database.
// Responds with HTTP 200. Response body empty.
// Example request body:
//
// {
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
		return &AppError{err, "Error inserting buoy into the database", http.StatusInternalServerError}
	}

	// Set return status.
	w.WriteHeader(http.StatusCreated)
	return nil
}
