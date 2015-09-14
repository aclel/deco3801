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
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

// POST /api/login - Handles user login.
// Responds with HTTP 200 if login is successful. Sends User in response body.
// User contains jwt token.
// Example request body:
// {
//     "email": "test@gmail.com",
//     "password": "kjvLYdQY"
// }
func LoginHandler(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	user, err := env.DB.Login(requestUser)
	if err != nil {
		return &AppError{err, "Error while authenticating the user", http.StatusUnauthorized}
	}

	response, err := json.Marshal(user)
	if err != nil {
		return &AppError{err, "Error marshalling user json", http.StatusUnauthorized}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// Not currently implemented in API
// Refreshes the JWT token without requiring the user to login again.
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
