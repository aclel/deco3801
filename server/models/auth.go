package models

import (
	"encoding/json"
	"log"
	"net/http"
)

type AuthRepository interface {
	Login(*User) (int, []byte)
	RefreshToken(*User) []byte
}

// Authenticates the given user and issues a token in a json
// response if the authentication was successful.
//
// Returns 401 Unauthorized if authentication was unsuccessful
func (db *DB) Login(user *User) (int, []byte) {
	jwtAuth := InitJWTAuth()

	// Get user with given email from the database
	dbUser, err := db.GetUserWithEmail(user.Email)
	if err != nil {
		return http.StatusInternalServerError, []byte("")
	}

	if jwtAuth.Authenticate(dbUser, user) {

		// Generate JWT and respond with User object
		token, err := jwtAuth.GenerateToken(user.Email)
		if err != nil {
			return http.StatusInternalServerError, []byte("")
		} else {
			user.Token = token
			user.Password = "" // don't want to send the password back to the client
			response, _ := json.Marshal(user)

			// Update last login time
			user.LastLogin = Now()
			err = db.UpdateUserExcludePassword(user.Email, user)
			if err != nil {
				return http.StatusInternalServerError, []byte("")
			}

			log.Println("Authenticated " + user.Email)
			return http.StatusOK, response
		}
	}

	log.Printf("Unauthorized: " + user.Email)
	return http.StatusUnauthorized, []byte("")
}

// Reissues a token to an authenticated user
func (db *DB) RefreshToken(user *User) []byte {
	jwtAuth := InitJWTAuth()
	token, err := jwtAuth.GenerateToken(user.Email)
	if err != nil {
		panic(err)
	}
	user.Token = token
	response, err := json.Marshal(user)
	if err != nil {
		panic(err)
	}
	return response
}
