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

// A sensor has one sensor type. There are only a few different
// types of sensors.
type SensorType struct {
	Id          int    `json:"id" db:"id"`
	Description string `json:"description" db:"description"`
	Unit        string `json:"unit" db:"unit"`
	Name        string `json:"name" db:"name"`
}

// Wraps Sensor Types methods to allow for testing with dependency injection.
type SensorTypeRepository interface {
	GetSensorTypeWithName(string) (*SensorType, error)
	GetAllSensorTypes() ([]SensorType, error)
}

// Get the sensor type from the database with the given unique name.
func (db *DB) GetSensorTypeWithName(name string) (*SensorType, error) {
	dbSensorType := SensorType{}
	err := db.Get(&dbSensorType, "SELECT * FROM sensor_type WHERE name=?;", name)

	if err != nil {
		return nil, err
	}

	return &dbSensorType, nil
}

// Gets all Sensor Types
func (db *DB) GetAllSensorTypes() ([]SensorType, error) {
	sensorTypes := []SensorType{}
	err := db.Select(&sensorTypes, "SELECT * FROM sensor_type;")
	if err != nil {
		return nil, err
	}

	return sensorTypes, nil
}
