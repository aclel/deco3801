package mail

import (
	"bytes"
	"html/template"
	"log"
	"net/smtp"
	"strconv"

	"github.com/aclel/deco3801/server/models"
)

type EmailUser struct {
	Username    string
	Password    string
	EmailServer string
	Port        int
}

type SmtpTemplateData struct {
	From    string
	To      string
	Subject string
	Body    string
}

const emailTemplate = `From: {{.From}}
To: {{.To}}
Subject: {{.Subject}}
MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n

{{.Body}}

Sincerely,

{{.From}}
`

func SendNewUserEmail(user *models.User) error {
	emailUser := &EmailUser{"uqfloodmonitoring@gmail.com", "neptune3801", "smtp.gmail.com", 587}
	auth := smtp.PlainAuth(
		"",
		emailUser.Username,
		emailUser.Password,
		emailUser.EmailServer,
	)

	var err error
	var doc bytes.Buffer

	context := &SmtpTemplateData{
		"uqfloodmonitoring@gmail.com",
		"andrew.cleland@uqconnect.edu.au",
		"UQ Flood Monitoring System Account",
		`<html>
			<body>
				<h1>Welcome to the UQ Flood Monitoring System.</h1>

				<p>Here is a link to sign in:</p>
				<a href="teamneptune.co">Confirm account</a>

				<p>You will be prompted to change your password when you sign in for the first time.</p>
			<body>
		</html>`,
	}

	t := template.New("emailTemplate")
	t, err = t.Parse(emailTemplate)
	if err != nil {
		log.Println("error trying to parse mail template")
		return err
	}

	err = t.Execute(&doc, context)
	if err != nil {
		log.Println("error trying to execute mail template")
		return err
	}

	err = smtp.SendMail(emailUser.EmailServer+":"+strconv.Itoa(emailUser.Port),
		auth,
		emailUser.Username,
		[]string{"andrew.cleland@uqconnect.edu.au"},
		doc.Bytes())

	log.Println("Sign up email sent to andrew.cleland@uqconnect.edu.au")

	if err != nil {
		log.Println("ERROR: attemping to send mail ", err)
		return err
	}

	return nil
}
