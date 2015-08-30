package models

import (
	"log"

	gomail "gopkg.in/gomail.v2-unstable"
)

type EmailCredentials struct {
	Username string
	Password string
	Server   string
	Port     int
}

func SendNewUserEmail(user *User, emailUser *EmailCredentials) error {
	m := gomail.NewMessage()
	m.SetHeader("From", emailUser.Username)
	m.SetHeader("To", user.Email)
	m.SetHeader("Subject", "UQ Flood Monitoring System Account")
	m.SetBody("text/html",
		`<h1>Welcome to the UQ Flood Monitoring System.</h1>
		<p>Here is a link to sign in to your account: </p>
		<a href="http://teamneptune.co">Sign In</a>
		<p>You temporary password is "secret123"</p>
		<p>You will be prompted to change your password when you sign in for the first time.</p>`)

	d := gomail.NewPlainDialer(emailUser.Server, emailUser.Port, emailUser.Username, emailUser.Password)

	if err := d.DialAndSend(m); err != nil {
		return err
	}

	log.Println("Signup email sent to " + user.Email)

	return nil
}
