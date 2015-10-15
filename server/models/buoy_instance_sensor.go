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

import "github.com/go-sql-driver/mysql"

// Represents a sensor which is connected to a buoy during a
// particular deployment. A Buoy Instance has many Buoy Instance Sensors.
// When a Buoy is assigned a new Buoy Instance, it gets a new set of
// Buoy Instance sensors.
type BuoyInstanceSensor struct {
	Id             int            `json:"id" db:"id"`
	SensorTypeId   int            `json:"sensorTypeId" db:"sensor_type_id"`
	BuoyInstanceId int            `json:"buoyInstanceId" db:"buoy_instance_id"`
	LastRecorded   mysql.NullTime `json:"lastRecorded" db:"last_recorded"`
}

// Wraps the Buoy Instance Sensor methods to allow for testing with dependency injection.
type BuoyInstanceSensorRepository interface {
	UpdateBuoyInstanceSensor(*BuoyInstanceSensor) error
}

// Updates the given buoy instance sensor in the database.
func (db *DB) UpdateBuoyInstanceSensor(updatedSensor *BuoyInstanceSensor) error {
	stmt, err := db.Preparex("UPDATE buoy_instance_sensor SET last_recorded=? WHERE id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedSensor.LastRecorded, updatedSensor.Id)
	if err != nil {
		return err
	}

	return nil
}
