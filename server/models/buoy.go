package models

type Buoy struct {
	Id   int    `db:"id"`
	Guid string `db:"name"`
}

type BuoyRepository interface {
	GetAllBuoys() ([]Buoy, error)
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
