package handlers

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/aclel/deco3801/server/models"
)

func TestReadingsCreate(t *testing.T) {
	rec := httptest.NewRecorder()
	reqBody := []byte(`
		{
			"guid":"test", 
			"latitude": -27.425676,
			"longitude": 153.147055,
			"buoy_instance_sensor_id": 1,
			"value": 14,
		}`)
	req, _ := http.NewRequest("POST", "/api/readings", bytes.NewBuffer(reqBody))
	req.Header.Set("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NDEwMjcxODIsImlhdCI6MTQ0MDk0MDc4Miwic3ViIjoiYW5kcmV3LmNsZWxhbmQzQGdtYWlsLmNvbSJ9.tJL9KnXj-RHXWTObWXASzHwtqnwG48lslHXWkXQM4cW8i8wppDG81J8vhZ54qVZWvBCxzYvmbWvpuaAYeREMLr-fNgwwzFzzjdNXClXF_NoljIiOTFKN9FG5s3yndhanNMY_syvFunx2nWr7ht4hxQ-85N54Ef8TlEWLJJWWuRc")

	env := &models.Env{DB: &models.MockDB{}}
	AuthHandler{env, ReadingsCreate}.ServeHTTP(rec, req)

	got := rec.Code
	want := http.StatusCreated
	if got != want {
		t.Errorf("HTTP status = %v, want %v", got, want)
	}
}
