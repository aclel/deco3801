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

// A Command has one Command Type. There are a small amount
// of defined Command Types.
// Types:
// - poll rate
type CommandType struct {
	Id          int    `json:"id" db:"id"`
	Name        string `json:"name" db:"name"`
	Description string `json:"description" db:"description"`
	Archived    bool   `json:"archived" db:"archived"`
}

// Wraps the Command Types methods to allow for testing with dependency injection.
type CommandTypeRepository interface {
	GetAllCommandTypes() ([]CommandType, error)
	CreateCommandType(commandType *CommandType) error
	UpdateCommandType(commandType *CommandType) error
	ArchiveCommandTypeWithId(id int) error
}

// Get all Command Types.
func (db *DB) GetAllCommandTypes() ([]CommandType, error) {
	commandTypes := []CommandType{}
	err := db.Select(&commandTypes, "SELECT * FROM command_type;")
	if err != nil {
		return nil, err
	}

	return commandTypes, nil
}

// Create a new Command Type
func (db *DB) CreateCommandType(commandType *CommandType) error {
	query, err := db.Preparex("INSERT INTO command_type (name, description) VALUES(?, ?);")
	if err != nil {
		return err
	}

	_, err = query.Exec(commandType.Name, commandType.Description)
	if err != nil {
		return err
	}

	return nil
}

// Updates the given Command Type in the database.
func (db *DB) UpdateCommandType(commandType *CommandType) error {
	stmt, err := db.Preparex("UPDATE command_type SET name=?, description=? WHERE id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(commandType.Name, commandType.Description, commandType.Id)
	if err != nil {
		return err
	}

	return nil
}

// Archive Command Type with the given id.
func (db *DB) ArchiveCommandTypeWithId(id int) error {
	stmt, err := db.Preparex("UPDATE command_type SET archived=true WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}
