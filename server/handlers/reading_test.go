// Flood Monitoring System
// Version 0.0.1 (Duyung)
//
// Copyright (C) Team Neptune
// All rights reserved.
//
// @author     Andrew Cleland <andrew.cleland3@gmail.com>
// @version    0.0.1
// @copyright  Team Neptune (2015)
// @link       https://github.com/aclel/deco3801
package handlers

import "testing"

var latitudeTests = []struct {
	description string
	in          string
	out         float64
}{
	{"Positive", "4140.831527", 41.680525},
	{"Negative", "-4140.831527", -41.680525},
	{"Zero degrees", "0033.6195", 0.560325},
	{"Bad sign", "j4140.831527", 0},
	{"Double sign", "--4140.831527", 0},
}

func TestLatitudeParser(t *testing.T) {
	for _, tt := range latitudeTests {
		got, _ := parseLatitude(tt.in)
		if toFixed(got, 6) != tt.out {
			t.Errorf("%v: got = %v, want = %v", tt.description, got, tt.out)
		}
	}
}

var longitudeTests = []struct {
	description string
	in          string
	out         float64
}{
	{"Positive", "12453.173495", 124.886225},
	{"Negative", "-12453.173495", -124.886225},
	{"Zero degrees", "-00053.173495", -0.886225},
	{"Bad sign", "j12453.173495", 0},
	{"Double sign", "--12453.173495", 0},
}

func TestLongitudeParser(t *testing.T) {
	for _, tt := range longitudeTests {
		got, _ := parseLongitude(tt.in)
		if toFixed(got, 6) != tt.out {
			t.Errorf("%v: got = %v, want = %v", tt.description, got, tt.out)
		}
	}
}

/*
func TestReadingsCreate(t *testing.T) {
	env := &models.Env{DB: &models.MockDB{}}

	for _, tt := range readingCreateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.in)

		req, err := http.NewRequest("POST", "/api/readings", bytes.NewBuffer(reqBody))
		req.Header.Set("Content-Type", "application/json")
		if err != nil {
			t.Error(err)
		}

		AppHandler{env, ReadingsCreate}.ServeHTTP(rec, req)

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
					"timestamp": 1442115887,
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
							"timestamp": 1442115887,
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
							"timestamp": 1442115887,
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
											"timestamp": 1442115887,
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
							"timestamp": 1442115887,
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
							"timestamp": 1442115887,
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
							"timestamp": 1442115887,
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
							"timestamp": 1442115887,
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
										"timestamp": 1442115887,
										"messageNumber": 1
									}]
								}`, http.StatusBadRequest},

	// Invalid JSON
	{"Invalid JSON", `asdfasd`, http.StatusBadRequest},
}
*/
