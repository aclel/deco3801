package models

type Buoy struct {
	Id   int    `json:"id", db:"id"`
	Guid string `json:"guid", db:"guid"`
	Name string `json:"name", db:"name"`
}

type BuoyRepository interface {
	GetAllBuoys() ([]Buoy, error)
	GetBuoyById(id int) (*Buoy, error)
	CreateBuoy(buoy *Buoy) error
	UpdateBuoy(buoy *Buoy) error
	DeleteBuoyWithId(id int) error
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

// Retrieve a buoy from the database with the given id.
func (db *DB) GetBuoyById(id int) (*Buoy, error) {
	buoy := Buoy{}
	err := db.Get(&buoy, "SELECT * FROM buoy WHERE id=?", id)

	if err != nil {
		return &buoy, err
	}

	// Assume that the id is unique and that one row was retrieved.
	return &buoy, nil
}

// Insert a new Buoy into the database.
func (db *DB) CreateBuoy(buoy *Buoy) error {
	query, err := db.Preparex("INSERT INTO buoy (guid, name) VALUES(?, ?);")
	if err != nil {
		return err
	}

	_, err = query.Exec(buoy.Guid, buoy.Name)
	if err != nil {
		return err
	}

	return nil
}

// Updates the given buoy in the database.
func (db *DB) UpdateBuoy(buoy *Buoy) error {
	stmt, err := db.Preparex("UPDATE buoy SET guid=?, name=? WHERE id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(buoy.Guid, buoy.Name, buoy.Id)
	if err != nil {
		return err
	}

	return nil
}

// Delete Buoy from the database with the given id.
func (db *DB) DeleteBuoyWithId(id int) error {
	stmt, err := db.Preparex("DELETE FROM buoy WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}
