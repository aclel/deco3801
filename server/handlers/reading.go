package handlers

import (
	"net/http"

	"github.com/aclel/deco3801/server/config"
	"github.com/aclel/deco3801/server/models"
)

func ReadingsIndex(env *config.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	if r.Method != "GET" {
		return 405, nil
	}
	readings, err := models.GetAllReadings(env.DB)
	if err != nil {
		return 405, err
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(readings)

	return 200, nil
}
