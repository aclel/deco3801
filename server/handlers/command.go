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
	"net/http"
	"strconv"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

// DELETE /api/commands/id
// Responds with HTTP 200 if successful. Response body empty.
func CommandsDelete(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		return &AppError{err, "Error parsing command id", http.StatusInternalServerError}
	}

	err = env.DB.DeleteCommandWithId(id)
	if err != nil {
		return &AppError{err, "Error deleting command", http.StatusInternalServerError}
	}

	w.WriteHeader(http.StatusOK)
	return nil
}
