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

// Setup authenticated and unauthenticated routes in gorilla mux router
func NewRouter(env *config.Env) *mux.Router {
	r := mux.NewRouter().StrictSlash(true)
	// Authenticated routes
	r.Handle("/api/buoys", AuthHandler{env, handlers.BuoysIndex})

	// Unauthenticated routes
	r.Handle("/api/users", AppHandler{env, handlers.UsersCreate})
	r.Handle("/api/login", AppHandler{env, handlers.Login})

	return r
}

// HandlerFunc which wraps handlers which require authentication
type AuthHandler struct {
	*config.Env
	handle func(*config.Env, http.ResponseWriter, *http.Request) (int, error)
}

// Checks the presence and validity of JWT tokens in authenticated routes
// Responds with HTTP 401 Unauthorized if the token is not valid
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

// HandlerFunc which wraps handlers which do not require authentication
// Adds (int, error) return type to handler
type AppHandler struct {
	*config.Env
	handle func(*config.Env, http.ResponseWriter, *http.Request) (int, error)
}

// Executes handler and responds with a HTTP error if the handler returned an error
// This makes handlers a bit easier to use because they don't need to call http.Error.
// http.Error does not make the handler return, meaning that code will keep executing
// and it will be hard to debug what's going on. The handler can now just return an error
// code and this function will server the http.Error.
func (appHandler AppHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if status, err := appHandler.handle(appHandler.Env, w, r); err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), status)
	}
}
