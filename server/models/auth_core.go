/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Cleland <andrew.cleland3@gmail.com>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
package models

import (
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"errors"
	"os"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"golang.org/x/crypto/bcrypt"
)

type JWTAuth struct {
	privateKey *rsa.PrivateKey
	PublicKey  *rsa.PublicKey
}

var jwtAuth *JWTAuth = nil

// Initialise a JWTAuth object which has a public key and private key
func InitJWTAuth() (*JWTAuth, error) {
	if jwtAuth == nil {
		privateKey, err := getPrivateKey()
		if err != nil {
			return nil, err
		}

		publicKey, err := getPublicKey()
		if err != nil {
			return nil, err
		}

		jwtAuth = &JWTAuth{
			privateKey: privateKey,
			PublicKey:  publicKey,
		}
	}
	return jwtAuth, nil
}

// Generate a JWT for the given user.
// The token is signed with a private RSA key.
// The user's role is included in the token for authorization.
func (jwtAuth *JWTAuth) GenerateToken(user *User) (string, error) {
	token := jwt.New(jwt.SigningMethodRS256)
	token.Claims["exp"] = time.Now().Add(time.Hour * time.Duration(24)).Unix() // 24 hour expiry
	token.Claims["iat"] = time.Now().Unix()
	token.Claims["sub"] = user.Email
	token.Claims["role"] = user.Role
	tokenString, err := token.SignedString(jwtAuth.privateKey)
	if err != nil {
		panic(err)
		return "", err
	}

	return tokenString, nil
}

// Authenticates the given user.
// Pulls the user record from the database and checks that the emails and passwords are the same.
// Returns true if authenticated.
func (jwtAuth *JWTAuth) Authenticate(dbUser *User, user *User) bool {

	// Check that the emails and password hashes are the same
	return user.Email == dbUser.Email && bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(user.Password)) == nil
}

// Get a private key from an environment variable
func getPrivateKey() (*rsa.PrivateKey, error) {
	pemBytes := os.Getenv("FMS_PRIVATE_KEY")
	if pemBytes == "" {
		return nil, errors.New("No environment variable named FMS_PRIVATE_KEY")
	}

	data, _ := pem.Decode([]byte(pemBytes))
	if data == nil {
		return nil, errors.New("FMS_PRIVATE_KEY is an invalid RSA key")
	}

	privateKey, err := x509.ParsePKCS1PrivateKey(data.Bytes)

	if err != nil {
		return nil, err
	}

	return privateKey, nil
}

// Get a public key from an environment variable
func getPublicKey() (*rsa.PublicKey, error) {
	pemBytes := os.Getenv("FMS_PUBLIC_KEY")
	if pemBytes == "" {
		return nil, errors.New("No environment variable named FMS_PUBLIC_KEY")
	}

	data, _ := pem.Decode([]byte(pemBytes))
	if data == nil {
		return nil, errors.New("FMS_PUBLIC_KEY is an invalid RSA key")
	}

	publicKeyImported, err := x509.ParsePKIXPublicKey(data.Bytes)

	if err != nil {
		return nil, err
	}

	publicKey, ok := publicKeyImported.(*rsa.PublicKey)

	if !ok {
		return nil, err
	}

	return publicKey, nil
}
