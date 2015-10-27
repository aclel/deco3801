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
package models

import (
	"database/sql"
	"errors"

	"github.com/go-sql-driver/mysql"
)

// Represents a User of the system. The last login field
// is updated each time a user logs in. If the user has not logged in
// before then the last login is null. A user has a role which controls
// their level of permissions.
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

type NewUserPassword struct {
	Id                int
	CurrentPassword   string `json:"currentPassword"`
	NewPassword       string `json:"newPassword"`
	NewHashedPassword string
}

// Wraps the User methods to allow for testing with dependency injection.
type UserRepository interface {
	CreateUser(*User) error
	GetUser(int) (*User, error)
	GetUserWithEmail(string) (*User, error)
	GetPasswordHash(string) ([]byte, error)
	GetAllUsers() ([]User, error)
	DeleteUserWithId(int) error
	UpdateUserExcludePassword(*User) error
	UpdateUserExcludePasswordAndLastLogin(updatedUser *User) error
	UpdateUserPassword(*NewUserPassword) error
}

// All possible roles that a user can have. A user can only have one role at a time.
// Roles with a higher index have all of the priveleges of roles at low indexes.
var roles = map[string]int{
	"user":         0,
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

// Gets all Users.
func (db *DB) GetAllUsers() ([]User, error) {
	users := []User{}
	err := db.Select(&users, "SELECT * FROM user;")
	if err != nil {
		return nil, err
	}

	return users, nil
}

// Get the User with the given id
func (db *DB) GetUser(id int) (*User, error) {
	dbUser := User{}
	err := db.Get(&dbUser, "SELECT * FROM user WHERE id = ?;", id)
	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	return &dbUser, nil
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

// Returns the password hash for the user with the given email
func (db *DB) GetPasswordHash(email string) ([]byte, error) {
	user, err := db.GetUserWithEmail(email)
	if err != nil {
		return []byte(""), err
	}

	if user == nil {
		return []byte(""), errors.New("User does not exist with the given email")
	}

	return []byte(user.Password), nil
}

// Delete User from the database with the given id.
func (db *DB) DeleteUserWithId(id int) error {
	stmt, err := db.Preparex("DELETE FROM user WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
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
func (db *DB) UpdateUserExcludePassword(updatedUser *User) error {
	stmt, err := db.Preparex(`UPDATE user SET first_name=?,
		last_name=?, role=?, last_login=? WHERE id=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedUser.FirstName,
		updatedUser.LastName, updatedUser.Role, updatedUser.LastLogin, updatedUser.Id)
	if err != nil {
		return err
	}

	return nil
}

// Don't want to update the last login because it could be tampered with on the client side
func (db *DB) UpdateUserExcludePasswordAndLastLogin(updatedUser *User) error {
	stmt, err := db.Preparex(`UPDATE user SET first_name=?,
		last_name=?, role=? WHERE id=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedUser.FirstName,
		updatedUser.LastName, updatedUser.Role, updatedUser.Id)
	if err != nil {
		return err
	}

	return nil
}

// Update the user's password in the database
func (db *DB) UpdateUserPassword(user *NewUserPassword) error {
	stmt, err := db.Preparex(`UPDATE user SET password=? WHERE id=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(user.NewHashedPassword, user.Id)
	if err != nil {
		return err
	}

	return nil
}

// Check if the user has a role which is greater than or equal to the given role.
func UserHasPermissions(role string, userRole string) bool {
	return roles[userRole] >= roles[role]
}
