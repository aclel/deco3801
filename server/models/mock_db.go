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

type MockDB struct {
	users []User
	buoys []Buoy
}

// BUOYS
func (mdb *MockDB) GetAllBuoys() ([]Buoy, error) {
	return mdb.buoys, nil
}

func (mdb *MockDB) CreateBuoy(buoy *Buoy) error {
	return nil
}

func (mdb *MockDB) GetBuoyById(id int) (*Buoy, error) {
	return &Buoy{}, nil
}

func (mdb *MockDB) UpdateBuoy(buoy *Buoy) error {
	return nil
}

func (mdb *MockDB) DeleteBuoyWithId(id int) error {
	return nil
}

func (mdb *MockDB) GetBuoysForBuoyGroup(id int) ([]Buoy, error) {
	return nil, nil
}

func (mdb *MockDB) GetBuoyInstancesForBuoyGroup(id int) ([]BuoyInstance, error) {
	return nil, nil
}

func (mdb *MockDB) AddCommandToBuoy(command *Command) error {
	return nil
}

// BUOY INSTANCES
func (mdb *MockDB) GetActiveBuoyInstance(guid string) (*BuoyInstance, error) {
	return &BuoyInstance{}, nil
}

func (mdb *MockDB) GetAllBuoyInstances() ([]BuoyInstance, error) {
	return nil, nil
}

func (mdb *MockDB) GetAllActiveBuoyInstances() ([]BuoyInstance, error) {
	return nil, nil
}

func (mdb *MockDB) CreateBuoyInstance(buoyInstance *BuoyInstance) error {
	return nil
}

func (mdb *MockDB) UpdateBuoyInstance(updatedBuoyInstance *BuoyInstance) error {
	return nil
}

func (mdb *MockDB) DeleteBuoyInstanceWithId(id int) error {
	return nil
}

func (mdb *MockDB) GetSensorsForBuoyInstance(id int) ([]BuoyInstanceSensor, error) {
	return nil, nil
}

func (db *MockDB) AddSensorToBuoyInstance(buoyId int, sensorTypeId int) error {
	return nil
}

func (db *MockDB) DeleteBuoyInstanceSensor(buoyInstanceId int, sensorTypeId int) error {
	return nil
}

// BUOY GROUPS
func (mdb *MockDB) GetAllBuoyGroups() ([]BuoyGroup, error) {
	return nil, nil
}

func (mdb *MockDB) GetBuoyGroupById(id int) (*BuoyGroup, error) {
	return nil, nil
}

func (mdb *MockDB) CreateBuoyGroup(buoyGroup *BuoyGroup) error {
	return nil
}

func (mdb *MockDB) UpdateBuoyGroup(buoyGroup *BuoyGroup) error {
	return nil
}

func (mdb *MockDB) DeleteBuoyGroupWithId(id int) error {
	return nil
}

// READINGS

func (db *MockDB) GetAllReadings(start time.Time, end time.Time) (*MapReadingBuoyGroupsWrapper, error) {
	return &MapReadingBuoyGroupsWrapper{}, nil
}

func (mdb *MockDB) CreateReading(reading *Reading) error {
	return nil
}

// SENSOR TYPES
func (mdb *MockDB) GetSensorTypeWithName(name string) (*SensorType, error) {
	return &SensorType{}, nil
}

func (mdb *MockDB) GetAllSensorTypes() ([]SensorType, error) {
	return nil, nil
}

// COMMAND TYPES
func (mdb *MockDB) GetAllCommandTypes() ([]CommandType, error) {
	return nil, nil
}

// COMMANDS
func (mdb *MockDB) GetAllCommands() ([]Command, error) {
	return nil, nil
}

func (mdb *MockDB) GetAllCommandsWithSent(sent bool) ([]Command, error) {
	return nil, nil
}

func (mdb *MockDB) DeleteCommandWithId(id int) error {
	return nil
}

// USERS
func (mdb *MockDB) GetUserWithEmail(email string) (*User, error) {
	return nil, nil
}

func (mdb *MockDB) CreateUser(user *User) error {
	return nil
}

func (mdb *MockDB) GetAllUsers() ([]User, error) {
	return nil, nil
}

func (mdb *MockDB) DeleteUserWithId(id int) error {
	return nil
}

// WARNING TRIGGERS
func (mdb *MockDB) CreateWarningTrigger(warningTrigger *WarningTrigger) error {
	return nil
}

// AUTH
func (mdb *MockDB) Login(user *User) (*User, error) {
	//shortened token, only checking for non-empty
	return &User{Token: "eyJhbGciOiJSUzI..."}, nil
}

func (mdb *MockDB) RefreshToken(user *User) ([]byte, error) {
	return []byte(""), nil
}

func (mdb *MockDB) SendNewUserEmail(user *User, emailUser *EmailCredentials) error {
	return nil
}
