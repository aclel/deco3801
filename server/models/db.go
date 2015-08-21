package models

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

// Stores database environment variables.
type DBConfig struct {
	DbHost     string `envconfig:"db_host"`
	DbPort     string `envconfig:"db_port"`
	DbUsername string `envconfig:"db_username"`
	DbPassword string `envconfig:"db_password"`
	DbName     string `envconfig:"db_name"`
}

// Custom type which embeds db connection pool.
// This makes it possible to mock the database for unit testing.
type DB struct {
	*sqlx.DB
}

// Opens a database with the given data source name.
// This does not create a connection, it just validates
// the arguments and pings the database to ensure a connection
// is possible.
//
// This method should be called just once.
//
// Returns a *sqlx.DB which is a pointer to a database handle
// that maintains a pool of underlying connections. It's safe
// for concurrent use by multiple go routines.
func NewDB(dataSourceName string) (*DB, error) {
	var err error
	db, err := sqlx.Open("mysql", dataSourceName)
	if err != nil {
		return nil, err
	}

	if err = db.Ping(); err != nil {
		return nil, err
	}

	return &DB{db}, nil
}
