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
	DbHost       string `envconfig:"db_host" required:"true"`
	DbPort       string `envconfig:"db_port" required:"true"`
	DbUsername   string `envconfig:"db_username" required:"true"`
	DbPassword   string `envconfig:"db_password" required:"true"`
	DbName       string `envconfig:"db_name" required:"true"`
	SmtpUsername string `envconfig:"smtp_username" required:"true"`
	SmtpPassword string `envconfig:"smtp_password" required:"true"`
	SmtpServer   string `envconfig:"smtp_server" required:"true"`
	SmtpPort     int    `envconfig:"smtp_port" required:"true"`
	PrivateKey   string `envconfig:"private_key" required:"true"`
	PublicKey    string `envconfig:"public_key" required:"true"`
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
		conf.DbName + "?parseTime=True"

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
