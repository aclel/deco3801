package config

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

// Represents app context.
// Provides a means to safely pass around context variables,
// such as the database.
type Env struct {
	DB *sqlx.DB
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
func NewDB(dataSourceName string) (*sqlx.DB, error) {
	var err error
	db, err := sqlx.Open("mysql", dataSourceName)
	if err != nil {
		return nil, err
	}

	if err = db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}
