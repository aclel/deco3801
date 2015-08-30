package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

// POST /login
// Responds with HTTP 200 if login is successful. Stores User in response body.
// User contains token.
func LoginHandler(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	responseStatus, response := env.DB.Login(requestUser)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(responseStatus)
	w.Write(response)

	return responseStatus, nil
}

// Not currently implemented in API
func RefreshTokenHandler(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	w.Header().Set("Content-Type", "application/json")
	w.Write(env.DB.RefreshToken(requestUser))

	return 200, nil
}
