package main

import (
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/config"
)

func main() {
	db, err := config.NewDB("deco3801:deco3801@tcp(localhost:3306)/deco3801")
	if err != nil {
		log.Println("Connection to database was unsuccessful.")
		log.Panic(err)
	}
	env := &config.Env{DB: db}
	router := NewRouter(env)

	log.Println("Database connection successful. Connected to localhost:3306/deco3801")
	log.Println("Web service listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
