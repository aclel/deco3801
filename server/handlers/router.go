package handlers

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/models"
	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/justinas/alice"
	"github.com/rs/cors"
)

// Setup authenticated and unauthenticated routes in gorilla mux router
func NewRouter(env *models.Env) *mux.Router {
	r := mux.NewRouter().StrictSlash(true)

	// Enable CORS on all domains
	c := cors.New(cors.Options{
		// This can be uncommented to restrict CORS to only localhost:3000 and teamneptune.co
		//AllowedOrigins:   []string{"http://localhost:3000", "http://teamneptune.co"},
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"POST", "GET", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type", "Accept-Encoding", "X-CSRF-Token", "Authorization"},
		AllowCredentials: true,
	})

	// Setup the default middleware chain
	defaultChain := alice.New(c.Handler)

	// Authenticated routes
	r.Handle("/api/buoys", defaultChain.Then(AuthHandler{env, BuoysIndex}))
	r.Handle("/api/readings", defaultChain.Then(AuthHandler{env, ReadingsIndex}))

	// Unauthenticated routes
	r.Handle("/api/users", defaultChain.Then(AppHandler{env, UsersCreate}))
	r.Handle("/api/login", defaultChain.Then(AppHandler{env, LoginHandler}))

	return r
}

// HandlerFunc which wraps handlers which require authentication
type AuthHandler struct {
	*models.Env
	handle func(*models.Env, http.ResponseWriter, *http.Request) (int, error)
}

// Checks the presence and validity of JWT tokens in authenticated routes
// Responds with HTTP 401 Unauthorized if the token is not valid
func (authHandler AuthHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	jwtAuth := models.InitJWTAuth()

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
	*models.Env
	handle func(*models.Env, http.ResponseWriter, *http.Request) (int, error)
}

// Executes handler and responds with a HTTP error if the handler returned an error
// This makes handlers a bit easier to use because they don't need to call http.Error.
// http.Error does not make the handler return, meaning that code will keep executing
// and it will be hard to debug what's going on. The handler can now just return an error
// code and this function will server the http.Error.
func (appHandler AppHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if status, err := appHandler.handle(appHandler.Env, w, r); err != nil {
		log.Println(err)
		http.Error(w, http.StatusText(status), status)
	}
}
