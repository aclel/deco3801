/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Cleland <andrew.cleland3@gmail.com>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
package models

import (
	"time"

	mysql "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

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

func Now() mysql.NullTime {
	return mysql.NullTime{Time: time.Now().In(time.UTC), Valid: true}
}
