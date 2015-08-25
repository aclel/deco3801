package main

import (
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/models"
	"github.com/kelseyhightower/envconfig"
)

func main() {
	var conf models.DBConfig
	err := envconfig.Process("fms", &conf)
	if err != nil {
		log.Fatal(err)
	}
	log.Println(conf)

	dataSourceName := conf.DbUsername + ":" +
		conf.DbPassword + "@tcp(" +
		conf.DbHost + ":" +
		conf.DbPort + ")/" +
		conf.DbName

	db, err := models.NewDB(dataSourceName)

	if err != nil {
		log.Println("Connection to database was unsuccessful.")
		log.Panic(err)
	}
	env := &models.Env{db}
	router := NewRouter(env)

	log.Println("Database connection successful. Connected to " + dataSourceName)
	log.Println("Web service listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
