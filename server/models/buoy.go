package models

type Buoy struct {
	Id   int    `db:"id"`
	Guid string `db:"guid"`
}

type BuoyRepository interface {
	GetAllBuoys() ([]Buoy, error)
	GetById(Id int) (Buoy, error)
	AddBuoy(buoy *Buoy) (error)
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

func (db *DB) GetById(Id int) (Buoy, error) {

	ourBuoy := Buoy{}
	err := db.Get(&ourBuoy, "SELECT * FROM buoy WHERE id=?", Id)

	if err != nil {
		return ourBuoy, err
	}

	// Assume that the id is unique and that one row was retrieved.
	return ourBuoy, nil
}

func (db *DB) AddBuoy(buoy *Buoy) (error) {

	query, err := db.Preparex("INSERT INTO buoy (id, guid) VALUES(?, ?);")
	if err != nil {
		return err   
	}

	_, err = query.Exec(buoy.Id, buoy.Guid)
	if err != nil {
		return err
	}

	return nil
}
