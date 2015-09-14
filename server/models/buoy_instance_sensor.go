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

// Represents a sensor which is connected to a buoy during a
// particular deployment. A Buoy Instance has many Buoy Instance Sensors.
// When a Buoy is assigned a new Buoy Instance, it gets a new set of
// Buoy Instance sensors.
type BuoyInstanceSensor struct {
	Id           int `json:"id" db:"id"`
	SensorTypeId int `json:"sensorTypeId" db:"sensor_type_id"`
}
