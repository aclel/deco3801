package models

type Buoy struct {
	Id          int    `db:"ID"`
	Name        string `db:"name"`
	LastPing    string `db:"last_ping"`
	WaitingPing string `db:"waiting_ping"`
	CurrentSend string `db:"current_send"`
	CurrentPoll string `db:"current_poll"`
	NewSend     string `db:"new_send"`
	NewPoll     string `db:"new_poll"`
}

// Gets all buoys from the database
// Returns a slice of buoys
func (db *DB) GetAllBuoys() ([]Buoy, error) {
	buoys := []Buoy{}
	err := db.Select(&buoys, "SELECT * FROM buoy;")
	if err != nil {
		return nil, err
	}

	return buoys, nil
}
