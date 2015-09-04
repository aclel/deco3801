package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

// POST /login
// Responds with HTTP 200 if login is successful. Sends User in response body.
// User contains auth token.
func LoginHandler(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	response, err := env.DB.Login(requestUser)
	if err != nil {
		return &AppError{err, "Error while authenticating the user", http.StatusInternalServerError}
	}

	var responseStatus int
	if len(response) == 0 {
		responseStatus = http.StatusUnauthorized
	} else {
		responseStatus = http.StatusOK
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(responseStatus)
	w.Write(response)

	return nil
}

// Not currently implemented in API
func RefreshTokenHandler(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	response, err := env.DB.RefreshToken(requestUser)
	if err != nil {
		return &AppError{err, "Error refreshing the token", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}
