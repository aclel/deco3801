package mail

import (
	"log"

	"github.com/aclel/deco3801/server/models"
	gomail "gopkg.in/gomail.v2-unstable"
)

type EmailUser struct {
	Username    string
	Password    string
	EmailServer string
	Port        int
}

func SendNewUserEmail(user *models.User) error {
	emailUser := &EmailUser{"uqfloodmonitoring@gmail.com", "neptune3801", "smtp.gmail.com", 587}

	m := gomail.NewMessage()
	m.SetHeader("From", emailUser.Username)
	m.SetHeader("To", "andrew.cleland@uqconnect.edu.au")
	m.SetHeader("Subject", "UQ Flood Monitoring System Account")
	m.SetBody("text/html",
		`<h1>Welcome to the UQ Flood Monitoring System.</h1>
		<p>Here is a link to sign in to your account: </p>
		<a href="http://teamneptune.co">Sign In</a>
		<p>You will be prompted to change your password when you sign in for the first time.</p>`)

	d := gomail.NewPlainDialer("smtp.gmail.com", 587, "uqfloodmonitoring@gmail.com", "neptune3801")

	if err := d.DialAndSend(m); err != nil {
		log.Println("Error sending mail")
		return err
	}

	log.Println("Signup email sent to andrew.cleland@uqconnect.edu.au")

	return nil
}
