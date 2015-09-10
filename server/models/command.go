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

type Command struct {
	Id            int     `json:"id" db:"id"`
	BuoyId        int     `json:"buoyId" db:"buoy_id"`
	CommandTypeId int     `json:"commandTypeId" db:"command_type_id"`
	Value         float64 `json:"value" db:"value"`
	Sent          bool    `json:"sent" db:"sent"`
}

type CommandRepository interface {
	DeleteCommandWithId(int) error
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
