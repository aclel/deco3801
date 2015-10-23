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
	"log"

	gomail "gopkg.in/gomail.v2"
)

// Stores all credentials which are used to dial and smtp server
type EmailCredentials struct {
	Username string
	Password string
	Server   string
	Port     int
}

// Wraps the Smtp methods to allow for testing with dependency injection.
type SmtpManager interface {
	SendNewUserEmail(*User, *EmailCredentials) error
	SendPasswordResetEmail(*User, string, *EmailCredentials) error
}

// Send an email to a new User which contains a link to the login page, as well
// as their randomly generated temporary password.
func (db *DB) SendNewUserEmail(user *User, emailUser *EmailCredentials) error {
	m := gomail.NewMessage()
	m.SetHeader("From", emailUser.Username)
	m.SetHeader("To", user.Email)
	m.SetHeader("Subject", "WatcherWatcher Account")
	m.SetBody("text/html",
		`<h1>Welcome to WaterWatcher.</h1>
		<p>Here is a link to sign in to your account: </p>
		<a href="https://teamneptune.co">Sign In</a>
		<p>Your temporary password is `+user.Password+`</p>
		<p>You will be prompted to change your password when you sign in for the first time.</p>`)

	d := gomail.NewPlainDialer(emailUser.Server, emailUser.Port, emailUser.Username, emailUser.Password)

	if err := d.DialAndSend(m); err != nil {
		return err
	}

	log.Println("Signup email sent to " + user.Email)

	return nil
}

// Send an email to an existing User which contains a link for the user to change their password
func (db *DB) SendPasswordResetEmail(user *User, link string, emailUser *EmailCredentials) error {
	m := gomail.NewMessage()
	m.SetHeader("From", emailUser.Username)
	m.SetHeader("To", user.Email)
	m.SetHeader("Subject", "WaterWatcher Password Reset")
	m.SetBody("text/html",
		`<h1>Hi `+user.FirstName+`,</h1>
		<p>Here is a link to reset your password: </p>
		<a href="`+link+`">Reset password</a>
		<p>You will be prompted to change your password.</p>`)

	d := gomail.NewPlainDialer(emailUser.Server, emailUser.Port, emailUser.Username, emailUser.Password)

	if err := d.DialAndSend(m); err != nil {
		return err
	}

	log.Println("Reset password email sent to " + user.Email)

	return nil
}
