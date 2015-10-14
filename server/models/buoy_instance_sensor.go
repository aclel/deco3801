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

const NEW = 1
const DISABLED = 2
const ENABLED = 3
const INVALID_TYPE = 4

// Represents a sensor which is connected to a buoy during a
// particular deployment. A Buoy Instance has many Buoy Instance Sensors.
// When a Buoy is assigned a new Buoy Instance, it gets a new set of
// Buoy Instance sensors.
type BuoyInstanceSensor struct {
	Id             int  `json:"id" db:"id"`
	SensorTypeId   int  `json:"sensorTypeId" db:"sensor_type_id"`
	BuoyInstanceId int  `json:"buoyInstanceId" db:"buoy_instance_id"`
	Disabled       bool `json:"disabled" db:"disabled"`
}

// Wraps the Buoy Instance Sensor methods to allow for testing with dependency injection.
type BuoyInstanceSensorRepository interface {
	UpdateBuoyInstanceSensorDisabledStatus(int, int, bool) error
}

func (db *DB) UpdateBuoyInstanceSensorDisabledStatus(buoyInstanceId int, sensorTypeId int, status bool) error {
	stmt, err := db.Preparex("UPDATE buoy_instance_sensor SET disabled=? WHERE buoy_instance_id=? AND sensor_type_id=?;")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(status, buoyInstanceId, sensorTypeId)
	if err != nil {
		return err
	}

	return nil
}
