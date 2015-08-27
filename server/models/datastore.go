package models

// Represents app context.
// Provides a means to safely pass around context variables,
// such as the database.
type Env struct {
	DB Datastore
}

// Implements the same methods as DB struct.
// Every method that's added to the model needs to be added to this interface as well.
type Datastore interface {
	GetAllBuoys() ([]Buoy, error)
	GetAllReadings() ([]byte, error)
	GetUserWithEmail(string) (*User, error)
	CreateUser(*User) error
	Login(*User) (int, []byte)
	RefreshToken(*User) []byte
}
