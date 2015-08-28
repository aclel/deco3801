package models

import (
	"encoding/json"
	"log"
	"net/http"
)

type TokenAuth struct {
	Token string `json:"token"`
}

type AuthManager interface {
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
		log.Println("Authenticated")
		token, err := jwtAuth.GenerateToken(user.Email)
		if err != nil {
			return http.StatusInternalServerError, []byte("")
		} else {
			response, _ := json.Marshal(TokenAuth{token})
			return http.StatusOK, response
		}
	}

	log.Printf("Unauthorized")
	return http.StatusUnauthorized, []byte("")
}

// Reissues a token to an authenticated user
func (db *DB) RefreshToken(user *User) []byte {
	jwtAuth := InitJWTAuth()
	token, err := jwtAuth.GenerateToken(user.Email)
	if err != nil {
		panic(err)
	}
	response, err := json.Marshal(TokenAuth{token})
	if err != nil {
		panic(err)
	}
	return response
}
