package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/auth"
	"github.com/aclel/deco3801/server/config"
	"github.com/aclel/deco3801/server/handlers"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
)

func NewRouter(env *config.Env) *mux.Router {
	r := mux.NewRouter().StrictSlash(true)
	r.Handle("/buoys", AuthHandler{env, handlers.BuoysIndex})
	r.Handle("/users", AppHandler{env, handlers.UsersCreate})
	r.Handle("/login", AppHandler{env, handlers.Login})

	return r
}

type AuthHandler struct {
	*config.Env
	handle func(*config.Env, http.ResponseWriter, *http.Request) (int, error)
}

func (authHandler AuthHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	jwtAuth := auth.InitJWTAuth()

	// Could do some logging here as well
	token, err := jwt.ParseFromRequest(r, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		} else {
			return jwtAuth.PublicKey, nil
		}
	})

	if err == nil && token.Valid {
		log.Println("Token is valid")
	} else {
		fmt.Println(err)
		http.Error(w, http.StatusText(http.StatusUnauthorized), 401)
		return
	}

	if status, err := authHandler.handle(authHandler.Env, w, r); err != nil {
		switch status {
		case http.StatusNotFound:
			http.Error(w, http.StatusText(http.StatusNotFound), status)
		case http.StatusInternalServerError:
			http.Error(w, http.StatusText(http.StatusInternalServerError), status)
		default:
			http.Error(w, http.StatusText(http.StatusInternalServerError), status)
		}
	}
}

type AppHandler struct {
	*config.Env
	handle func(*config.Env, http.ResponseWriter, *http.Request) (int, error)
}

func (appHandler AppHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if status, err := appHandler.handle(appHandler.Env, w, r); err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), status)
	}
}
