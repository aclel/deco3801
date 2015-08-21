package auth

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/models"
	"github.com/jmoiron/sqlx"
)

type TokenAuth struct {
	Token string `json:"token"`
}

// Authenticates the given user and issues a token in a json
// response if the authentication was successful.
//
// Returns 401 Unauthorized if authentication was unsuccessful
func Login(db *sqlx.DB, user *models.User) (int, []byte) {
	jwtAuth := InitJWTAuth()

	// Get user with given username from the database
	dbUser := &models.User{}
	err := db.Get(&dbUser, "SELECT * FROM user WHERE username = ?", user.Username)

	if err != nil {
		return http.StatusInternalServerError, []byte("")
	}

	if jwtAuth.Authenticate(dbUser, user) {
		log.Println("Authenticated")
		token, err := jwtAuth.GenerateToken(user.Username)
		if err != nil {
			return http.StatusInternalServerError, []byte("")
		} else {
			response, _ := json.Marshal(TokenAuth{token})
			return http.StatusOK, response
		}
	}

	log.Printf("Unauthorized")
	return http.StatusUnauthorized, []byte("")
}

// Reissues a token to an authenticated user
func RefreshToken(db *sqlx.DB, user *models.User) []byte {
	jwtAuth := InitJWTAuth()
	token, err := jwtAuth.GenerateToken(user.Username)
	if err != nil {
		panic(err)
	}
	response, err := json.Marshal(TokenAuth{token})
	if err != nil {
		panic(err)
	}
	return response
}
