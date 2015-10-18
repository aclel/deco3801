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

import (
	"sort"
	"strconv"
	"time"

	"github.com/jmoiron/sqlx"
)

// Represents a reading at for a particular buoy instance at a time.
// Has a sensor reading for each sensor that was recorded.
type Reading struct {
	Id             int64            `db:"reading_id"`
	Latitude       float64          `json:"lat" db:"latitude"`
	Longitude      float64          `json:"lng" db:"longitude"`
	Altitude       float32          `json:"al" db:"altitude"`
	SpeedOG        float32          `json:"sp" db:"speed_og"`
	Course         float32          `json:"co" db:"course"`
	Timestamp      time.Time        `db:"timestamp"`
	Date           string           `json:"d"`
	Time           string           `json:"t"`
	SensorReadings []*SensorReading `json:"sR"`
	BuoyInstanceId int              `db:"buoy_instance_id"`
	BuoyGuid       string           `json:"guid" db:"guid"`
	MessageNumber  int              `db:"message_number"`
}

// Represents a reading for a particular sensor at a certain time.
// This is a child of a Reading.
type SensorReading struct {
	Id           int     `db:"id"`
	ReadingId    int64   `db:"reading_id"`
	SensorTypeId int     `json:"type" db:"sensor_type_id"`
	Value        float64 `json:"val" db:"value"`
}

// Wraps Buoy Groups array for json response
type BuoyGroupsWrapper struct {
	BuoyGroups []BuoyGroup `json:"buoyGroups"`
}

// Wraps Readings methods to allow for testing with dependency injection
type ReadingRepository interface {
	CreateReading(*Reading) (int64, error)
	CreateSensorReading(*SensorReading) error
	GetAllReadings(time.Time, time.Time) (*MapReadingBuoyGroupsWrapper, error)
	GetReadingsIn([]int) ([][]string, error)
}

// Insert a new Reading into the database. Returns the id of the new Reading.
func (db *DB) CreateReading(reading *Reading) (int64, error) {
	stmt, err := db.Preparex(`INSERT INTO reading (
									buoy_instance_id, latitude, longitude, 
									altitude, speed_og, course, timestamp
								) 
								VALUES 
									(?, ?, ?, ?, ?, ?, ?);`)
	if err != nil {
		return -1, err
	}

	result, err := stmt.Exec(reading.BuoyInstanceId, reading.Latitude, reading.Longitude,
		reading.Altitude, reading.SpeedOG, reading.Course, reading.Timestamp)
	if err != nil {
		return -1, err
	}

	newId, err := result.LastInsertId()
	if err != nil {
		return -1, err
	}

	return newId, nil
}

// Insert a new Reading into the database
func (db *DB) CreateSensorReading(sensorReading *SensorReading) error {
	stmt, err := db.Preparex(`INSERT INTO sensor_reading (reading_id, sensor_type_id, value) VALUES(?, ?, ?);`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(sensorReading.ReadingId, sensorReading.SensorTypeId, sensorReading.Value)
	if err != nil {
		return err
	}

	return nil
}

// Needed to store data from a complex SQL query which gets
// all Buoy Groups, their Buoy Instances, the Readings for those
// Buoy Instances and the Sensor Types for those Readings. This is
// needed to populate the Dashboard in the web app.
type DbMapReading struct {
	Id               int       `db:"id"`
	ReadingId        int       `db:"reading_id"`
	BuoyInstanceId   int       `db:"buoy_instance_id"`
	BuoyInstanceName string    `db:"buoy_instance_name"`
	Value            float64   `db:"value"`
	Latitude         float64   `db:"latitude"`
	Longitude        float64   `db:"longitude"`
	Altitude         float32   `db:"altitude"`
	SpeedOG          float32   `db:"speed_og"`
	Course           float32   `db:"course"`
	Timestamp        time.Time `db:"timestamp"`
	SensorTypeId     int       `db:"sensor_type_id"`
	BuoyGroupId      int       `db:"buoy_group_id"`
	BuoyGroupName    string    `db:"buoy_group_name"`
	BuoyId           int       `db:"buoy_id"`
}

// Top level wrapper for data which is used to populate the dashboard
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
	Id         int                 `json:"id"`
	Name       string              `json:"name"`
	Readings   []MapReading        `json:"readings"`
	ReadingMap map[int]*MapReading `json:"-"`
}

type MapReading struct {
	Id             int                `json:"id"`
	Latitude       float64            `json:"latitude"`
	Longitude      float64            `json:"longitude"`
	Altitude       float32            `json:"altitude"`
	SpeedOG        float32            `json:"speedOG"`
	Course         float32            `json:"course"`
	Timestamp      int64              `json:"timestamp"`
	SensorReadings []MapSensorReading `json:"sensorReadings"`
}

type MapSensorReading struct {
	Value        float64 `json:"value"`
	SensorTypeId int     `json:"sensorTypeId"`
}

// Returns all the readings from the database between the start time and end time
func (db *DB) GetAllReadings(startTime time.Time, endTime time.Time) (*MapReadingBuoyGroupsWrapper, error) {
	readings := []DbMapReading{}
	err := db.Select(&readings, `SELECT 
		sensor_reading.id AS id, 
		reading.buoy_instance_id AS buoy_instance_id, 
		sensor_reading.sensor_type_id AS sensor_type_id, 
		sensor_reading.value AS value, 
		reading.id AS reading_id,
		reading.latitude AS latitude, 
		reading.longitude AS longitude, 
		reading.timestamp AS timestamp, 
		reading.altitude AS altitude,
		reading.speed_og AS speed_og,
		reading.course AS course,
		buoy_instance.buoy_id AS buoy_id, 
		buoy_instance.name AS buoy_instance_name,
		buoy_group.id AS buoy_group_id, 
		buoy_group.name AS buoy_group_name 
		FROM 
		(
			(
				(
					(
						sensor_reading
						LEFT JOIN reading ON(
							sensor_reading.reading_id = reading.id
						)
					)
					LEFT JOIN sensor_type ON(
						(
							sensor_reading.sensor_type_id = sensor_type.id
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
		) WHERE (reading.timestamp > ? AND reading.timestamp < ?) ORDER BY buoy_group.id, buoy_instance_id, timestamp;`, startTime, endTime)
	if err != nil {
		return nil, err
	}

	// Build the json which will be returned to the web app to populate the dashboard
	buoyGroupsWrapper, err := buildReadingsIndexData(readings)
	if err != nil {
		return nil, err
	}

	return buoyGroupsWrapper, nil
}

// Builds the data which is returned to the web app to populate the dashboard. The data is structured
// as follows:
//
// Buoy Groups
//		Buoy Instances
//			Readings
//				SensorReadings
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
			buoyInstance = &MapReadingBuoyInstance{Id: reading.BuoyInstanceId, Name: reading.BuoyInstanceName}
			buoyInstance.ReadingMap = make(map[int]*MapReading)
			group.BuoyInstanceMap[reading.BuoyInstanceId] = buoyInstance
		}

		var mapReading *MapReading
		// If a Map Reading for the given buoy instance with the given timestamp doesn't already exist, add it
		if mapReading, exists = buoyInstance.ReadingMap[reading.ReadingId]; !exists {
			// Construct Reading for Buoy Instance
			mapReading = &MapReading{
				Id:        reading.ReadingId,
				Latitude:  reading.Latitude,
				Longitude: reading.Longitude,
				Altitude:  reading.Altitude,
				SpeedOG:   reading.SpeedOG,
				Course:    reading.Course,
				Timestamp: reading.Timestamp.Unix(),
			}
			// Store the reading in the map
			buoyInstance.ReadingMap[reading.ReadingId] = mapReading
		}

		sensorReading := MapSensorReading{Value: reading.Value, SensorTypeId: reading.SensorTypeId}
		mapReading.SensorReadings = append(mapReading.SensorReadings, sensorReading)
	}

	// All Buoy Groups which will be returned to the client
	buoyGroupsWrapper := &MapReadingBuoyGroupsWrapper{BuoyGroups: make([]MapReadingBuoyGroup, 0)}
	for _, buoyGroup := range buoyGroups {
		for _, buoyInstance := range buoyGroup.BuoyInstanceMap {
			for _, reading := range buoyInstance.ReadingMap {
				buoyInstance.Readings = append(buoyInstance.Readings, *reading)
			}
			sort.Sort(byTimestamp(buoyInstance.Readings))
			buoyGroup.BuoyInstances = append(buoyGroup.BuoyInstances, *buoyInstance)
		}
		buoyGroupsWrapper.BuoyGroups = append(buoyGroupsWrapper.BuoyGroups, *buoyGroup)
	}

	return buoyGroupsWrapper, nil
}

// Custom sorter for map readings
type byTimestamp []MapReading

func (readings byTimestamp) Len() int {
	return len(readings)
}

func (readings byTimestamp) Swap(i, j int) {
	readings[i], readings[j] = readings[j], readings[i]
}

func (readings byTimestamp) Less(i, j int) bool {
	return readings[i].Timestamp < readings[j].Timestamp
}

// Get all Readings with ids that are in the given slice of integers.
// Returns a 2D string array which can be passed to the CSV WriteAll
// function.
func (db *DB) GetReadingsIn(readingsIds []int) ([][]string, error) {
	query, args, err := sqlx.In(`SELECT 
									value, 
									latitude, 
									longitude, 
									altitude,
									speed_og,
									course,
									timestamp 
								FROM 
									sensor_reading 
									INNER JOIN reading ON sensor_reading.reading_id = reading.id 
								WHERE 
									reading.id IN (?)`, readingsIds)
	if err != nil {
		return nil, err
	}
	query = db.Rebind(query)

	rows, err := db.Query(query, args...)
	if err != nil {
		return nil, err
	}

	var readings [][]string
	var value float64
	var latitude float64
	var longitude float64
	var timestamp time.Time

	// Add readings to [][]string
	for rows.Next() {
		err = rows.Scan(&value, &latitude, &longitude, &timestamp)
		if err != nil {
			return nil, err
		}

		val := strconv.FormatFloat(value, 'f', -1, 64)
		lat := strconv.FormatFloat(latitude, 'f', -1, 64)
		long := strconv.FormatFloat(longitude, 'f', -1, 64)
		result := []string{val, lat, long, timestamp.UTC().String()}

		readings = append(readings, result)
	}

	return readings, nil
}
