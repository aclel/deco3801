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
	"errors"
	"os"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

type JWTAuth struct {
	SecretKey []byte
}

var jwtAuth *JWTAuth = nil

// Initialise a JWTAuth object which has a public key and private key
func InitJWTAuth() (*JWTAuth, error) {
	if jwtAuth == nil {
		secretKey, err := getSecretKey()
		if err != nil {
			return nil, err
		}

		jwtAuth = &JWTAuth{
			SecretKey: secretKey,
		}
	}
	return jwtAuth, nil
}

// Generate a JWT for the given user.
// The token is signed with a private RSA key.
// The user's role is included in the token for authorization.
func (jwtAuth *JWTAuth) GenerateToken(user *User) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims["exp"] = time.Now().Add(time.Hour * time.Duration(24)).Unix() // 24 hour expiry
	token.Claims["iat"] = time.Now().Unix()
	token.Claims["sub"] = user.Email
	token.Claims["role"] = user.Role
	tokenString, err := token.SignedString(jwtAuth.SecretKey)
	if err != nil {
		panic(err)
		return "", err
	}

	return tokenString, nil
}

// Authenticates the given user. Pulls the user record from the database and checks that the emails and passwords are the same.
// Returns true if authenticated.
func (jwtAuth *JWTAuth) Authenticate(dbUser *User, user *User) bool {

	// Check that the emails and password hashes are the same
	return user.Email == dbUser.Email && bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(user.Password)) == nil
}

func getSecretKey() ([]byte, error) {
	key := os.Getenv("FMS_SECRET_KEY")
	if key == "" {
		return []byte(""), errors.New("No environment variable named FMS_SECRET_KEY")
	}

	return []byte(key), nil
}
