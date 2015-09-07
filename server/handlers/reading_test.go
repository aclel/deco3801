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

	for _, tt := range readingCreateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.in)

		jwtAuth, err := models.InitJWTAuth()
		if err != nil {
			t.Error(err)
		}

		testUser := &models.User{Email: "test@email.com", Role: "system_admin"}
		token, err := jwtAuth.GenerateToken(testUser)
		if err != nil {
			t.Error(err)
		}

		req, err := http.NewRequest("POST", "/api/readings", bytes.NewBuffer(reqBody))
		req.Header.Set("Content-Type", "application/json")
		if err != nil {
			t.Error(err)
		}

		req.Header.Set("Authorization", "Bearer "+string(token))

		AuthHandler{env, ReadingsCreate, "researcher"}.ServeHTTP(rec, req)

		got := rec.Code
		want := tt.out
		if got != want {
			t.Errorf("%v: HTTP status = %v, want %v", tt.description, got, want)
		}
	}
}

var readingCreateTests = []struct {
	description string
	in          string
	out         int
}{
	// OK
	{"OK", `{
				"guid":"test",
				"readings": [{
					"latitude": 27.425676,
					"longitude": 153.147055,
					"sensorReadings": [{
						"sensorName": "Turbidity",
						"value": 40
					}],
					"timestamp": "2006-01-02T15:04:05Z07:00",
					"messageNumber": 1
				}]
			}`, http.StatusCreated},

	// Empty guid
	{"Empty guid", `{
						"guid":"",
						"readings": [{
							"latitude": 27.425676,
							"longitude": 153.147055,
							"sensorReadings": [{
								"sensorName": "Turbidity",
								"value": 40
							}],
							"timestamp": "2006-01-02T15:04:05Z07:00",
							"messageNumber": 1
						}]
					}`, http.StatusBadRequest},

	// Missing guid
	{"Missing guid", `{
						"readings": [{
							"latitude": 27.425676,
							"longitude": 153.147055,
							"sensorReadings": [{
								"sensorName": "Turbidity",
								"value": 40
							}],
							"timestamp": "2006-01-02T15:04:05Z07:00",
							"messageNumber": 1
						}]
					}`, http.StatusBadRequest},

	// Lat and Long are bad strings
	{"Lat and Long are bad strings", `{
										"readings": [{
											"latitude": "aaa",
											"longitude": "bbb",
											"sensorReadings": [{
												"sensorName": "Turbidity",
												"value": 40
											}],
											"timestamp": "2006-01-02T15:04:05Z07:00",
											"messageNumber": 1
										}]
									}`, http.StatusBadRequest},

	// Lat < -90.0
	{"Lat < -90.0", `{
						"readings": [{
							"latitude": -91,
							"longitude": 0,
							"sensorReadings": [{
								"sensorName": "Turbidity",
								"value": 40
							}],
							"timestamp": "2006-01-02T15:04:05Z07:00",
							"messageNumber": 1
						}]
					}`, http.StatusBadRequest},

	// Lat is > 90.0
	{"Lat > 90.0", `{
						"readings": [{
							"latitude": 91,
							"longitude": 0,
							"sensorReadings": [{
								"sensorName": "Turbidity",
								"value": 40
							}],
							"timestamp": "2006-01-02T15:04:05Z07:00",
							"messageNumber": 1
						}]
					}`, http.StatusBadRequest},

	// Long < -180.0
	{"Long < -180.0", `{
						"readings": [{
							"latitude": 0,
							"longitude": -181,
							"sensorReadings": [{
								"sensorName": "Turbidity",
								"value": 40
							}],
							"timestamp": "2006-01-02T15:04:05Z07:00",
							"messageNumber": 1
						}]
					}`, http.StatusBadRequest},

	// Long > 180.0
	{"Long > 180.0", `{
						"readings": [{
							"latitude": 0,
							"longitude": 181,
							"sensorReadings": [{
								"sensorName": "Turbidity",
								"value": 40
							}],
							"timestamp": "2006-01-02T15:04:05Z07:00",
							"messageNumber": 1
						}]
					}`, http.StatusBadRequest},

	// Lat and Long are missing
	{"Lat and Long are missing", `{
									"readings": [{
										"sensorReadings": [{
											"sensorName": "Turbidity",
											"value": 40
										}],
										"timestamp": "2006-01-02T15:04:05Z07:00",
										"messageNumber": 1
									}]
								}`, http.StatusBadRequest},

	// Invalid JSON
	{"Invalid JSON", `asdfasd`, http.StatusBadRequest},
}
