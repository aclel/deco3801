package handlers

import (
	"strings"
	"unicode"

	"github.com/aclel/deco3801/server/models"
	"github.com/gorilla/mux"
)

var (
	TestEnv        *models.Env
	TestAppRouter  *mux.Router
	TestBuoyRouter *mux.Router
)

type TestWithResponseBody struct {
	description      string
	token            string
	expectedStatus   int
	expectedResponse string
}

type TestWithRequestBody struct {
	description    string
	token          string
	expectedStatus int
	requestBody    string
}

type TestWithoutBody struct {
	description    string
	token          string
	expectedStatus int
}

func TestSetup() {
	TestEnv = &models.Env{DB: &models.MockDB{}}
	TestAppRouter = NewAppRouter(TestEnv)
	TestBuoyRouter = NewBuoyRouter(TestEnv)
}

// Generates a JWT for the given role. Possible roles
// are "system_admin", "power_user" and "user".
func GenerateTokenForRole(role string) string {
	jwtAuth, err := models.InitJWTAuth()
	if err != nil {
		return ""
	}
	testUser := &models.User{Email: "test@email.com", Role: role}
	token, err := jwtAuth.GenerateToken(testUser)
	if err != nil {
		return ""
	}

	return token
}

// Remove all whitespace from a string. Applied to JSON before
// comparison between actual output and expected output.
func RemoveWhitespace(str string) string {
	return strings.Map(func(r rune) rune {
		if unicode.IsSpace(r) {
			return -1
		}
		return r
	}, str)
}
