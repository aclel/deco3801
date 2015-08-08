package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/auth"
	"github.com/aclel/deco3801/server/config"
	"github.com/aclel/deco3801/server/models"
)

func Login(env *config.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	responseStatus, token := auth.Login(env.DB, requestUser)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(responseStatus)
	w.Write(token)

	return responseStatus, nil
}

func RefreshToken(env *config.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	requestUser := new(models.User)
	decoder := json.NewDecoder(r.Body)
	decoder.Decode(&requestUser)

	w.Header().Set("Content-Type", "application/json")
	w.Write(auth.RefreshToken(env.DB, requestUser))

	return 200, nil
}
