package models

// Represents app context.
// Provides a means to safely pass around context variables,
// such as the database.
type Env struct {
	DB Datastore
}

// Implements the same methods as DB struct.
// Every model that's added needs to have a Manager interface
// added here as well
type Datastore interface {
	BuoyManager
	ReadingManager
	UserManager
	AuthManager
}
