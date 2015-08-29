package models

import (
	"database/sql"

	"github.com/go-sql-driver/mysql"
)

type User struct {
	Id        int32          `json:"id" 	db:"id"`
	Email     string         `json:"email" db:"email"`
	Password  string         `json:"password" db:"password"`
	FirstName string         `json:"firstName" db:"first_name"`
	LastName  string         `json:"lastName" db:"last_name"`
	LastLogin mysql.NullTime `json:"lastLogin" db:"last_login"`
	Token     string         `json:"token"`
}

type UserRepository interface {
	CreateUser(*User) error
	GetUserWithEmail(string) (*User, error)
}

// Inserts a User into the database
func (db *DB) CreateUser(user *User) error {
	stmt, err := db.Preparex("INSERT INTO user (email, password, first_name, last_name) VALUES(?, ?, ?, ?);")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(user.Email, user.Password, user.FirstName, user.LastName)
	if err != nil {
		return err
	}

	return nil
}

// Gets a user from the database with the given email address
func (db *DB) GetUserWithEmail(email string) (*User, error) {
	dbUser := User{}
	err := db.Get(&dbUser, "SELECT * FROM user WHERE email = ?;", email)

	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	return &dbUser, nil
}

// Updates the old user record with the new one
func (db *DB) UpdateUser(email string, updatedUser *User) error {
	stmt, err := db.Preparex(`UPDATE user SET password=?, first_name=?,
		last_name=?, last_login=? WHERE email=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedUser.Password, updatedUser.FirstName,
		updatedUser.LastName, updatedUser.LastLogin, email)
	if err != nil {
		return err
	}

	return nil
}

// Update the old user record with the new one, excluding the password.
// This avoids the password being rehashed each time.
func (db *DB) UpdateUserExcludePassword(email string, updatedUser *User) error {
	stmt, err := db.Preparex(`UPDATE user SET first_name=?,
		last_name=?, last_login=? WHERE email=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedUser.FirstName,
		updatedUser.LastName, updatedUser.LastLogin, email)
	if err != nil {
		return err
	}

	return nil
}
