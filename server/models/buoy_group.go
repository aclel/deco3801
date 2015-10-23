// Flood Monitoring System
// Version 0.0.1 (Duyung)
//
// Copyright (C) Team Neptune
// All rights reserved.
//
// @author     Andrew Cleland <andrew.cleland3@gmail.com>
// @version    0.0.1
// @copyright  Team Neptune (2015)
// @link       https://github.com/aclel/deco3801
package models

// A buoy group has many buoy instances. buoy_instance is the join
// table between buoy and buoy_group. A buoy group can only have one
// buoy instance of a certain buoy at any time.
type BuoyGroup struct {
	Id       int    `json:"id" db:"id"`
	Name     string `json:"name" db:"name"`
	Archived bool   `json:"archived" db:"archived"`
}

// Wraps Buoy Group methods to allow for testing with dependency injection.
type BuoyGroupRepository interface {
	GetAllBuoyGroups() ([]BuoyGroup, error)
	GetBuoyGroupById(int) (*BuoyGroup, error)
	CreateBuoyGroup(*BuoyGroup) error
	UpdateBuoyGroup(*BuoyGroup) error
	ArchiveBuoyGroupWithId(int) error
	GetBuoysForBuoyGroup(int) ([]Buoy, error)
	GetBuoyInstancesForBuoyGroup(int) ([]BuoyInstance, error)
}

// Get all of the buoy groups from the database.
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
	stmt, err := db.Preparex("UPDATE buoy_group SET name=?, archived=? WHERE id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(buoyGroup.Name, buoyGroup.Archived, buoyGroup.Id)
	if err != nil {
		return err
	}

	return nil
}

// Archive Buoy with the given id.
func (db *DB) ArchiveBuoyGroupWithId(id int) error {
	stmt, err := db.Preparex("UPDATE buoy_group SET archived=true WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}

// Get all Buoys for the Buoy Group with the given id.
func (db *DB) GetBuoysForBuoyGroup(id int) ([]Buoy, error) {
	buoys := []Buoy{}
	err := db.Select(&buoys, `SELECT 
									buoy.id, 
									buoy.guid, 
									buoy.archived 
								FROM 
									buoy 
									INNER JOIN buoy_instance ON buoy_instance.buoy_id = buoy.id 
									INNER JOIN buoy_group ON buoy_instance.buoy_group_id = buoy_group.id 
								WHERE 
									buoy_group.id = ?`, id)
	if err != nil {
		return nil, err
	}

	return buoys, nil
}

// Get all Buoy Instances for the Buoy Group with the given id.
func (db *DB) GetBuoyInstancesForBuoyGroup(id int) ([]BuoyInstance, error) {
	buoyInstances := []BuoyInstance{}
	err := db.Select(&buoyInstances, `SELECT 
											buoy.id, 
											buoy.guid AS buoy_guid, 
											buoy_group.name AS buoy_group_name, 
											buoy_instance.id 
										FROM 
											buoy 
											INNER JOIN buoy_instance ON buoy_instance.buoy_id = buoy.id 
											INNER JOIN buoy_group ON buoy_instance.buoy_group_id = buoy_group.id 
										WHERE 
											buoy_group.id = ?`, id)

	if err != nil {
		return nil, err
	}

	return buoyInstances, nil
}
