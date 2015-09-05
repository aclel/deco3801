package handlers

import (
	//"fmt"
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

// A struct for wrapping our Array in.
// This way the decoder will make a JSON object for us.
type wrapping struct {
	Buoys []models.Buoy
}

// For storing a "buoy by id" request in.
type buoyId struct {
	Id int
}

// GET /buoys
// Responds with HTTP 200. All buoys are sent in the response body.
func BuoysIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	newWrapping := new(wrapping)
	var err error
	newWrapping.Buoys, err = env.DB.GetAllBuoys()
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	// Set return status and write to response body.
	w.WriteHeader(http.StatusOK)
	encoder := json.NewEncoder(w)
	encoder.Encode(newWrapping)

	return nil
}

// GET /buoys/id/
// Responds with HTTP 200. Specified buoy sent in response body.
/*
Example request:
{
    "Id": 429
}
*/
func BuoyShow(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	newBuoyId := new(buoyId)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&newBuoyId)
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}

	ourBuoy, err := env.DB.GetById(newBuoyId.Id)
	if err != nil {
		return &AppError{err, "Error retrieving buoy", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	encoder := json.NewEncoder(w)
	encoder.Encode(ourBuoy)

	return nil
}

// POST /buoys
// Request body contains JSON object of buoy to be added to database.
// Responds with HTTP 200. Response body empty.
/*
Example request:
{
    "Id": 123,
    "Guid": "123abc"
}
*/
func BuoysCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	newBuoy := new(models.Buoy)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&newBuoy)
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}

	err = env.DB.AddBuoy(newBuoy)
	if err != nil {
		return &AppError{err, "Error inserting buoy into the database", http.StatusInternalServerError}
	}

	// Set return status.
	w.WriteHeader(http.StatusOK)
	return nil
}
