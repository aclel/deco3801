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
package models

import (
	"encoding/json"
	"errors"

	"github.com/go-sql-driver/mysql"
)

// Wraps Auth methods to allow testing with dependency injection
type AuthRepository interface {
	Login(*User) (*User, error)
	RefreshToken(*User) ([]byte, error)
}

// Authenticates the given user and issues a json web token
// if authenticate is successful. Returns a User which includes
// the token.
func (db *DB) Login(user *User) (*User, error) {
	jwtAuth, err := InitJWTAuth()
	if err != nil {
		return nil, err
	}

	// Get user with given email from the database
	dbUser, err := db.GetUserWithEmail(user.Email)
	if err != nil {
		return nil, err
	}

	// Check if this is the first time a use is logging in
	firstLogin := dbUser.LastLogin.Valid == false

	if dbUser == nil {
		return nil, errors.New("User with that email does not exist")
	}

	// Check email and password are the same
	if jwtAuth.Authenticate(dbUser, user) {
		// Generate JWT and respond with User object
		token, err := jwtAuth.GenerateToken(dbUser)
		if err != nil {
			return nil, err
		} else {
			dbUser.Token = token
			dbUser.Password = "" // don't want to send the password back to the client

			// Update last login time
			dbUser.LastLogin = Now()
			err = db.UpdateUserExcludePassword(dbUser)
			if err != nil {
				return nil, err
			}

			if firstLogin {
				dbUser.LastLogin = mysql.NullTime{}
			}

			return dbUser, nil
		}
	}

	return nil, errors.New("Unauthorized: " + user.Email)
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
