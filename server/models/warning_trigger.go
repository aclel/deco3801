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

// A Warning Trigger defines the conditions which must be true for a warning
// to be generated for a particular reading. Many warning triggers can be created
// for the same sensor on a particular buoy instance.
type WarningTrigger struct {
	Id             int     `json:"id" db:"id"`
	Value          float64 `json:"value" db:"value"`
	Operator       string  `json:"operator" db:"operator"`
	Message        string  `json:"message" db:"message"`
	BuoyInstanceId int     `json:"buoyInstanceId" db:"buoy_instance_id"`
	SensorTypeId   int     `json:"sensorTypeId" db:"sensor_type_id"`
}

// Wraps Warning Trigger methods to allow for testing with dependency injection.
type WarningTriggerRepository interface {
	CreateWarningTrigger(*WarningTrigger) error
	DeleteWarningTriggerWithId(int) error
	UpdateWarningTrigger(*WarningTrigger) error
}

// Insert a new Warning Trigger into the database
func (db *DB) CreateWarningTrigger(warningTrigger *WarningTrigger) error {
	stmt, err := db.Preparex(`INSERT INTO warning_trigger (value, operator, message, buoy_instance_id, sensor_type_id) 
							 	VALUES(?, ?, ?, ?, ?);`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(warningTrigger.Value, warningTrigger.Operator,
		warningTrigger.Message, warningTrigger.BuoyInstanceId, warningTrigger.SensorTypeId)
	if err != nil {
		return err
	}

	return nil
}

// Updates the old Warning Trigger record with the new one
func (db *DB) UpdateWarningTrigger(updatedWarningTrigger *WarningTrigger) error {
	stmt, err := db.Preparex(`UPDATE warning_trigger SET value=?, operator=?,
		message=?, buoy_instance_id=?, sensor_type_id=? WHERE id=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedWarningTrigger.Value, updatedWarningTrigger.Operator,
		updatedWarningTrigger.Message, updatedWarningTrigger.BuoyInstanceId,
		updatedWarningTrigger.SensorTypeId, updatedWarningTrigger.Id)
	if err != nil {
		return err
	}

	return nil
}

// Delete Warning Trigger from the database with the given id.
func (db *DB) DeleteWarningTriggerWithId(id int) error {
	stmt, err := db.Preparex("DELETE FROM warning_trigger WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}
