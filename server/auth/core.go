package auth

import (
	"bufio"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"os"
	"path/filepath"
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
func (jwtAuth *JWTAuth) Authenticate(db *sqlx.DB, user *models.User) bool {
	dbUser := models.User{}
	err := db.Get(&dbUser, "SELECT * FROM user WHERE username = ?", user.Username)
	if err != nil {
		return false
	}
	return user.Username == dbUser.Username && bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(user.Password)) == nil
}

func getPrivateKey() *rsa.PrivateKey {
	absPath, _ := filepath.Abs("./config/api.rsa")
	privateKeyFile, err := os.Open(absPath)
	if err != nil {
		panic(err)
	}

	pemfileinfo, _ := privateKeyFile.Stat()
	var size int64 = pemfileinfo.Size()
	pembytes := make([]byte, size)

	buffer := bufio.NewReader(privateKeyFile)
	_, err = buffer.Read(pembytes)

	data, _ := pem.Decode([]byte(pembytes))

	privateKeyFile.Close()

	privateKey, err := x509.ParsePKCS1PrivateKey(data.Bytes)

	if err != nil {
		panic(err)
	}

	return privateKey
}

func getPublicKey() *rsa.PublicKey {
	absPath, _ := filepath.Abs("./config/api.rsa.pub")
	publicKeyFile, err := os.Open(absPath)

	if err != nil {
		panic(err)
	}

	pemfileinfo, _ := publicKeyFile.Stat()
	var size int64 = pemfileinfo.Size()
	pembytes := make([]byte, size)

	buffer := bufio.NewReader(publicKeyFile)
	_, err = buffer.Read(pembytes)

	data, _ := pem.Decode([]byte(pembytes))

	publicKeyFile.Close()

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
