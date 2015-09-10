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

// Represents a reading for one sensor from a particular buoy instance.
type Reading struct {
	Id             int
	Latitude       float64
	Longitude      float64
	Value          float64
	Timestamp      string
	BuoyGuid       string
	SensorTypeId   int
	BuoyInstanceId int
	SensorTypeName string
	MessageNumber  int
}

type BuoyGroupsWrapper struct {
	BuoyGroups []BuoyGroup `json:"buoyGroups"`
}

type ReadingRepository interface {
	CreateReading(*Reading) error
	GetAllReadings(time.Time, time.Time) (*MapReadingBuoyGroupsWrapper, error)
}

// Insert a new Reading into the database
func (db *DB) CreateReading(reading *Reading) error {
	stmt, err := db.Preparex(`INSERT INTO reading (sensor_type_id, buoy_instance_id, value, 
		latitude, longitude, timestamp) VALUES(?, ?, ?, ?, ?, ?);`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(reading.SensorTypeId, reading.BuoyInstanceId,
		reading.Value, reading.Latitude, reading.Longitude, reading.Timestamp)
	if err != nil {
		return err
	}

	return nil
}

// Needed to store data from a complex SQL query which gets
// all Buoy Groups, their Buoy Instances, the Readings for those
// Buoy Instances and the Sensor Types for those Readings.
type DbMapReading struct {
	Id                    int       `db:"id"`
	BuoyInstanceId        int       `db:"buoy_instance_id"`
	Value                 float64   `db:"value"`
	Latitude              float64   `db:"latitude"`
	Longitude             float64   `db:"longitude"`
	Timestamp             time.Time `db:"timestamp"`
	SensorTypeId          int       `db:"sensor_type_id"`
	SensorTypeName        string    `db:"sensor_type_name"`
	SensorTypeDescription string    `db:"sensor_type_description"`
	SensorTypeUnit        string    `db:"sensor_type_unit"`
	BuoyGroupId           int       `db:"buoy_group_id"`
	BuoyGroupName         string    `db:"buoy_group_name"`
	BuoyId                int       `db:"buoy_id"`
}

type MapReadingBuoyGroupsWrapper struct {
	BuoyGroups []MapReadingBuoyGroup `json:"buoyGroups"`
}

type MapReadingBuoyGroup struct {
	Id              int                             `json:"id"`
	Name            string                          `json:"name"`
	BuoyInstances   []MapReadingBuoyInstance        `json:"buoyInstances"`
	BuoyInstanceMap map[int]*MapReadingBuoyInstance `json:"-"`
}

type MapReadingBuoyInstance struct {
	Id       int          `json:"id"`
	Readings []MapReading `json:"readings"`
}

type MapReading struct {
	Id         int        `json:"id"`
	Value      float64    `json:"name"`
	Latitude   float64    `json:"latitude"`
	Longitude  float64    `json:"longitude"`
	Timestamp  int64      `json:"timestamp"`
	SensorType SensorType `json:"sensorType"`
}

// Returns all the readings from the database
func (db *DB) GetAllReadings(startTime time.Time, endTime time.Time) (*MapReadingBuoyGroupsWrapper, error) {
	readings := []DbMapReading{}
	err := db.Select(&readings, `SELECT 
		reading.id AS id, 
		reading.buoy_instance_id AS buoy_instance_id, 
		reading.sensor_type_id AS sensor_type_id, 
		reading.value AS value, 
		reading.latitude AS latitude, 
		reading.longitude AS longitude, 
		reading.timestamp AS timestamp, 
		sensor_type.name AS sensor_type_name, 
		sensor_type.unit AS sensor_type_unit, 
		sensor_type.description AS sensor_type_description, 
		buoy_instance.buoy_id AS buoy_id, 
		buoy_group.id AS buoy_group_id, 
		buoy_group.name AS buoy_group_name 
		FROM 
		(
			(
				(
					reading 
					LEFT JOIN sensor_type ON(
						(
							reading.sensor_type_id = sensor_type.id
						)
					)
				) 
				LEFT JOIN buoy_instance ON(
					(
						reading.buoy_instance_id = buoy_instance.id
					)
				)
			) 
			LEFT JOIN buoy_group ON(
				(
					buoy_instance.buoy_group_id = buoy_group.id
				)
			)
		) WHERE (reading.timestamp > ? AND reading.timestamp < ?) ORDER BY buoy_group.id, buoy_instance_id;`, startTime, endTime)
	if err != nil {
		return nil, err
	}

	buoyGroupsWrapper, err := buildReadingsIndexData(readings)
	if err != nil {
		return nil, err
	}

	return buoyGroupsWrapper, nil
}

// Buoy Groups
//		Buoy Instances
//			Readings
//				SensorType
func buildReadingsIndexData(mapReadings []DbMapReading) (*MapReadingBuoyGroupsWrapper, error) {
	// Ensure a buoy group is not duplicated
	buoyGroups := make(map[int]*MapReadingBuoyGroup)

	// For each row in the SQL result
	for _, reading := range mapReadings {
		var group *MapReadingBuoyGroup
		var exists bool
		// If the Buoy Group doesn't exist, add it
		if group, exists = buoyGroups[reading.BuoyGroupId]; !exists {
			group = &MapReadingBuoyGroup{Id: reading.BuoyGroupId, Name: reading.BuoyGroupName}
			group.BuoyInstanceMap = make(map[int]*MapReadingBuoyInstance)
			buoyGroups[reading.BuoyGroupId] = group
		}

		var buoyInstance *MapReadingBuoyInstance
		// If the Buoy Instance doesn't exist within the Buoy Group, add it
		if buoyInstance, exists = group.BuoyInstanceMap[reading.BuoyInstanceId]; !exists {
			buoyInstance = &MapReadingBuoyInstance{Id: reading.BuoyInstanceId}
			group.BuoyInstanceMap[reading.BuoyInstanceId] = buoyInstance
		}

		// Construct Reading for Buoy Instance
		reading := MapReading{
			Id:        reading.Id,
			Value:     reading.Value,
			Latitude:  reading.Latitude,
			Longitude: reading.Longitude,
			Timestamp: reading.Timestamp.Unix(),
			SensorType: SensorType{
				Id:          reading.SensorTypeId,
				Name:        reading.SensorTypeName,
				Description: reading.SensorTypeDescription,
				Unit:        reading.SensorTypeUnit,
			},
		}
		buoyInstance.Readings = append(buoyInstance.Readings, reading)
	}

	// All Buoy Groups which will be returned to the client
	buoyGroupsWrapper := &MapReadingBuoyGroupsWrapper{}
	for _, buoyGroup := range buoyGroups {
		for _, buoyInstance := range buoyGroup.BuoyInstanceMap {
			buoyGroup.BuoyInstances = append(buoyGroup.BuoyInstances, *buoyInstance)
		}
		buoyGroupsWrapper.BuoyGroups = append(buoyGroupsWrapper.BuoyGroups, *buoyGroup)
	}

	return buoyGroupsWrapper, nil
}
