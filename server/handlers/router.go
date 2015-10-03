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
package handlers

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"

	"github.com/aclel/deco3801/server/models"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/justinas/alice"
	"github.com/rs/cors"
)

// Setup all routes in gorilla mux router. Authenticated routes access can be restricted to users
// with certain roles - researchers, power users and system administrators. The permissions are heirarchical,
// meaning that a system administrator can do everything that a power user can do, who can do everything that
// a researcher can do.
func NewRouter(env *models.Env) *mux.Router {
	r := mux.NewRouter().StrictSlash(true)

	// Enable CORS to allow Cross Origin requests
	c := cors.New(cors.Options{
		// This can be uncommented to restrict CORS to only localhost:8080 and teamneptune.co
		//AllowedOrigins:   []string{"http://localhost:8080", "http://teamneptune.co"},
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"POST", "GET", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type", "Accept-Encoding", "X-CSRF-Token", "Authorization"},
		AllowCredentials: true,
	})

	// Setup the default middleware chain. Everything in the chain is executed in order before the route handler
	// is executed.
	defaultChain := alice.New(c.Handler)

	//TODO: Update roles in routes

	// Authenticated routes
	r.Handle("/api/buoys", defaultChain.Then(AuthHandler{env, BuoysIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoys", defaultChain.Then(AuthHandler{env, BuoysCreate, "researcher"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoysUpdate, "researcher"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoysShow, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoysDelete, "researcher"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}/commands", defaultChain.Then(AuthHandler{env, BuoyCommandsCreate, "researcher"})).Methods("POST", "OPTIONS")

	r.Handle("/api/buoy_groups", defaultChain.Then(AuthHandler{env, BuoyGroupsIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_groups", defaultChain.Then(AuthHandler{env, BuoyGroupsCreate, "researcher"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyGroupsUpdate, "researcher"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyGroupsShow, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyGroupsDelete, "researcher"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}/buoys", defaultChain.Then(AuthHandler{env, BuoyGroupsBuoysIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}/buoy_instances", defaultChain.Then(AuthHandler{env, BuoyGroupsBuoyInstancesIndex, "researcher"})).Methods("GET", "OPTIONS")

	r.Handle("/api/buoy_instances", defaultChain.Then(AuthHandler{env, BuoyInstancesIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_instances", defaultChain.Then(AuthHandler{env, BuoyInstancesCreate, "researcher"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyInstancesUpdate, "researcher"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyInstancesDelete, "researcher"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/sensors", defaultChain.Then(AuthHandler{env, BuoyInstancesSensorsIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/sensors", defaultChain.Then(AuthHandler{env, BuoyInstancesSensorsCreate, "researcher"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/sensors/{sensor_type_id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyInstancesSensorsDelete, "researcher"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/warning_triggers", defaultChain.Then(AuthHandler{env, BuoyInstancesWarningTriggersIndex, "researcher"})).Methods("GET", "OPTIONS")

	r.Handle("/api/readings", defaultChain.Then(AuthHandler{env, ReadingsIndex, "researcher"})).Methods("GET", "OPTIONS")

	r.Handle("/api/sensor_types", defaultChain.Then(AuthHandler{env, SensorTypesIndex, "researcher"})).Methods("GET", "OPTIONS")

	r.Handle("/api/command_types", defaultChain.Then(AuthHandler{env, CommandTypesIndex, "researcher"})).Methods("GET", "OPTIONS")

	r.Handle("/api/commands", defaultChain.Then(AuthHandler{env, CommandsCreate, "researcher"})).Methods("POST", "OPTIONS")
	r.Handle("/api/commands", defaultChain.Then(AuthHandler{env, CommandsIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/commands/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, CommandsDelete, "researcher"})).Methods("DELETE", "OPTIONS")

	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersCreate, "researcher"})).Methods("POST", "OPTIONS")
	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersBatchUpdate, "researcher"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/warning_triggers/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, WarningTriggersUpdate, "researcher"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersBatchDelete, "researcher"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/warning_triggers/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, WarningTriggersDelete, "researcher"})).Methods("DELETE", "OPTIONS")

	r.Handle("/api/warnings", defaultChain.Then(AuthHandler{env, WarningsIndex, "researcher"})).Methods("GET", "OPTIONS")

	r.Handle("/api/export", defaultChain.Then(AppHandler{env, ReadingsExport})).Methods("GET", "OPTIONS")

	r.Handle("/api/users", defaultChain.Then(AuthHandler{env, UsersIndex, "researcher"})).Methods("GET", "OPTIONS")
	r.Handle("/api/users/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, UsersUpdate, "researcher"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/users/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, UsersDelete, "researcher"})).Methods("DELETE", "OPTIONS")

	// Unauthenticated routes
	r.Handle("/api/users", defaultChain.Then(AppHandler{env, UsersCreate})).Methods("POST", "OPTIONS")
	r.Handle("/api/login", defaultChain.Then(AppHandler{env, LoginHandler})).Methods("POST", "OPTIONS")
	r.Handle("/api/readings", defaultChain.Then(AppHandler{env, ReadingsCreate})).Methods("POST", "OPTIONS")

	return r
}

// Custom error type. The message field can be used to store
// an error string which is returned to the client. This is the return
// type of every handler.
type AppError struct {
	Error   error
	Message string
	Code    int
}

// HandlerFunc which wraps handlers which require authentication/authorization
type AuthHandler struct {
	*models.Env
	handle func(*models.Env, http.ResponseWriter, *http.Request) *AppError
	role   string
}

// Checks the presence and validity of JWT tokens in authenticated routes.
// Also checks whether the authenticated user is authorized to access the route
// with their role. Responds with HTTP 401 Unauthorized if the user is not authorized
// to access the resource.
func (authHandler AuthHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	jwtAuth, err := models.InitJWTAuth()
	if err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
	}

	// Parse the token from the Authorization header of the request
	token, err := jwt.ParseFromRequest(r, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		} else {
			return jwtAuth.PublicKey, nil
		}
	})

	// Check token validity
	if err != nil || !token.Valid {
		log.Println(err)
		http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
		return
	}

	// Check if the user has the permissions to access the resource with their role
	if !models.UserHasPermissions(authHandler.role, token.Claims["role"].(string)) {
		log.Println("User does not have the permissions to access this resource")
		http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
		return
	}

	// Execute the handler that the AuthHandler is wrapping. If it returns an AppError
	// then log it to the console and return a http.Error.
	if e := authHandler.handle(authHandler.Env, w, r); e != nil {
		log.Println(e.Message + ": " + e.Error.Error())
		http.Error(w, e.Message, e.Code)
	}
}

// HandlerFunc which wraps handlers which do not require authentication
type AppHandler struct {
	*models.Env
	handle func(*models.Env, http.ResponseWriter, *http.Request) *AppError
}

// Executes handler and responds with a HTTP error if the handler returned an AppError.
// This makes handlers a bit easier to use because they don't need to call http.Error.
// http.Error does not make the handler return, meaning that code will keep executing
// and it will be hard to debug what's going on. The handler can now just return an error
// code and this function will server the http.Error.
func (appHandler AppHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// dumpRequest(r)
	if e := appHandler.handle(appHandler.Env, w, r); e != nil {
		log.Println(e.Message + ": " + e.Error.Error())
		http.Error(w, e.Message, e.Code)
	}
}

func dumpRequest(r *http.Request) {
	rawBytes, err := httputil.DumpRequest(r, true)
	if err != nil {
		s := string(rawBytes[:])
		log.Print(s)
	} else {
		panic(err)
	}
}
