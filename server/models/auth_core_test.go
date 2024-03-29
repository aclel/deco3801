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
package models

import (
	"os"
	"testing"

	jwt "github.com/dgrijalva/jwt-go"
)

func TestMain(m *testing.M) {
	jwtAuth, _ = InitJWTAuth()
	os.Exit(m.Run())
}

func TestInitJWTAuth(t *testing.T) {
	if jwtAuth.SecretKey == nil {
		t.Errorf("Secret key was empty")
	}
}

func TestGenerateToken(t *testing.T) {
	testUser := &User{Email: "test@email.com", Role: "system_admin"}
	tokenString, err := jwtAuth.GenerateToken(testUser)

	if err != nil {
		t.Errorf("Error generating token: %v", err)
	}

	if tokenString == "" {
		t.Error("Token string was empty")
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return jwtAuth.SecretKey, nil
	})

	if err != nil {
		t.Errorf("Error parsing token: %v", err)
	}

	want := true
	got := token.Valid
	if got != want {
		t.Errorf("token.Valid = %v, want %v", got, want)
	}
}

// encrypted hash of "secret"
var passwordHash = "$2a$08$cMD2Z9/EYtJQUgfyfKPzKu/JGjbHIxnAqUIZO6ah9zRkzrG41REeq"

func TestAuthenticate(t *testing.T) {
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

func TestGetSecretKey(t *testing.T) {
	_, err := getSecretKey()
	if err != nil {
		t.Error(err)
	}
}
