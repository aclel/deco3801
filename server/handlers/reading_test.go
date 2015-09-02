package handlers

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/aclel/deco3801/server/models"
)

var readingCreateTests = []struct {
	description string
	in          string
	out         int
}{
	// OK
	{"OK", `{"guid":"test", "latitude": 27.425676, "longitude": 153.147055,
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusCreated},

	// Empty guid
	{"Empty guid", `{"guid":"", "latitude": -27.425676, "longitude": 153.147055,
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Missing guid
	{"Missing guid", `"latitude": -27.425676, "longitude": 153.147055,
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Lat and Long are bad strings
	{"Lat and Long are bad strings", `{"guid":"test", "latitude": "aaaa", "longitude": "bbbb",
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Lat < -90.0
	{"Lat < -90.0", `{"guid":"test", "latitude": -91, "longitude": 0,
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Lat is > 90.0
	{"Lat > 90.0", `{"guid":"test", "latitude": 91, "longitude": 0,
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Long < -180.0
	{"Long < -180.0", `{"guid":"test", "latitude": 0, "longitude": -181,
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Long > 180.0
	{"Long > 180.0", `{"guid":"test", "latitude": -91, "longitude": 181,
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Lat and Long are missing
	{"Lat and Long are missing", `{"guid":"test", 
		"sensorTypeName": "Turbidity","value": 14}`, http.StatusBadRequest},

	// Invalid JSON
	{"Invalid JSON", `asdfasd`, http.StatusBadRequest},
}

func TestReadingsCreate(t *testing.T) {
	//log.SetOutput(ioutil.Discard)
	env := &models.Env{DB: &models.MockDB{}}

	for _, tt := range readingCreateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.in)

		jwtAuth, err := models.InitJWTAuth()
		if err != nil {
			t.Error(err)
		}

		token, err := jwtAuth.GenerateToken("test@email.com")
		if err != nil {
			t.Error(err)
		}

		req, err := http.NewRequest("POST", "/api/readings", bytes.NewBuffer(reqBody))
		req.Header.Set("Content-Type", "application/json")
		if err != nil {
			t.Error(err)
		}

		req.Header.Set("Authorization", "Bearer "+string(token))

		AuthHandler{env, ReadingsCreate}.ServeHTTP(rec, req)

		got := rec.Code
		want := tt.out
		if got != want {
			t.Errorf("%v: HTTP status = %v, want %v", tt.description, got, want)
		}
	}

}
