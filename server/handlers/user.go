package handlers

import (
	"encoding/json"
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"github.com/aclel/deco3801/server/config"
	"github.com/aclel/deco3801/server/models"
)

func UsersCreate(env *config.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(requestUser.Password), 10)
	if err != nil {
		return 500, err
	}

	user := *requestUser
	user.Password = string(hashedPassword)

	err = models.CreateUser(env.DB, user)
	if err != nil {
		return 500, err
	}

	w.WriteHeader(http.StatusOK)
	return 200, nil
}
