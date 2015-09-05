package models

import (
	"encoding/json"
	"log"
)

type AuthRepository interface {
	Login(*User) ([]byte, error)
	RefreshToken(*User) ([]byte, error)
}

// Authenticates the given user and issues a token in a json
// response if the authentication was successful.
//
// Returns 401 Unauthorized if authentication was unsuccessful
func (db *DB) Login(user *User) ([]byte, error) {
	jwtAuth, err := InitJWTAuth()
	if err != nil {
		return []byte(""), err
	}

	// Get user with given email from the database
	dbUser, err := db.GetUserWithEmail(user.Email)
	if err != nil {
		return []byte(""), err
	}

	// Check email and password are the same
	if jwtAuth.Authenticate(dbUser, user) {

		// Generate JWT and respond with User object
		token, err := jwtAuth.GenerateToken(user.Email)
		if err != nil {
			return []byte(""), err
		} else {
			user.Token = token
			user.Password = "" // don't want to send the password back to the client
			// Update last login time
			user.LastLogin = Now()

			response, _ := json.Marshal(user)
			err = db.UpdateUserExcludePassword(user.Email, user)
			if err != nil {
				return []byte(""), err
			}

			log.Println("Authenticated " + user.Email)
			return response, nil
		}
	}

	log.Printf("Unauthorized: " + user.Email)
	return []byte(""), err
}

// Reissues a token to an authenticated user
func (db *DB) RefreshToken(user *User) ([]byte, error) {
	jwtAuth, err := InitJWTAuth()
	if err != nil {
		return []byte(""), err
	}

	token, err := jwtAuth.GenerateToken(user.Email)
	if err != nil {
		return []byte(""), err
	}
	user.Token = token

	response, err := json.Marshal(user)
	if err != nil {
		return []byte(""), err
	}
	return response, err
}
