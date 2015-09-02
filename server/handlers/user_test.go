package handlers

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/aclel/deco3801/server/models"
)

var userCreateTests = []struct {
	in  string
	out int
}{
	{`{"email":"test@email.com"}`, http.StatusCreated},
	{`{"email":""}`, http.StatusBadRequest},
	{`{"email":"test@"}`, http.StatusBadRequest},
	{`dfgdfg`, http.StatusBadRequest},
	{`{}`, http.StatusBadRequest},
}

func TestUsersCreate(t *testing.T) {
	env := &models.Env{DB: &models.MockDB{}}

	for _, tt := range userCreateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.in)
		req, err := http.NewRequest("POST", "/api/users", bytes.NewBuffer(reqBody))
		req.Header.Set("Content-Type", "application/json")
		if err != nil {
			t.Error(err)
		}

		AppHandler{env, UsersCreate}.ServeHTTP(rec, req)

		if rec.Code != tt.out {
			t.Errorf("%v: HTTP status = %v, want %v", tt.in, rec.Code, tt.out)
		}
	}
}
