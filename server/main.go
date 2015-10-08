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
package main

import (
	"flag"
	"log"
	"net/http"
	"strconv"

	"github.com/aclel/deco3801/server/handlers"
	"github.com/aclel/deco3801/server/models"
	"github.com/kelseyhightower/envconfig"
)

// Application environment variables
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
	// Set command line flags
	// Server port defaults to port 8080.
	serverPort := flag.Int("port", 8080, "Server port")
	flag.Parse()
	port := strconv.Itoa(*serverPort)

	// Read environment variables
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

	// Initialise database connection pool
	db, err := models.NewDB(dataSourceName)

	if err != nil {
		log.Println("Connection to database was unsuccessful.")
		log.Panic(err)
	}

	// Initialise email settings
	emailUser := models.EmailCredentials{
		Username: conf.SmtpUsername,
		Password: conf.SmtpPassword,
		Server:   conf.SmtpServer,
		Port:     conf.SmtpPort,
	}

	env := &models.Env{db, emailUser}
	router := handlers.NewRouter(env)

	// Run HTTP server
	log.Println("Database connection successful. Connected to " + dataSourceName)
	log.Println("Web service listening on :" + port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
