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
	DbHost       string `envconfig:"db_port_3306_tcp_addr" required:"true"`
	DbPort       string `envconfig:"db_port_3306_tcp_port" required:"true"`
	DbUsername   string `envconfig:"db_username" required:"true"`
	DbPassword   string `envconfig:"db_password" required:"true"`
	DbName       string `envconfig:"db_name" required:"true"`
	SmtpUsername string `envconfig:"smtp_username" required:"true"`
	SmtpPassword string `envconfig:"smtp_password" required:"true"`
	SmtpServer   string `envconfig:"smtp_server" required:"true"`
	SmtpPort     int    `envconfig:"smtp_port" required:"true"`
	SecretKey    string `envconfig:"secret_key" required:"true"`
}

func main() {
	// Set command line flags
	// App port (web app, iOS app) defaults to port 8080.
	app := flag.Int("clientport", 8080, "App port")
	// Buoy port (incoming requests from buoys) defaults to port 8081
	buoy := flag.Int("buoyport", 8081, "Buoy port")
	flag.Parse()
	appPort := strconv.Itoa(*app)
	buoyPort := strconv.Itoa(*buoy)

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
	log.Println("Database connection successful. Connected to " + dataSourceName)

	// Initialise email settings
	emailUser := models.EmailCredentials{
		Username: conf.SmtpUsername,
		Password: conf.SmtpPassword,
		Server:   conf.SmtpServer,
		Port:     conf.SmtpPort,
	}

	// Initialise app context (db, settings) - available in every handler
	env := &models.Env{db, emailUser}
	appRouter := handlers.NewAppRouter(env)
	buoyRouter := handlers.NewBuoyRouter(env)

	// Run web service which listens to all requests from Buoys
	go func() {
		log.Println("Buoy web service listening on :" + buoyPort)
		log.Fatal(http.ListenAndServe(":"+buoyPort, buoyRouter))
	}()

	// Run web service which listens to all requests from API clients (web app, iOS app)
	log.Println("App web service listening on :" + appPort)
	log.Fatal(http.ListenAndServe(":"+appPort, appRouter))
}
