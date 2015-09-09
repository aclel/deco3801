/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Cleland <andrew.cleland3@gmail.com>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
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
		token, err := jwtAuth.GenerateToken(dbUser)
		if err != nil {
			return []byte(""), err
		} else {
			dbUser.Token = token
			dbUser.Password = "" // don't want to send the password back to the client

			response, _ := json.Marshal(dbUser)

			// Update last login time
			dbUser.LastLogin = Now()
			err = db.UpdateUserExcludePassword(dbUser.Email, dbUser)
			if err != nil {
				return []byte(""), err
			}

			log.Println("Authenticated " + dbUser.Email)
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

	token, err := jwtAuth.GenerateToken(user)
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
