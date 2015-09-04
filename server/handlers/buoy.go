package handlers

import (
	"fmt"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

// GET /buoys
// Responds with HTTP 200. All buoys are sent in the response body.
func BuoysIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	buoys, err := env.DB.GetAllBuoys()
	if err != nil {
		return &AppError{err, "Error retrieving buoys", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)

	for _, buoy := range buoys {
		fmt.Fprintf(w, "%s", buoy.Guid)
	}

	return nil
}
