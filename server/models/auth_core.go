package models

import (
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
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
func InitJWTAuth() *JWTAuth {
	if jwtAuth == nil {
		jwtAuth = &JWTAuth{
			privateKey: getPrivateKey(),
			PublicKey:  getPublicKey(),
		}
	}
	return jwtAuth
}

// Generate a JWT for the user with the given email
// The token is signed with a private RSA key
func (jwtAuth *JWTAuth) GenerateToken(email string) (string, error) {
	token := jwt.New(jwt.SigningMethodRS256)
	token.Claims["exp"] = time.Now().Add(time.Hour * time.Duration(24)).Unix() // 24 hour expiry
	token.Claims["iat"] = time.Now().Unix()
	token.Claims["sub"] = email
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
func getPrivateKey() *rsa.PrivateKey {
	pemBytes := os.Getenv("FMS_PRIVATE_KEY")
	if pemBytes == "" {
		panic("No environment variable named FMS_PRIVATE_KEY")
	}

	data, _ := pem.Decode([]byte(pemBytes))

	privateKey, err := x509.ParsePKCS1PrivateKey(data.Bytes)

	if err != nil {
		panic(err)
	}

	return privateKey
}

// Get a public key from an environment variable
func getPublicKey() *rsa.PublicKey {
	pemBytes := os.Getenv("FMS_PUBLIC_KEY")
	if pemBytes == "" {
		panic("No environment variable named FMS_PUBLIC_KEY")
	}

	data, _ := pem.Decode([]byte(pemBytes))

	publicKeyImported, err := x509.ParsePKIXPublicKey(data.Bytes)

	if err != nil {
		panic(err)
	}

	publicKey, ok := publicKeyImported.(*rsa.PublicKey)

	if !ok {
		panic(err)
	}

	return publicKey
}
