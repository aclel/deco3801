package models

type BuoyGroup struct {
	Id   int    `json:"id" db:"id"`
	Name string `json:"name" db:"name"`
}

type BuoyGroupReadings struct {
}

type BuoyGroupRepository interface {
	GetAllBuoyGroups() ([]BuoyGroup, error)
	GetBuoyGroupById(int) (*BuoyGroup, error)
	CreateBuoyGroup(*BuoyGroup) error
	UpdateBuoyGroup(*BuoyGroup) error
	DeleteBuoyGroupWithId(int) error
}

// Get all of the buoy groups from the database
func (db *DB) GetAllBuoyGroups() ([]BuoyGroup, error) {
	buoyGroups := []BuoyGroup{}
	err := db.Select(&buoyGroups, "SELECT * FROM buoy_group")
	if err != nil {
		return nil, err
	}

	return buoyGroups, nil
}

// Retrieve a buoy from the database with the given id
func (db *DB) GetBuoyGroupById(id int) (*BuoyGroup, error) {
	buoyGroup := BuoyGroup{}
	err := db.Get(&buoyGroup, "SELECT * FROM buoy_group WHERE id=?", id)

	if err != nil {
		return nil, err
	}

	// Assume that the id is unique and that one row was retrieved.
	return &buoyGroup, nil
}

// Insert a new Buoy Group into the database
func (db *DB) CreateBuoyGroup(buoyGroup *BuoyGroup) error {
	query, err := db.Preparex("INSERT INTO buoy_group (name) VALUES(?);")
	if err != nil {
		return err
	}

	_, err = query.Exec(buoyGroup.Name)
	if err != nil {
		return err
	}

	return nil
}

// Updates the given Buoy Group in the database.
func (db *DB) UpdateBuoyGroup(buoyGroup *BuoyGroup) error {
	stmt, err := db.Preparex("UPDATE buoy_group SET name=? WHERE id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(buoyGroup.Name, buoyGroup.Id)
	if err != nil {
		return err
	}

	return nil
}

// Delete Buoy Group from the database with the given id.
func (db *DB) DeleteBuoyGroupWithId(id int) error {
	stmt, err := db.Preparex("DELETE FROM buoy_group WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}

func (db *DB) GetAllBuoyGroupReadings() ([]BuoyGroup, error) {
	return nil, nil
}
