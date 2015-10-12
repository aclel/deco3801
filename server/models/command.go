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

// Commands are sent to a buoy to invoke configuration of certain
// behaviours. Multiple Commands can be queued up for a buoy. When
// a buoy wakes up it sends a request to the server for all commands
// that have not yet been sent to that buoy.
type Command struct {
	Id            int  `json:"id" db:"id"`
	BuoyId        int  `json:"buoyId" db:"buoy_id"`
	CommandTypeId int  `json:"commandTypeId" db:"command_type_id"`
	Value         int  `json:"value" db:"value"`
	Sent          bool `json:"sent" db:"sent"`
}

// Wraps Command methods to allow for testing with dependency injection.
type CommandRepository interface {
	GetCommandWithId(int) (*Command, error)
	DeleteCommandWithId(int) error
	GetAllCommands() ([]Command, error)
	GetAllCommandsWithSent(bool) ([]Command, error)
	UpdateCommandSentStatus(int, bool) error
}

func (db *DB) GetCommandWithId(id int) (*Command, error) {
	command := Command{}
	err := db.Get(&command, "SELECT * FROM buoy_command WHERE id=?", id)

	if err != nil {
		return nil, err
	}

	// Assume that the id is unique and that one row was retrieved.
	return &command, nil
}

// Delete Command from the database with the given id.
func (db *DB) DeleteCommandWithId(id int) error {
	stmt, err := db.Preparex("DELETE FROM buoy_command WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}

// Get all Commands (both sent and unsent)
func (db *DB) GetAllCommands() ([]Command, error) {
	commands := []Command{}
	err := db.Select(&commands, "SELECT * FROM buoy_command;")
	if err != nil {
		return nil, err
	}

	return commands, nil
}

// Get all Commands that have or have not been sent to buoys
func (db *DB) GetAllCommandsWithSent(sent bool) ([]Command, error) {
	commands := []Command{}
	err := db.Select(&commands, "SELECT * FROM buoy_command WHERE sent=?;", sent)
	if err != nil {
		return nil, err
	}

	return commands, nil
}

// Update the sent status of the Command with the given id
func (db *DB) UpdateCommandSentStatus(id int, sent bool) error {
	stmt, err := db.Preparex("UPDATE buoy_command SET sent=? WHERE id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(sent, id)
	if err != nil {
		return err
	}

	return nil
}
