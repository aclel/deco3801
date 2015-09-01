package handlers

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/aclel/deco3801/server/models"
)

func TestUsersCreateWithValidEmail(t *testing.T) {
	env := &models.Env{DB: &models.MockDB{}}

	rec := httptest.NewRecorder()
	reqBody := []byte(`
		{
			"email": "test@email.com"
		}`)

	req, err := http.NewRequest("POST", "/api/readings", bytes.NewBuffer(reqBody))
	if err != nil {
		t.Error(err)
	}

	AppHandler{env, UsersCreate}.ServeHTTP(rec, req)

	got := rec.Code
	want := http.StatusCreated
	if got != want {
		t.Errorf("HTTP status = %v, want %v", got, want)
	}
}
