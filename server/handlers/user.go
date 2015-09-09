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
package handlers

import (
	"encoding/json"
	"errors"
	"net/http"
	"regexp"

	"golang.org/x/crypto/bcrypt"
	"stablelib.com/v1/uniuri"

	"github.com/aclel/deco3801/server/models"
)

type UserWrapper struct {
	Users []models.User `json:"users"`
}

// GET /api/users
// Get all Users.
// Responds with HTTP 200. All Users are returned as JSON in the response body.
func UsersIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var usersWrapper UserWrapper
	var err error

	usersWrapper.Users, err = env.DB.GetAllUsers()
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	// Set return status and write to response body.
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	response, _ := json.Marshal(usersWrapper)
	w.Write(response)

	return nil
}

// POST /api/users
// Create a User, hash the password and store the User in the database, send email to user.
// Responds with HTTP 201 if successful
func UsersCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	user := new(models.User)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&user)
	// Check if the request is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	if e := validateUser(user); e != nil {
		return e
	}

	// random password 8 characters long
	randomPassword := uniuri.NewLen(8)
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(randomPassword), 10)
	if err != nil {
		return &AppError{err, "Error hashing password", http.StatusInternalServerError}
	}

	user.Password = string(hashedPassword)

	// Check if a user with the chosen email already exists
	u, err := env.DB.GetUserWithEmail(user.Email)
	if err != nil {
		return &AppError{err, "Error while checking if user exists", http.StatusInternalServerError}
	}

	if u != nil {
		return &AppError{errors.New("User error"), "User already exists with email: " + u.Email, http.StatusConflict}
	}

	// Insert user into db
	err = env.DB.CreateUser(user)
	if err != nil {
		return &AppError{err, "Could not insert user into database", http.StatusInternalServerError}
	}

	// Set back to plain text so that it shows in the email
	user.Password = randomPassword

	// Send email to new user with sign in link
	err = env.DB.SendNewUserEmail(user, &env.EmailUser)
	if err != nil {
		return &AppError{err, "Error sending email to user", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusCreated)
	return nil
}

// Validate the User object that is created with the request body.
func validateUser(user *models.User) *AppError {
	// Check if email is present
	if user.Email == "" {
		return &AppError{errors.New("No email"), "No email", http.StatusBadRequest}
	}

	// Check if the email is valid
	validEmail, err := regexp.MatchString(`(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})`, user.Email)
	if err != nil {
		return &AppError{err, "Error while validating email address", http.StatusInternalServerError}
	}

	if !validEmail {
		return &AppError{errors.New("Invalid email address"), "Invalid email address", http.StatusBadRequest}
	}

	return nil
}
