package handlers

import (
	//"fmt"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

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

	// Set return status and write to response body.
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	response, _ := json.Marshal(buoysWrapper)
	w.Write(response)

	return nil
}

// GET /api/buoys/id/
// Responds with HTTP 200. Specified buoy sent in response body.
func BuoysShow(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing buoy id", http.StatusInternalServerError}
	}

	buoy, err := env.DB.GetBuoyById(id)
	if err != nil {
		return &AppError{err, "Error retrieving buoy", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	response, _ := json.Marshal(buoy)
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
	err = env.DB.CreateBuoy(buoy)
	if err != nil {
		return &AppError{err, "Error inserting buoy into the database", http.StatusInternalServerError}
	}

	// Set return status.
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

	err = env.DB.DeleteBuoyWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting buoy", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}
