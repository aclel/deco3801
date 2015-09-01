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

// POST /api/users
// Create a User, hash the password and store the User in the database
// Responds with HTTP 201 if successful
func UsersCreate(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	user := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&user)

	validEmail, err := regexp.MatchString(`(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})`, user.Email)
	if err != nil {
		return http.StatusInternalServerError, err
	}

	if !validEmail {
		return http.StatusBadRequest, nil
	}

	// random password 8 characters long
	randomPassword := uniuri.NewLen(8)
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(randomPassword), 10)
	if err != nil {
		return http.StatusInternalServerError, err
	}

	user.Password = string(hashedPassword)

	// Check if a user with the chosen email already exists
	u, err := env.DB.GetUserWithEmail(user.Email)
	if err != nil {
		return http.StatusInternalServerError, err
	}

	if u != nil {
		return http.StatusConflict, errors.New("User already exists with email: " + u.Email)
	}

	// Insert user into db
	err = env.DB.CreateUser(user)
	if err != nil {
		return http.StatusInternalServerError, err
	}

	// Set back to plain text so that it shows in the email
	user.Password = randomPassword

	// Send email to new user with sign in link
	err = env.DB.SendNewUserEmail(user, &env.EmailUser)
	if err != nil {
		return http.StatusInternalServerError, err
	}

	w.WriteHeader(http.StatusCreated)
	return http.StatusCreated, nil
}
