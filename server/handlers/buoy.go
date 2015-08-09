package handlers

import (
	"fmt"
	"net/http"

	"github.com/aclel/deco3801/server/config"
	"github.com/aclel/deco3801/server/models"
)

// GET /buoys
// Responds with HTTP 200. All buoys are sent in the response body.
func BuoysIndex(env *config.Env, w http.ResponseWriter, r *http.Request) (int, error) {
	if r.Method != "GET" {
		return 405, nil
	}
	buoys, err := models.GetAllBuoys(env.DB)
	if err != nil {
		return 405, err
	}

	w.WriteHeader(http.StatusOK)
	
	for _, buoy := range buoys {
		fmt.Fprintf(w, "%s", buoy.Name)
	}

	return 200, nil
}
