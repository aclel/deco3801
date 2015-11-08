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

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/aclel/deco3801/server/models"
)

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

var readingsCreateGoodInput = `{
    "guid": "test",
    "r": [
        {
            "lat": "4140.831527",
            "lng": "-00053.173495",
            "al": 257.00, 
            "sp": 15.601, 
            "co": 180.42, 
            "sR": [
                {
                    "type": 1,
                    "val": 100
                }
            ],
            "d": "020812",
            "t": "083418.0"
        }
    ]
}`

var readingCreateTests = []TestWithRequestBody{
	{"OK", "", http.StatusCreated, readingsCreateGoodInput},

	{"Empty guid", "", http.StatusBadRequest, `{
												    "guid": "",
												    "r": [
												        {
												            "lat": "4140.831527",
												            "lng": "-00053.173495",
												            "al": 257.00, 
												            "sp": 15.601, 
												            "co": 180.42, 
												            "sR": [
												                {
												                    "type": 1,
												                    "val": 100
												                }
												            ],
												            "d": "020812",
												            "t": "083418.0"
												        }
												    ]
												}`},

	{"Missing guid", "", http.StatusBadRequest, `{
												    "r": [
												        {
												            "lat": "4140.831527",
												            "lng": "-00053.173495",
												            "al": 257.00, 
												            "sp": 15.601, 
												            "co": 180.42, 
												            "sR": [
												                {
												                    "type": 1,
												                    "val": 100
												                }
												            ],
												            "d": "020812",
												            "t": "083418.0"
												        }
												    ]
												}`},

	// Lat and Long are bad strings
	{"Lat and Long are bad strings", "", http.StatusBadRequest, `{
															    "guid": "test",
															    "r": [
															        {
															            "lat": "xxdfgfg",
															            "lng": "dfgdfgs",
															            "al": 257.00, 
															            "sp": 15.601, 
															            "co": 180.42, 
															            "sR": [
															                {
															                    "type": 1,
															                    "val": 100
															                }
															            ],
															            "d": "020812",
															            "t": "083418.0"
															        }
															    ]
															}`},

	// Lat < -90.0
	{"Lat < -90.0", "", http.StatusBadRequest, `{
												    "guid": "test",
												    "r": [
												        {
												            "lat": "-9940.831527",
												            "lng": "-00053.173495",
												            "al": 257.00, 
												            "sp": 15.601, 
												            "co": 180.42, 
												            "sR": [
												                {
												                    "type": 1,
												                    "val": 100
												                }
												            ],
												            "d": "020812",
												            "t": "083418.0"
												        }
												    ]
												}`},

	// Lat is > 90.0
	{"Lat > 90.0", "", http.StatusBadRequest, `{
												    "guid": "test",
												    "r": [
												        {
												            "lat": "9940.831527",
												            "lng": "-00053.173495",
												            "al": 257.00, 
												            "sp": 15.601, 
												            "co": 180.42, 
												            "sR": [
												                {
												                    "type": 1,
												                    "val": 100
												                }
												            ],
												            "d": "020812",
												            "t": "083418.0"
												        }
												    ]
												}`},

	// Long < -180.0
	{"Long < -180.0", "", http.StatusBadRequest, `{
													    "guid": "test",
													    "r": [
													        {
													            "lat": "4140.831527",
													            "lng": "-99953.173495",
													            "al": 257.00, 
													            "sp": 15.601, 
													            "co": 180.42, 
													            "sR": [
													                {
													                    "type": 1,
													                    "val": 100
													                }
													            ],
													            "d": "020812",
													            "t": "083418.0"
													        }
													    ]
													}`},

	// Long > 180.0
	{"Long > 180.0", "", http.StatusBadRequest, `{
													"guid": "test",
												    "r": [
												        {
												            "lat": "4140.831527",
												            "lng": "99953.173495",
												            "al": 257.00, 
												            "sp": 15.601, 
												            "co": 180.42, 
												            "sR": [
												                {
												                    "type": 1,
												                    "val": 100
												                }
												            ],
												            "d": "020812",
												            "t": "083418.0"
												        }
												    ]
												}`},

	// Lat and Long are missing
	{"Lat and Long are missing", "", http.StatusBadRequest, `{
																"guid": "test",
															    "r": [
															        {
															            "al": 257.00, 
															            "sp": 15.601, 
															            "co": 180.42, 
															            "sR": [
															                {
															                    "type": 1,
															                    "val": 100
															                }
															            ],
															            "d": "020812",
															            "t": "083418.0"
															        }
															    ]
															}`},

	// Invalid datetime
	{"Invalid datetime", "", http.StatusBadRequest, `{
																"guid": "test",
															    "r": [
															        {
															        	"lat": "4140.831527",
																		"lng": "99953.173495",
															            "al": 257.00,
															            "sp": 15.601,
															            "co": 180.42,
															            "sR": [
															                {
															                    "type": 1,
															                    "val": 100
															                }
															            ],
															            "d": "0xxxxxxx",
															            "t": "083418.0"
															        }
															    ]
															}`},

	// Invalid JSON
	{"Invalid JSON", "", http.StatusBadRequest, `{`},
}

func TestReadingsCreate(t *testing.T) {
	TestSetup()

	// Add a buoy instance to mock db
	TestEnv.DB.CreateBuoyInstance(&models.BuoyInstance{Id: 1, BuoyId: 1, Name: "test"})

	// Add a buoy to mock db
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 1, Guid: "test", ActiveBuoyInstanceId: 1, Archived: false})

	for _, tt := range readingCreateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.requestBody)
		req, err := http.NewRequest("POST", "/buoys/api/readings", bytes.NewBuffer(reqBody))
		if err != nil {
			t.Error(err)
		}

		TestBuoyRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}
	}
}
