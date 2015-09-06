package models

import (
	"database/sql"

	"github.com/go-sql-driver/mysql"
)

type User struct {
	Id        int            `json:"id" db:"id"`
	Email     string         `json:"email" db:"email"`
	Password  string         `json:"password" db:"password"`
	FirstName string         `json:"firstName" db:"first_name"`
	LastName  string         `json:"lastName" db:"last_name"`
	LastLogin mysql.NullTime `json:"lastLogin" db:"last_login"`
	Role      string         `json:"role" db:"role"`
	Token     string         `json:"token"`
}

type UserRepository interface {
	CreateUser(*User) error
	GetUserWithEmail(string) (*User, error)
}

// All possible roles that a user can have. A user can only have one role at a time.
// Roles with a higher index have all of the priveleges of roles at low indexes.
var roles = map[string]int{
	"researcher":   0,
	"power_user":   1,
	"system_admin": 2,
}

// Inserts a User into the database
func (db *DB) CreateUser(user *User) error {
	stmt, err := db.Preparex("INSERT INTO user (email, password, first_name, last_name, role) VALUES(?, ?, ?, ?, ?);")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(user.Email, user.Password, user.FirstName, user.LastName, user.Role)
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
		last_name=?, role=?, last_login=? WHERE email=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedUser.Password, updatedUser.FirstName,
		updatedUser.LastName, updatedUser.Role, updatedUser.LastLogin, email)
	if err != nil {
		return err
	}

	return nil
}

// Update the old user record with the new one, excluding the password.
// This avoids the password being rehashed each time.
func (db *DB) UpdateUserExcludePassword(email string, updatedUser *User) error {
	stmt, err := db.Preparex(`UPDATE user SET first_name=?,
		last_name=?, role=?, last_login=? WHERE email=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedUser.FirstName,
		updatedUser.LastName, updatedUser.Role, updatedUser.LastLogin, email)
	if err != nil {
		return err
	}

	return nil
}

// Check if the user has a role which is greater than or equal to the given role.
func UserHasPermissions(role string, userRole string) bool {
	return roles[userRole] >= roles[role]
}
