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

type SensorType struct {
	Id          int    `json:"id" db:"id"`
	Description string `json:"description" db:"description"`
	Unit        string `json:"unit" db:"unit"`
	Name        string `json:"name" db:"name"`
}

type SensorTypeRepository interface {
	GetSensorTypeWithName(string) (*SensorType, error)
}

// Get the sensor type from the database with the given unique name
func (db *DB) GetSensorTypeWithName(name string) (*SensorType, error) {
	dbSensorType := SensorType{}
	err := db.Get(&dbSensorType, "SELECT * FROM sensor_type WHERE name=?;", name)

	if err != nil {
		return nil, err
	}

	return &dbSensorType, nil
}
