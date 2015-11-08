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
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"time"

	"github.com/aclel/deco3801/server/models"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/justinas/alice"
	"github.com/rs/cors"
	"golang.org/x/net/websocket"
)

// Setup all routes routes which are served to app clients (web app, iOS app).
// Authenticated routes access can be restricted to users with certain roles - users, power users and system administrators.
// The permissions are heirarchical, meaning that a system administrator can do everything that a power user can do,
// who can do everything that a researcher can do.
func NewAppRouter(env *models.Env) *mux.Router {
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
	defaultChain := alice.New(loggingHandler, c.Handler)

	// Authenticated routes
	r.Handle("/api/buoys", defaultChain.Then(AuthHandler{env, BuoysIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoys", defaultChain.Then(AuthHandler{env, BuoysCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoysUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoysShow, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoysDelete, "power_user"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}/commands", defaultChain.Then(AuthHandler{env, BuoyCommandsAppIndex, "power_user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoys/{id:[0-9]+}/commands", defaultChain.Then(AuthHandler{env, BuoyCommandsCreate, "power_user"})).Methods("POST", "OPTIONS")

	r.Handle("/api/buoy_groups", defaultChain.Then(AuthHandler{env, BuoyGroupsIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_groups", defaultChain.Then(AuthHandler{env, BuoyGroupsCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyGroupsUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyGroupsShow, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyGroupsDelete, "power_user"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}/buoys", defaultChain.Then(AuthHandler{env, BuoyGroupsBuoysIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_groups/{id:[0-9]+}/buoy_instances", defaultChain.Then(AuthHandler{env, BuoyGroupsBuoyInstancesIndex, "user"})).Methods("GET", "OPTIONS")

	r.Handle("/api/buoy_instances", defaultChain.Then(AuthHandler{env, BuoyInstancesIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_instances", defaultChain.Then(AuthHandler{env, BuoyInstancesCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyInstancesUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyInstancesDelete, "power_user"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/sensors", defaultChain.Then(AuthHandler{env, BuoyInstancesSensorsIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/sensors", defaultChain.Then(AuthHandler{env, BuoyInstancesSensorsCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/sensors/{sensor_type_id:[0-9]+}", defaultChain.Then(AuthHandler{env, BuoyInstancesSensorsDelete, "power_user"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/warning_triggers", defaultChain.Then(AuthHandler{env, BuoyInstancesWarningTriggersIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/buoy_instances/{id:[0-9]+}/readings", defaultChain.Then(AuthHandler{env, BuoyInstancesReadingsShow, "user"})).Methods("GET", "OPTIONS")

	r.Handle("/api/sensor_types", defaultChain.Then(AuthHandler{env, SensorTypesIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/sensor_types", defaultChain.Then(AuthHandler{env, SensorTypesCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/sensor_types/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, SensorTypeUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/sensor_types/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, SensorTypesDelete, "power_user"})).Methods("DELETE", "OPTIONS")

	r.Handle("/api/command_types", defaultChain.Then(AuthHandler{env, CommandTypesIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/command_types", defaultChain.Then(AuthHandler{env, CommandTypesCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/command_types/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, CommandTypesUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/command_types/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, CommandTypesDelete, "power_user"})).Methods("DELETE", "OPTIONS")

	r.Handle("/api/commands", defaultChain.Then(AuthHandler{env, CommandsCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/commands", defaultChain.Then(AuthHandler{env, CommandsIndex, "power_user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/commands/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, CommandsShow, "power_user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/commands", defaultChain.Then(AuthHandler{env, CommandsBatchUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/commands/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, CommandsUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/commands/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, CommandsDelete, "power_user"})).Methods("DELETE", "OPTIONS")

	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersIndex, "power_user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersCreate, "power_user"})).Methods("POST", "OPTIONS")
	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersBatchUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/warning_triggers/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, WarningTriggersUpdate, "power_user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/warning_triggers", defaultChain.Then(AuthHandler{env, WarningTriggersBatchDelete, "power_user"})).Methods("DELETE", "OPTIONS")
	r.Handle("/api/warning_triggers/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, WarningTriggersDelete, "power_user"})).Methods("DELETE", "OPTIONS")

	r.Handle("/api/warnings", defaultChain.Then(AuthHandler{env, WarningsIndex, "power_user"})).Methods("GET", "OPTIONS")

	r.Handle("/api/readings", defaultChain.Then(AuthHandler{env, ReadingsIndex, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/readings/export", defaultChain.Then(AuthHandler{env, ReadingsExport, "user"})).Methods("POST", "OPTIONS")

	r.Handle("/api/users", defaultChain.Then(AuthHandler{env, UsersIndex, "system_admin"})).Methods("GET", "OPTIONS")
	r.Handle("/api/user", defaultChain.Then(AuthHandler{env, UsersShowWithEmail, "user"})).Methods("GET", "OPTIONS")
	r.Handle("/api/users/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, UsersUpdate, "user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/users/{id:[0-9]+}/change_password", defaultChain.Then(AuthHandler{env, UsersUpdatePassword, "user"})).Methods("PUT", "OPTIONS")
	r.Handle("/api/users/{id:[0-9]+}", defaultChain.Then(AuthHandler{env, UsersDelete, "system_admin"})).Methods("DELETE", "OPTIONS")

	// Unauthenticated routes
	r.Handle("/api/users", defaultChain.Then(AppHandler{env, UsersCreate})).Methods("POST", "OPTIONS")
	r.Handle("/api/forgot_password", defaultChain.Then(AppHandler{env, UsersForgotPassword})).Methods("POST", "OPTIONS")
	r.Handle("/api/reset_password", defaultChain.Then(AppHandler{env, UsersResetPassword})).Methods("POST", "OPTIONS")
	r.Handle("/api/login", defaultChain.Then(AppHandler{env, LoginHandler})).Methods("POST", "OPTIONS")
	r.Handle("/api/readings", defaultChain.Then(AppHandler{env, ReadingsCreate})).Methods("POST", "OPTIONS")
	r.Handle("/api/buoy_logs", websocket.Handler(env.LogServer.Handler))

	return r
}

// Setup all routes which are consumed by Buoys.
func NewBuoyRouter(env *models.Env) *mux.Router {
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
	defaultChain := alice.New(loggingHandler, c.Handler)

	r.Handle("/buoys/api/commands", defaultChain.Then(BuoyHandler{env, BuoyCommandsIndex})).Methods("GET", "OPTIONS")
	r.Handle("/buoys/api/commands/ack", defaultChain.Then(BuoyHandler{env, BuoyCommandsAcknowledge})).Methods("POST", "OPTIONS")
	r.Handle("/buoys/api/readings", defaultChain.Then(BuoyHandler{env, ReadingsCreate})).Methods("POST", "OPTIONS")
	r.Handle("/buoys/api/readings/test", defaultChain.Then(BuoyHandler{env, ReadingsTest})).Methods("POST", "OPTIONS")

	return r
}

// Apache web server logging
func loggingHandler(h http.Handler) http.Handler {
	return handlers.LoggingHandler(os.Stdout, h)
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
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		} else {
			return jwtAuth.SecretKey, nil
		}
	})

	// Check token validity
	if err != nil || !token.Valid {
		http.Error(w, http.StatusText(http.StatusUnauthorized), http.StatusUnauthorized)
		return
	}

	// Check if the user has the permissions to access the resource with their role
	if !models.UserHasPermissions(authHandler.role, token.Claims["role"].(string)) {
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
	if e := appHandler.handle(appHandler.Env, w, r); e != nil {
		log.Println(e.Error.Error())
		http.Error(w, e.Message, e.Code)
	}
}

// HandlerFunc which wraps handlers for buoy communication
type BuoyHandler struct {
	*models.Env
	handle func(*models.Env, http.ResponseWriter, *http.Request) *AppError
}

// Handles all HTTP requests for a Buoy
func (buoyHandler BuoyHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	logger := buoyHandler.Env.BuoyLogger

	var buf []byte
	var err error
	// Read the request body and stored it in two different buffers
	if r.Body != nil {
		buf, err = ioutil.ReadAll(r.Body)
		if err != nil {
			logger.LogError(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}

	body := requestBodyReader{bytes.NewBuffer(buf)}
	clone := requestBodyReader{bytes.NewBuffer(buf)}

	// Get the Guid from the url params or the request body.
	// Use the first buffer instead of the actual request, so that we can still
	// decode the body in the actual handler.
	guid, err := getGuidFromRequest(r.URL, body)
	if err != nil {
		logger.LogError(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Assign the second buffer back to the request body so that it can be
	// decoded again in the actual handler.
	r.Body = clone

	// Get the active buoy instance for the buoy with the guid
	activeBuoyInstance, err := buoyHandler.Env.DB.GetActiveBuoyInstance(guid)
	if err != nil {
		logger.LogError(w, err.Error(), http.StatusBadRequest)
		return
	}

	logger.Log("\nTime: " + time.Now().Format(time.RFC1123) +
		"\nBuoy: " + activeBuoyInstance.Name + " (" + guid + ")\n\n" +
		dumpRequest(r))
	if e := buoyHandler.handle(buoyHandler.Env, w, r); e != nil {
		logger.Log(e.Message + ": " + e.Error.Error())
		http.Error(w, e.Message, e.Code)
	}
}

// Used to read the body of a request, which can then be
// stored in multiple buffers. decoder.Decode drains the request body
// which means that request.Body can't be read twice. By reading the
// body into a buffer, it can be reassigned after decoding.
type requestBodyReader struct {
	*bytes.Buffer
}

// Make it implement the io.ReadCloser interface
func (reader requestBodyReader) Close() error {
	return nil
}

// httputil.DumpRequest ommits Content-Length for some strange reason.
// This method does a bit of a hack to put it back in.
func dumpRequest(r *http.Request) string {
	dumpHead, _ := httputil.DumpRequest(r, false)
	dumpBody, _ := httputil.DumpRequest(r, true)
	dumpBody = dumpBody[len(dumpHead):]

	if len(r.TransferEncoding) == 0 {
		cl := []byte(fmt.Sprintf("Content-Length: %d\r\n\r\n", len(dumpBody)))
		dumpHead = append(dumpHead[:len(dumpHead)-2], cl...)
	}
	dump := append(dumpHead, dumpBody...)
	s := string(dump)
	return fmt.Sprintf("%+q\n", s)
}

// Get buoy guid out of url params or json body
func getGuidFromRequest(requestURL *url.URL, requestBody requestBodyReader) (string, error) {
	// Parse query parameters
	u, err := url.Parse(requestURL.String())
	if err != nil {
		return "", err
	}
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return "", err
	}

	if params["guid"] != nil {
		return params["guid"][0], nil
	}

	// Parse request body
	buoy := new(models.Buoy)
	decoder := json.NewDecoder(requestBody)
	err = decoder.Decode(&buoy)
	if err != nil {
		return "", err
	}

	if buoy.Guid == "" {
		return "", errors.New("guid is missing")
	}

	return buoy.Guid, nil
}
