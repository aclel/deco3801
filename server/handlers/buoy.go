package handlers

import (
	//"fmt"
	"net/http"
	"encoding/json"
	"github.com/aclel/deco3801/server/models"
)

// A scruct for wrapping our Array in. 
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
<<<<<<< HEAD
func BuoysIndex(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	
	if r.Method != "GET" {
		return 405, nil
	}


	newWrapping := new(wrapping)
	var err error
	newWrapping.Buoys, err = env.DB.GetAllBuoys()
=======
func BuoysIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	buoys, err := env.DB.GetAllBuoys()
>>>>>>> origin/master
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	// Set return status and write to response body.
	w.WriteHeader(http.StatusOK)
	encoder := json.NewEncoder(w)
	encoder.Encode(newWrapping)

	return 200, nil
}


// GET /buoys/id/
// Responds with HTTP 200. Specified buoy sent in response body.
/*
Example request:
{
    "Id": 429
}
*/
func BuoyShow(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	
	if r.Method != "POST" {
		return 405, nil
	}

	newBuoyId := new(buoyId)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&newBuoyId)
	if err != nil {
		return 405, err
	}

<<<<<<< HEAD
	ourBuoy := new(models.Buoy)
	ourBuoy, err = env.DB.GetById(newBuoyId.Id)          
	if err != nil {
		return 405, err
	}

	w.WriteHeader(http.StatusOK)
	encoder := json.NewEncoder(w)
	encoder.Encode(ourBuoy)

	return 200, nil
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
func BuoysCreate(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	
	if r.Method != "POST" {
		return 405, nil
	}

	newBuoy := new(models.Buoy)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&newBuoy)
	if err != nil {
		return 405, err
	}
	
	err = env.DB.AddBuoy(newBuoy)
	if err != nil {
		return 405, err
	}
	
	// Set return status.
	w.WriteHeader(http.StatusOK)

	return 200, nil
=======
	return nil
>>>>>>> origin/master
}
