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
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"regexp"
	"strconv"
	"time"

	"github.com/dchest/passwordreset"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
	"stablelib.com/v1/uniuri"

	"github.com/aclel/deco3801/server/models"
)

// Wraps Users array in json response
type UserWrapper struct {
	Users []models.User `json:"users"`
}

// GET /api/users
// Get all Users. Responds with HTTP 200. All Users are returned as JSON in the response body.
func UsersIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	var usersWrapper UserWrapper
	var err error

	usersWrapper.Users, err = env.DB.GetAllUsers()
	if err != nil {
		return &AppError{err, "Error retrieving users", http.StatusInternalServerError}
	}

	response, err := json.Marshal(usersWrapper)
	if err != nil {
		return &AppError{err, "Error marshalling users json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/users
// Create a User. Generate a temporary password, then hash the password and store the User in the database.
// An email is sent to the user with their temporary password. They are prompted to change it when they login
// for the first time. Responds with HTTP 201 if successful.
// Example request body:
// {
//     "email": "test@email.com",
//     "firstName": "test",
//     "lastName": "user",
//     "role": "researcher"
// }
func UsersCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	user := new(models.User)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&user)
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	if e := validateUser(user); e != nil {
		return e
	}

	// Generate random password 8 characters long
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

	// Set temporary password back to plain text so that it shows in the email
	user.Password = randomPassword

	// Send email to new user with sign in link and temporary password
	err = env.DB.SendNewUserEmail(user, &env.EmailUser)
	if err != nil {
		return &AppError{err, "Error sending email to user", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusCreated)
	return nil
}

// PUT /api/users/id
// Request body contains JSON object of the user which is being updated.
// Response with HTTP 200. Response body empty.
// Example request body:
//
// {
//    	"firstName": "bobby",
//		"lastName": "tables",
//		"role": "system_admin"
// }
func UsersUpdate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing user id", http.StatusInternalServerError}
	}

	user := new(models.User)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&user)

	// Check if User JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}
	user.Id = id
	// TODO: Create another model method which does not update last login time
	user.LastLogin = models.Now()

	// Update User in the database
	err = env.DB.UpdateUserExcludePassword(user)
	if err != nil {
		return &AppError{err, "Error updating user into the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// DELETE /api/users/id
// Responds with HTTP 200 if successful. Response body empty.
func UsersDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing user id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteUserWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting user", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// PUT /api/users/id/change_password
// Responds with HTTP 200 if successful. Reponse body empty.
// Example request body:
//	{
//		"currentPassword": "test",
//		"newPassword": "test2"
//	}
func UsersUpdatePassword(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing user id", http.StatusInternalServerError}
	}

	user := new(models.NewUserPassword)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&user)

	// Check if User JSON is valid
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusInternalServerError}
	}
	user.Id = id

	// Get the user from the database
	dbUser, err := env.DB.GetUser(user.Id)
	if err != nil {
		return &AppError{err, "Error while retrieving user", http.StatusInternalServerError}
	}

	if dbUser == nil {
		return &AppError{err, "No user exists with the given id", http.StatusBadRequest}
	}

	// Check if the current password matches the one in the db
	err = bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(user.CurrentPassword))
	if err != nil {
		return &AppError{err, "Current password does not match the one in the database", http.StatusBadRequest}
	}

	// Hash the new password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.NewPassword), 10)
	if err != nil {
		return &AppError{err, "Error hashing password", http.StatusInternalServerError}
	}
	user.NewHashedPassword = string(hashedPassword)

	// Update password in the database
	err = env.DB.UpdateUserPassword(user)
	if err != nil {
		return &AppError{err, "Error updating password in the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// POST /api/forgot_password
// Sends an email to the email in the request body with a link to reset their password.
// Responds with 200 OK if successful. Empty response body.
// Example request body:
//	{
//		"email": "test@email.com"
//	}
func UsersForgotPassword(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	u := new(models.User)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&u)
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	if u.Email == "" {
		return &AppError{err, "Missing email", http.StatusBadRequest}
	}

	user, err := env.DB.GetUserWithEmail(u.Email)
	if err != nil {
		return &AppError{err, "Error retrieving user from the database", http.StatusBadRequest}
	}

	if user == nil {
		return &AppError{err, "No user exists with that email", http.StatusBadRequest}
	}

	// Generate one-use token to facilitate password reset
	token := passwordreset.NewToken(user.Email, 24*time.Hour, []byte(user.Password), []byte(os.Getenv("FMS_SECRET_KEY")))

	link := "https://teamneptune.co/#/reset_password?token=" + url.QueryEscape(token)
	fmt.Println(link)

	// Send email to user with link (with token) to reset password
	err = env.DB.SendPasswordResetEmail(user, link, &env.EmailUser)
	if err != nil {
		return &AppError{err, "Error sending email to user", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}

// POST /api/reset_password?token=dfgsgdgfsdg
// Returns 200 OK if the password was changed successfully.
// Example request body:
//	{
//		"newPassword": "test"
//	}
func UsersResetPassword(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	// Get token from url params
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}
	if params["token"] == nil {
		return &AppError{err, "Password reset token is missing from url", http.StatusBadRequest}
	}
	token := params["token"][0]

	// Get new password from request body
	newPassword := new(models.NewUserPassword)
	decoder := json.NewDecoder(r.Body)
	err = decoder.Decode(&newPassword)
	if err != nil {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	// Check token validity
	email, err := passwordreset.VerifyToken(token, env.DB.GetPasswordHash, []byte(os.Getenv("FMS_SECRET_KEY")))
	if err != nil {
		return &AppError{err, "Password reset token is not valid", http.StatusForbidden}
	}

	// Get the user with the email in the token
	user, err := env.DB.GetUserWithEmail(email)
	if err != nil {
		return &AppError{err, "Error retrieving user", http.StatusInternalServerError}
	}
	if user == nil {
		return &AppError{err, "No user exists with that email", http.StatusBadRequest}
	}
	newPassword.Id = user.Id

	// Hash the new password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(newPassword.NewPassword), 10)
	if err != nil {
		return &AppError{err, "Error hashing password", http.StatusInternalServerError}
	}
	newPassword.NewHashedPassword = string(hashedPassword)

	// Update the password hash in the database
	err = env.DB.UpdateUserPassword(newPassword)
	if err != nil {
		return &AppError{err, "Error updating password in the database", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
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
