package main

import (
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/config"
)

func main() {
	db, err := config.NewDB("root:root@tcp(localhost:3306)/deco3800")
	if err != nil {
		log.Panic(err)
	}
	env := &config.Env{DB: db}
	router := NewRouter(env)

	log.Fatal(http.ListenAndServe(":8080", router))
}
