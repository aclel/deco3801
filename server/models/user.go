package models

import "github.com/jmoiron/sqlx"

type User struct {
	Id       int32
	Username string
	Password string
}

// Inserts a User into the database
func CreateUser(db *sqlx.DB, user User) error {
	stmt, err := db.Preparex("INSERT INTO user (username, password) VALUES(?, ?);")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(user.Username, user.Password)
	if err != nil {
		return err
	}

	return nil
}
