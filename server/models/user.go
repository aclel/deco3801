package models

import "github.com/go-sql-driver/mysql"

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

	if err != nil {
		return nil, err
	}

	return &dbUser, nil
}
