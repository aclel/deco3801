package main

import (
	"log"
	"net/http"

	"github.com/aclel/deco3801/server/handlers"
	"github.com/aclel/deco3801/server/models"
	"github.com/kelseyhightower/envconfig"
)

// Stores environment variables
type EnvVars struct {
	DbHost       string `envconfig:"db_host"`
	DbPort       string `envconfig:"db_port"`
	DbUsername   string `envconfig:"db_username"`
	DbPassword   string `envconfig:"db_password"`
	DbName       string `envconfig:"db_name"`
	SmtpUsername string `envconfig:"smtp_username"`
	SmtpPassword string `envconfig:"smtp_password"`
	SmtpServer   string `envconfig:"smtp_server"`
	SmtpPort     int    `envconfig:"smtp_port"`
}

func main() {
	var conf EnvVars
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

	emailUser := models.EmailCredentials{
		Username: conf.SmtpUsername,
		Password: conf.SmtpPassword,
		Server:   conf.SmtpServer,
		Port:     conf.SmtpPort,
	}

	env := &models.Env{db, emailUser}
	router := handlers.NewRouter(env)

	log.Println("Database connection successful. Connected to " + dataSourceName)
	log.Println("Web service listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
