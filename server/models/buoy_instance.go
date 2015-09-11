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

import "time"

type BuoyInstance struct {
	Id            int       `json:"id" db:"id"`
	Name          string    `json:"name" db:"name"`
	BuoyId        int       `json:"buoyId" db:"buoy_id"`
	BuoyName      string    `json:"buoyName" db:"buoy_name"`
	BuoyGuid      string    `json:"buoyGuid" db:"buoy_guid"`
	BuoyGroupId   int       `json:"buoyGroupId" db:"buoy_group_id"`
	BuoyGroupName string    `json:"buoyGroupName" db:"buoy_group_name"`
	DateCreated   time.Time `json:"dateCreated" db:"date_created"`
}

type BuoyInstanceRepository interface {
	GetAllBuoyInstances() ([]BuoyInstance, error)
	GetAllActiveBuoyInstances() ([]BuoyInstance, error)
	GetActiveBuoyInstance(string) (*BuoyInstance, error)
	CreateBuoyInstance(*BuoyInstance) error
	UpdateBuoyInstance(*BuoyInstance) error
	DeleteBuoyInstanceWithId(int) error
	GetSensorsForBuoyInstance(int) ([]BuoyInstanceSensor, error)
	AddSensorToBuoyInstance(int, int) error
	DeleteBuoyInstanceSensor(int, int) error
	GetWarningTriggersForBuoyInstance(int) ([]WarningTrigger, error)
}

// Get all Buoy Instances (both active and inactive)
func (db *DB) GetAllBuoyInstances() ([]BuoyInstance, error) {
	buoyInstances := []BuoyInstance{}
	err := db.Select(&buoyInstances, "SELECT * FROM buoy_instance;")
	if err != nil {
		return nil, err
	}

	return buoyInstances, nil
}

// Get all active Buoy Instances. A Buoy can only have one
// active Buoy Instance at any one time.
func (db *DB) GetAllActiveBuoyInstances() ([]BuoyInstance, error) {
	buoyInstances := []BuoyInstance{}
	err := db.Select(&buoyInstances, `SELECT buoy_instance.id, buoy_instance.name, buoy_id, buoy_group_id, date_created
		from buoy_instance 
		INNER JOIN buoy on buoy_instance.buoy_id = buoy.id 
		WHERE buoy_instance.id=buoy.active_buoy_instance_id;`)

	if err != nil {
		return nil, err
	}

	return buoyInstances, nil
}

// Get the most recent buoy instance for the buoy with the given guid
func (db *DB) GetActiveBuoyInstance(buoyGuid string) (*BuoyInstance, error) {
	dbBuoyInstance := BuoyInstance{}
	err := db.Get(&dbBuoyInstance, `SELECT buoy_instance.id, buoy_id, buoy_group_id, date_created 
		from buoy_instance 
		INNER JOIN buoy on buoy_instance.buoy_id = buoy.id 
		WHERE buoy.guid=? 
		ORDER BY date_created DESC LIMIT 1;`, buoyGuid)

	if err != nil {
		return nil, err
	}

	return &dbBuoyInstance, nil
}

// Create a new Buoy Instance - ie. Add a Buoy to a Buoy Group
func (db *DB) CreateBuoyInstance(buoyInstance *BuoyInstance) error {
	stmt, err := db.Preparex("INSERT INTO buoy_instance (buoy_id, buoy_group_id) VALUES (?, ?);")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(buoyInstance.BuoyId, buoyInstance.BuoyGroupId)
	if err != nil {
		return err
	}

	return nil
}

// Delete Buoy Instance from the database with the given id.
func (db *DB) DeleteBuoyInstanceWithId(id int) error {
	stmt, err := db.Preparex("DELETE FROM buoy_instance WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}

// Replace a Buoy Instance with the given updated Buoy Instance.
// Only its name and buoy group can be changed.
// When a Buoy Instance is updated, the active_buoy_instance_id for the parent buoy is updated
func (db *DB) UpdateBuoyInstance(updatedBuoyInstance *BuoyInstance) error {
	stmt, err := db.Preparex(`UPDATE buoy_instance SET name=?, buoy_group_id=? WHERE id=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedBuoyInstance.Name, updatedBuoyInstance.BuoyGroupId, updatedBuoyInstance.Id)
	if err != nil {
		return err
	}

	return nil
}

// Get all Sensors for the Buoy Instance with the given Id
func (db *DB) GetSensorsForBuoyInstance(id int) ([]BuoyInstanceSensor, error) {
	sensors := []BuoyInstanceSensor{}
	err := db.Select(&sensors, `SELECT buoy_instance_sensor.id, sensor_type.id AS sensor_type_id
							   FROM buoy_instance_sensor 
							   INNER JOIN sensor_type ON buoy_instance_sensor.sensor_type_id=sensor_type.id 
							   WHERE buoy_instance_sensor.buoy_instance_id=?`, id)
	if err != nil {
		return nil, err
	}

	return sensors, nil
}

// Add a Sensor Type to a Buoy Instance
func (db *DB) AddSensorToBuoyInstance(buoyInstanceId int, sensorTypeId int) error {
	stmt, err := db.Preparex("INSERT INTO buoy_instance_sensor (buoy_instance_id, sensor_type_id) VALUES (?,?);")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(buoyInstanceId, sensorTypeId)
	if err != nil {
		return err
	}

	return nil
}

// Delete a Sensor Type from a Buoy Instance
func (db *DB) DeleteBuoyInstanceSensor(buoyInstanceId int, sensorTypeId int) error {
	stmt, err := db.Preparex("DELETE FROM buoy_instance_sensor WHERE buoy_instance_id=? AND sensor_type_id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(buoyInstanceId, sensorTypeId)
	if err != nil {
		return err
	}

	return nil
}

// Get all Warning Triggers for the Buoy Instance with the given Id
func (db *DB) GetWarningTriggersForBuoyInstance(id int) ([]WarningTrigger, error) {
	warningTriggers := []WarningTrigger{}
	err := db.Select(&warningTriggers, `SELECT *
							   FROM warning_trigger
							   WHERE buoy_instance_id=?`, id)
	if err != nil {
		return nil, err
	}

	return warningTriggers, nil
}
