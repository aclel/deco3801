package auth

import (
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"os"
	"time"

	"github.com/aclel/deco3801/server/models"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/jmoiron/sqlx"
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

// Generate a JWT for the user with the given username
// The token is signed with a private RSA key
func (jwtAuth *JWTAuth) GenerateToken(username string) (string, error) {
	token := jwt.New(jwt.SigningMethodRS256)
	token.Claims["exp"] = time.Now().Add(time.Hour * time.Duration(24)).Unix() // 24 hour expiry
	token.Claims["iat"] = time.Now().Unix()
	token.Claims["sub"] = username
	tokenString, err := token.SignedString(jwtAuth.privateKey)
	if err != nil {
		panic(err)
		return "", err
	}

	return tokenString, nil
}

// Authenticates the given user
// Pulls the user record from the database and checks that the passwords are the same
// Returns true if authenticated
func (jwtAuth *JWTAuth) Authenticate(db *sqlx.DB, user *models.User) bool {
	dbUser := models.User{}
	err := db.Get(&dbUser, "SELECT * FROM user WHERE username = ?", user.Username)
	if err != nil {
		return false
	}
	// Check that the usernames and password hashes are the same
	return user.Username == dbUser.Username && bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(user.Password)) == nil
}

// Get a private key from a local file
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
