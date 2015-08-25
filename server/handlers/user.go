package handlers

import (
	"encoding/json"
	"log"
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

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(requestUser.Password), 10)
	if err != nil {
		log.Println(err)
		return 500, err
	}

	user := *requestUser
	user.Password = string(hashedPassword)

	err = env.DB.CreateUser(&user)
	if err != nil {
		log.Println(err)
		return 500, err
	}

	w.WriteHeader(http.StatusOK)
	return 200, nil
}
