package main

import (
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/config"
	"github.com/kelseyhightower/envconfig"
)

type Config struct {
	DbHost     string `envconfig:"db_host"`
	DbPort     string `envconfig:"db_port"`
	DbUsername string `envconfig:"db_username"`
	DbPassword string `envconfig:"db_password"`
	DbName     string `envconfig:"db_name"`
}

func main() {
	var conf Config
	err := envconfig.Process("fms", &conf)
	if err != nil {
		log.Fatal(err)
	}

	dataSourceName := conf.DbUsername + ":" +
		conf.DbPassword + "@tcp(" +
		conf.DbHost + ":" +
		conf.DbPort + ")/" +
		conf.DbName

	db, err := config.NewDB(dataSourceName)

	if err != nil {
		log.Println("Connection to database was unsuccessful.")
		log.Panic(err)
	}
	env := &config.Env{DB: db}
	router := NewRouter(env)

	log.Println("Database connection successful. Connected to " + dataSourceName)
	log.Println("Web service listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
