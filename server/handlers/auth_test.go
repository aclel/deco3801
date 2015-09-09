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
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/aclel/deco3801/server/models"
)

func TestLogin(t *testing.T) {
	rec := httptest.NewRecorder()
	jsonStr := []byte(`{"username":"test", "password": "secret123"}`)
	req, _ := http.NewRequest("POST", "/api/login", bytes.NewBuffer(jsonStr))

	env := &models.Env{DB: &models.MockDB{}}

	handler := AppHandler{env, LoginHandler}
	handler.handle(handler.Env, rec, req)

	resp := models.User{}
	err := json.Unmarshal([]byte(rec.Body.String()), &resp)
	if err != nil {
		t.Errorf("could not unmarshal JSON into struct: %v", err)
	}

	got := rec.Code
	want := http.StatusOK
	if got != want {
		t.Errorf("HTTP status = %v, want %v", got, want)
	}

	if resp.Token == "" {
		t.Errorf("Token was empty, %v", resp.Token)
	}
}
