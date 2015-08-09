package models

import "github.com/jmoiron/sqlx"

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

func GetAllBuoys(db *sqlx.DB) ([]Buoy, error) {
	buoys := []Buoy{}
	err := db.Select(&buoys, "SELECT * FROM buoy;")
	if err != nil {
		return nil, err
	}

	return buoys, nil
}
