package handlers

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/aclel/deco3801/server/models"
)

var buoyIndexGoodOutput = `{
  "buoys": [
	    {
	      "id": 1,
	      "guid": "test",
	      "name": "",
	      "activeBuoyInstanceId": 1,
	      "archived": false
	    },
	    {
	      "id": 2,
	      "guid": "test2",
	      "name": "",
	      "activeBuoyInstanceId": 2,
	      "archived": false
	    }
    ]
}`

var buoysIndexTests = []TestWithResponseBody{
	{"System Admin allowed", GenerateTokenForRole("system_admin"), http.StatusOK, buoyIndexGoodOutput},
	{"Power User allowed", GenerateTokenForRole("power_user"), http.StatusOK, buoyIndexGoodOutput},
	{"User allowed", GenerateTokenForRole("user"), http.StatusOK, buoyIndexGoodOutput},
}

func TestBuoysIndex(t *testing.T) {
	TestSetup()
	// Add two buoys to mock db
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 1, Guid: "test", ActiveBuoyInstanceId: 1, Archived: false})
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 2, Guid: "test2", ActiveBuoyInstanceId: 2, Archived: false})

	for _, tt := range buoysIndexTests {
		rec := httptest.NewRecorder()

		req, err := http.NewRequest("GET", "/api/buoys", nil)
		req.Header.Set("Authorization", "Bearer "+tt.token)
		if err != nil {
			t.Error(err)
		}

		TestAppRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}

		tt.expectedResponse = RemoveWhitespace(tt.expectedResponse)
		actualResponse := rec.Body.String()
		if actualResponse != tt.expectedResponse {
			t.Errorf("%v:\n Response = %v,\n Expected = %v", tt.description, actualResponse, tt.expectedResponse)
		}
	}
}

var buoyShowGoodOutput = `{
  "id": 1,
  "guid": "test",
  "name": "",
  "activeBuoyInstanceId": 1,
  "archived": false
}`

var buoysShowTests = []TestWithResponseBody{
	{"System Admin allowed", GenerateTokenForRole("system_admin"), http.StatusOK, buoyShowGoodOutput},
	{"Power User allowed", GenerateTokenForRole("power_user"), http.StatusOK, buoyShowGoodOutput},
	{"User allowed", GenerateTokenForRole("user"), http.StatusOK, buoyShowGoodOutput},
}

func TestBuoysShow(t *testing.T) {
	TestSetup()
	// Add a buoy to mock db
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 1, Guid: "test", ActiveBuoyInstanceId: 1, Archived: false})

	for _, tt := range buoysShowTests {
		rec := httptest.NewRecorder()

		req, err := http.NewRequest("GET", "/api/buoys/1", nil)
		req.Header.Set("Authorization", "Bearer "+tt.token)
		if err != nil {
			t.Error(err)
		}

		TestAppRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}

		tt.expectedResponse = RemoveWhitespace(tt.expectedResponse)
		actualResponse := rec.Body.String()
		if actualResponse != tt.expectedResponse {
			t.Errorf("%v:\n Response = %v,\n Expected = %v", tt.description, actualResponse, tt.expectedResponse)
		}
	}
}

var buoysCreateGoodInput = `{
    "guid": "test",
    "name": "testName"
}`

var buoysCreateTests = []TestWithRequestBody{
	{"System Admin allowed", GenerateTokenForRole("system_admin"), http.StatusCreated, buoysCreateGoodInput},
	{"Power User allowed", GenerateTokenForRole("power_user"), http.StatusCreated, buoysCreateGoodInput},
	{"User allowed", GenerateTokenForRole("user"), http.StatusUnauthorized, buoysCreateGoodInput},
	{"Invalid json", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{`},
	{"Empty json", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{}`},
	{"Missing guid", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{"name":"test"}`},
	{"Missing name", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{"guid":"test"}`},
}

func TestBuoysCreate(t *testing.T) {
	TestSetup()
	for _, tt := range buoysCreateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.requestBody)
		req, err := http.NewRequest("POST", "/api/buoys", bytes.NewBuffer(reqBody))
		req.Header.Set("Authorization", "Bearer "+tt.token)
		if err != nil {
			t.Error(err)
		}

		TestAppRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}
	}
}

var buoysUpdateGoodInput = `{
    "guid": "test"
}`

var buoysUpdateTests = []TestWithRequestBody{
	{"System Admin allowed", GenerateTokenForRole("system_admin"), http.StatusOK, buoysUpdateGoodInput},
	{"Power User allowed", GenerateTokenForRole("power_user"), http.StatusOK, buoysUpdateGoodInput},
	{"User allowed", GenerateTokenForRole("user"), http.StatusUnauthorized, buoysUpdateGoodInput},
	{"Invalid json", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{`},
	{"Missing guid", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{}`},
}

func TestBuoysUpdate(t *testing.T) {
	TestSetup()
	// Add a buoy to mock db
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 1, Guid: "test", ActiveBuoyInstanceId: 1, Archived: false})

	for _, tt := range buoysUpdateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.requestBody)
		req, err := http.NewRequest("PUT", "/api/buoys/1", bytes.NewBuffer(reqBody))
		req.Header.Set("Authorization", "Bearer "+tt.token)
		if err != nil {
			t.Error(err)
		}

		TestAppRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}
	}
}

var buoysDeleteTests = []TestWithoutBody{
	{"System Admin allowed", GenerateTokenForRole("system_admin"), http.StatusOK},
	{"Power User allowed", GenerateTokenForRole("power_user"), http.StatusOK},
	{"User allowed", GenerateTokenForRole("user"), http.StatusUnauthorized},
}

func TestBuoysDelete(t *testing.T) {
	TestSetup()
	// Add a buoy to mock db
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 1, Guid: "test", ActiveBuoyInstanceId: 1, Archived: false})

	for _, tt := range buoysDeleteTests {
		rec := httptest.NewRecorder()
		req, err := http.NewRequest("DELETE", "/api/buoys/1", nil)
		req.Header.Set("Authorization", "Bearer "+tt.token)
		if err != nil {
			t.Error(err)
		}

		TestAppRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}
	}
}

var buoyCommandsCreateGoodInput = `{
    "commands": [
        {
            "commandTypeId": 1,
            "value": 30
        },
        {
            "commandTypeId": 2,
            "value": 50
        }
    ]  
}`

var buoyCommandsCreateTests = []TestWithRequestBody{
	{"System Admin allowed", GenerateTokenForRole("system_admin"), http.StatusCreated, buoyCommandsCreateGoodInput},
	{"Power User allowed", GenerateTokenForRole("power_user"), http.StatusCreated, buoyCommandsCreateGoodInput},
	{"User allowed", GenerateTokenForRole("user"), http.StatusUnauthorized, buoyCommandsCreateGoodInput},
	{"Invalid json", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{`},
	// {"Empty json", GenerateTokenForRole("system_admin"), http.StatusBadRequest, `{}`},
}

func TestBuoyCommandsCreate(t *testing.T) {
	TestSetup()
	// Add a buoy to mock db
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 1, Guid: "test", ActiveBuoyInstanceId: 1, Archived: false})

	for _, tt := range buoyCommandsCreateTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.requestBody)
		req, err := http.NewRequest("POST", "/api/buoys/1/commands", bytes.NewBuffer(reqBody))
		req.Header.Set("Authorization", "Bearer "+tt.token)
		if err != nil {
			t.Error(err)
		}

		TestAppRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}
	}
}

var buoyCommandsAppIndexGoodOutput = `{
  "commands": [
    {
      "id": 1,
      "buoyId": 1,
      "commandTypeId": 2,
      "value": 0,
      "sent": false,
      "sentAt": {
        "Time": "0001-01-01T00:00:00Z",
        "Valid": false
      },
      "createdAt": "2015-10-28T04:00:00Z"
    },
    {
      "id": 2,
      "buoyId": 1,
      "commandTypeId": 2,
      "value": 0,
      "sent": false,
      "sentAt": {
        "Time": "0001-01-01T00:00:00Z",
        "Valid": false
      },
      "createdAt": "2015-10-28T04:00:00Z"
    }
  ]
}`

var buoyCommandsAppIndexTests = []TestWithResponseBody{
	{"System Admin allowed", GenerateTokenForRole("system_admin"), http.StatusOK, buoyCommandsAppIndexGoodOutput},
	{"Power User allowed", GenerateTokenForRole("power_user"), http.StatusOK, buoyCommandsAppIndexGoodOutput},
	{"User allowed", GenerateTokenForRole("user"), http.StatusUnauthorized, "Unauthorized"},
}

func TestBuoyCommandsAppIndex(t *testing.T) {
	TestSetup()

	parsedTime, err := time.Parse("2006-01-02T03:04", "2015-10-28T04:00")
	if err != nil {
		t.Errorf("Error parsing time: " + err.Error())
	}
	// Add two buoys to mock db
	TestEnv.DB.AddCommandToBuoy(&models.Command{Id: 1, BuoyId: 1, CommandTypeId: 2, Value: 0, Sent: false, CreatedAt: parsedTime})
	TestEnv.DB.AddCommandToBuoy(&models.Command{Id: 2, BuoyId: 1, CommandTypeId: 2, Value: 0, Sent: false, CreatedAt: parsedTime})

	for _, tt := range buoyCommandsAppIndexTests {
		rec := httptest.NewRecorder()

		req, err := http.NewRequest("GET", "/api/buoys/1/commands", nil)
		req.Header.Set("Authorization", "Bearer "+tt.token)
		if err != nil {
			t.Error(err)
		}

		TestAppRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}

		tt.expectedResponse = RemoveWhitespace(tt.expectedResponse)
		actualResponse := RemoveWhitespace(rec.Body.String())
		if actualResponse != tt.expectedResponse {
			t.Errorf("%v:\n Response = %v,\n Expected = %v", tt.description, actualResponse, tt.expectedResponse)
		}
	}
}

var buoyCommandsIndexGoodOutput = `1,1,30;1,2,40;`

var buoyCommandsIndexTests = []TestWithResponseBody{
	{"Basic", "", http.StatusOK, buoyCommandsIndexGoodOutput},
}

func TestBuoyCommandsIndex(t *testing.T) {
	TestSetup()

	parsedTime, err := time.Parse("2006-01-02T03:04", "2015-10-28T04:00")
	if err != nil {
		t.Errorf("Error parsing time: " + err.Error())
	}

	TestEnv.DB.CreateBuoyInstance(&models.BuoyInstance{Id: 1, BuoyId: 1, Name: "test"})

	// Add two buoys to mock db
	TestEnv.DB.AddCommandToBuoy(&models.Command{Id: 1, BuoyId: 1, CommandTypeId: 1, Value: 30, Sent: false, CreatedAt: parsedTime})
	TestEnv.DB.AddCommandToBuoy(&models.Command{Id: 2, BuoyId: 1, CommandTypeId: 1, Value: 40, Sent: false, CreatedAt: parsedTime})

	for _, tt := range buoyCommandsIndexTests {
		rec := httptest.NewRecorder()

		req, err := http.NewRequest("GET", "/buoys/api/commands?guid=test", nil)
		if err != nil {
			t.Error(err)
		}

		TestBuoyRouter.ServeHTTP(rec, req)

		actualStatus := rec.Code
		if actualStatus != tt.expectedStatus {
			t.Errorf("%v:\n HTTP status = %v, Expected = %v", tt.description, actualStatus, tt.expectedStatus)
		}

		tt.expectedResponse = RemoveWhitespace(tt.expectedResponse)
		actualResponse := RemoveWhitespace(rec.Body.String())
		if actualResponse != tt.expectedResponse {
			t.Errorf("%v:\n Response = %v,\n Expected = %v", tt.description, actualResponse, tt.expectedResponse)
		}
	}
}

var buoyCommandsAcknowledgeGoodInput = `{
    "guid": "test",
    "ids": [1]
}`

var buoyCommandsAcknowledgeTests = []TestWithRequestBody{
	{"Basic", "", http.StatusOK, buoyCommandsAcknowledgeGoodInput},
	{"Invalid json", "", http.StatusInternalServerError, `{`},
	// {"Empty json", "", http.StatusBadRequest, `{}`},
}

func TestBuoyCommandsAcknowledge(t *testing.T) {
	TestSetup()

	// Add a buoy instance to mock db
	TestEnv.DB.CreateBuoyInstance(&models.BuoyInstance{Id: 1, BuoyId: 1, Name: "test"})

	// Add a buoy to mock db
	TestEnv.DB.CreateBuoy(&models.Buoy{Id: 1, Guid: "test", ActiveBuoyInstanceId: 1, Archived: false})

	for _, tt := range buoyCommandsAcknowledgeTests {
		rec := httptest.NewRecorder()
		reqBody := []byte(tt.requestBody)
		req, err := http.NewRequest("POST", "/buoys/api/commands/ack", bytes.NewBuffer(reqBody))
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
