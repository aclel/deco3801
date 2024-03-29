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

import "errors"

// Represents a physical buoy
type Buoy struct {
	Id                   int64  `json:"id" db:"id"`
	Guid                 string `json:"guid" db:"guid"`
	Name                 string `json:"name"` // This field is only used when a new buoy is created to add a name for buoy instance
	ActiveBuoyInstanceId int    `json:"activeBuoyInstanceId" db:"active_buoy_instance_id"`
	Archived             bool   `json:"archived" db:"archived"`
}

// Wraps Buoy methods to allow for testing with dependency injection
type BuoyRepository interface {
	GetAllBuoys() ([]Buoy, error)
	GetBuoyById(id int) (*Buoy, error)
	CreateBuoy(buoy *Buoy) (int64, error)
	UpdateBuoy(buoy *Buoy) error
	ArchiveBuoyWithId(id int) error
	AddCommandToBuoy(command *Command) (int64, error)
	GetBuoyCommands(string, bool) ([]Command, error)
	GetBuoyCommandsById(id int, sent bool) ([]Command, error)
}

func (buoy *Buoy) ValidateNew() error {
	if buoy.Guid == "" {
		return errors.New("Missing guid")
	}

	if buoy.Name == "" {
		return errors.New("Missing name of initial buoy instance")
	}

	return nil
}

func (buoy *Buoy) ValidateUpdate() error {
	if buoy.Guid == "" {
		return errors.New("Missing guid")
	}

	return nil
}

// Gets all buoys from the database.
// Returns a slice of buoys.
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
		return nil, err
	}

	// Assume that the id is unique and that one row was retrieved.
	return &buoy, nil
}

// Insert a new Buoy into the database.
func (db *DB) CreateBuoy(buoy *Buoy) (int64, error) {
	query, err := db.Preparex("INSERT INTO buoy (guid, active_buoy_instance_id, archived) VALUES(?, ?, ?);")
	if err != nil {
		return -1, err
	}

	result, err := query.Exec(buoy.Guid, 0, 0)
	if err != nil {
		return -1, err
	}

	newId, err := result.LastInsertId()
	if err != nil {
		return -1, err
	}

	return newId, nil
}

// Updates the given buoy in the database.
func (db *DB) UpdateBuoy(buoy *Buoy) error {
	stmt, err := db.Preparex("UPDATE buoy SET guid=?, archived=? WHERE id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(buoy.Guid, buoy.Archived, buoy.Id)
	if err != nil {
		return err
	}

	return nil
}

// Archive Buoy with the given id.
func (db *DB) ArchiveBuoyWithId(id int) error {
	stmt, err := db.Preparex("UPDATE buoy SET archived=true WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}

// Add the given Command to a Buoy
func (db *DB) AddCommandToBuoy(command *Command) (int64, error) {
	stmt, err := db.Preparex("INSERT INTO buoy_command (buoy_id, command_type_id, value, created_at) VALUES(?, ?, ?, ?);")
	if err != nil {
		return -1, err
	}

	result, err := stmt.Exec(command.BuoyId, command.CommandTypeId, command.Value, command.CreatedAt)
	if err != nil {
		return -1, err
	}

	newId, err := result.LastInsertId()
	if err != nil {
		return -1, err
	}

	return newId, nil
}

func (db *DB) GetBuoyCommandsById(id int, sent bool) ([]Command, error) {
	commands := []Command{}
	err := db.Select(&commands, `SELECT 
									buoy_command.* 
								FROM 
									buoy_command 
									INNER JOIN buoy ON buoy_command.buoy_id = buoy.id 
								WHERE 
									buoy.id = ? 
									AND sent = ?;`, id, sent)
	if err != nil {
		return nil, err
	}

	return commands, nil
}

// Get all commands for a buoy with the given guid and sent status
func (db *DB) GetBuoyCommands(guid string, sent bool) ([]Command, error) {
	commands := []Command{}
	err := db.Select(&commands, `SELECT 
									buoy_command.* 
								FROM 
									buoy_command 
									INNER JOIN buoy ON buoy_command.buoy_id = buoy.id 
								WHERE 
									buoy.guid = ? 
									AND sent = ?;`, guid, sent)
	if err != nil {
		return nil, err
	}

	return commands, nil
}
