/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Cleland <andrew.cleland3@gmail.com>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
package models

type CommandType struct {
	Id   int    `json:"id" db:"id"`
	Name string `json:"name" db:"name"`
}

type CommandTypeRepository interface {
	GetAllCommandTypes() ([]CommandType, error)
}

func (db *DB) GetAllCommandTypes() ([]CommandType, error) {
	commandTypes := []CommandType{}
	err := db.Select(&commandTypes, "SELECT * FROM command_type;")
	if err != nil {
		return nil, err
	}

	return commandTypes, nil
}
