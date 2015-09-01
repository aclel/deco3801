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
	rec := httptest.NewRecorder()

	for _, tt := range userCreateTests {
		reqBody := []byte(tt.in)
		req, err := http.NewRequest("POST", "/api/users", bytes.NewBuffer(reqBody))
		req.Header.Set("Content-Type", "application/json")
		if err != nil {
			t.Error(err)
		}

		handler := AppHandler{env, UsersCreate}
		status, _ := handler.handle(handler.Env, rec, req)

		if status != tt.out {
			t.Errorf("%v: HTTP status = %v, want %v", tt.in, status, tt.out)
		}
	}
}
