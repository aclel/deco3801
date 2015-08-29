package handlers

import (
	"encoding/json"
	"errors"
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"github.com/aclel/deco3801/server/models"
)

// POST /users
// Create a User, hash the password and store the User in the database
// Responds with HTTP 200 if successful
func UsersCreate(env *models.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte("secret123"), 10)
	if err != nil {
		return 500, err
	}

	user := *requestUser
	user.Password = string(hashedPassword)

	// Check if a user with the chosen email already exists
	u, err := env.DB.GetUserWithEmail(requestUser.Email)
	if err != nil {
		return 500, err
	}

	if u.Email != "" {
		return http.StatusConflict, errors.New("User already exists with email: " + u.Email)
	}

	// Insert user into db
	err = env.DB.CreateUser(&user)
	if err != nil {
		return 500, err
	}

	// Send email to new user with sign in link
	err = models.SendNewUserEmail(&user, &env.EmailUser)
	if err != nil {
		return 500, err
	}

	w.WriteHeader(http.StatusOK)
	return 200, nil
}
