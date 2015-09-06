package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

type buoyGroupsWrapper struct {
	BuoyGroups []models.BuoyGroup `json:"buoyGroups"`
}

// GET /api/buoy_groups
// Responds with HTTP 200. All buoy groups are sent in the response body
func BuoyGroupsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var buoyGroupsWrapper buoyGroupsWrapper
	var err error

	buoyGroupsWrapper.BuoyGroups, err = env.DB.GetAllBuoyGroups()
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	// Set return status and write to response body.
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	response, _ := json.Marshal(buoyGroupsWrapper)
	w.Write(response)

	return nil
}

// GET /api/buoy_groups/id/
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

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	response, _ := json.Marshal(buoy)
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
