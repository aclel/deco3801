package models

import (
	"testing"

	"github.com/dgrijalva/jwt-go"
)

func TestInitJWTAuth(t *testing.T) {
	jwtAuth := InitJWTAuth()
	if jwtAuth.PublicKey == nil {
		t.Errorf("Public key was nil")
	}

	if jwtAuth.privateKey == nil {
		t.Errorf("Private key was nil")
	}
}

func TestGenerateToken(t *testing.T) {
	jwtAuth := InitJWTAuth()
	tokenString, err := jwtAuth.GenerateToken("test@email.com")

	if err != nil {
		t.Errorf("Error generating token: %v", err)
	}

	if tokenString == "" {
		t.Error("Token string was empty")
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return jwtAuth.PublicKey, nil
	})

	if err != nil {
		t.Errorf("Error parsing token: %v", err)
	}

	want := true
	got := token.Valid
	if got != want {
		t.Errorf("token.Valid = %v, want %v")
	}
}

// encrypted hash of "secret"
var passwordHash = "$2a$08$cMD2Z9/EYtJQUgfyfKPzKu/JGjbHIxnAqUIZO6ah9zRkzrG41REeq"

func TestAuthenticate(t *testing.T) {
	jwtAuth := InitJWTAuth()
	user := &User{
		Email:    "bobby",
		Password: "secret",
	}

	dbUser := &User{
		Email:    "bobby",
		Password: passwordHash, // hash of "secret"
	}

	want := true
	got := jwtAuth.Authenticate(dbUser, user)
	if got != want {
		t.Errorf("Authenticate(dbUser, user) got %v, want %v", got, want)
	}
}

func TestAuthenticateIncorrectPassword(t *testing.T) {
	jwtAuth := InitJWTAuth()
	user := &User{
		Email:    "bobby",
		Password: "wrongpassword",
	}

	dbUser := &User{
		Email:    "bobby",
		Password: passwordHash, // hash of "secret"
	}

	want := false
	got := jwtAuth.Authenticate(dbUser, user)
	if got != want {
		t.Errorf("Authenticate(dbUser, user) got %v, want %v", got, want)
	}
}

func TestAuthenticateIncorrectEmail(t *testing.T) {
	jwtAuth := InitJWTAuth()
	user := &User{
		Email:    "bobby",
		Password: "secret",
	}

	dbUser := &User{
		Email:    "wrongEmail",
		Password: passwordHash, // hash of "secret"
	}

	want := false
	got := jwtAuth.Authenticate(dbUser, user)
	if got != want {
		t.Errorf("Authenticate(dbUser, user) got %v, want %v", got, want)
	}
}
