package handlers

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/aclel/deco3801/server/models"
)

func TestReadingsCreate(t *testing.T) {
	env := &models.Env{DB: &models.MockDB{}}

	rec := httptest.NewRecorder()
	reqBody := []byte(`
		{
			"guid":"test", 
			"latitude": -27.425676,
			"longitude": 153.147055,
			"sensorTypeName": "Turbidity",
			"value": 14
		}`)

	jwtAuth, err := models.InitJWTAuth()
	if err != nil {
		t.Error(err)
	}

	token, err := jwtAuth.GenerateToken("test@email.com")
	if err != nil {
		t.Error(err)
	}

	req, err := http.NewRequest("POST", "/api/readings", bytes.NewBuffer(reqBody))
	if err != nil {
		t.Error(err)
	}

	req.Header.Set("Authorization", "Bearer "+string(token))

	AuthHandler{env, ReadingsCreate}.ServeHTTP(rec, req)

	got := rec.Code
	want := http.StatusCreated
	if got != want {
		t.Errorf("HTTP status = %v, want %v", got, want)
	}
}
