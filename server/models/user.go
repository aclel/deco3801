package models

type User struct {
	Id       int32
	Email    string
	Password string
}

type UserRepository interface {
	CreateUser(*User) error
	GetUserWithEmail(string) (*User, error)
}

// Inserts a User into the database
func (db *DB) CreateUser(user *User) error {
	stmt, err := db.Preparex("INSERT INTO user (email, password) VALUES(?, ?);")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(user.Email, user.Password)
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
