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
	"time"

	"github.com/go-sql-driver/mysql"
)

// Implements all model methods to allow for unit testing with dependency injection.
type MockDB struct {
	users []User
	buoys []Buoy
}

// BUOYS
func (mdb *MockDB) GetAllBuoys() ([]Buoy, error) {
	return mdb.buoys, nil
}

func (mdb *MockDB) CreateBuoy(buoy *Buoy) (int64, error) {
	return -1, nil
}

func (mdb *MockDB) GetBuoyById(id int) (*Buoy, error) {
	return &Buoy{}, nil
}

func (mdb *MockDB) UpdateBuoy(buoy *Buoy) error {
	return nil
}

func (mdb *MockDB) ArchiveBuoyWithId(id int) error {
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

func (mdb *MockDB) GetBuoyCommands(guid string, sent bool) ([]Command, error) {
	return nil, nil
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

func (mdb *MockDB) GetWarningTriggersForBuoyInstance(id int) ([]WarningTrigger, error) {
	return nil, nil
}

func (mdb *MockDB) GetMostRecentReadingsForActiveBuoyInstances() ([]DbMapReading, error) {
	return nil, nil
}

func (mdb *MockDB) GetWarningTriggersForActiveBuoyInstances() ([]WarningTrigger, error) {
	return nil, nil
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

func (mdb *MockDB) ArchiveBuoyGroupWithId(id int) error {
	return nil
}

// READINGS

func (db *MockDB) GetAllReadings(start time.Time, end time.Time) (*MapReadingBuoyGroupsWrapper, error) {
	return &MapReadingBuoyGroupsWrapper{}, nil
}

func (mdb *MockDB) CreateReading(reading *Reading) (int64, error) {
	return -1, nil
}

func (mdb *MockDB) CreateSensorReading(sensorReading *SensorReading) error {
	return nil
}

func (mdb *MockDB) GetReadingsIn(readingsIds []int) ([][]string, error) {
	return nil, nil
}

// SENSOR TYPES
func (mdb *MockDB) GetSensorTypeWithId(id int) (*SensorType, error) {
	return nil, nil
}

func (mdb *MockDB) GetSensorTypeWithName(name string) (*SensorType, error) {
	return &SensorType{}, nil
}

func (mdb *MockDB) GetAllSensorTypes() ([]SensorType, error) {
	return nil, nil
}

func (mdb *MockDB) CreateSensorType(sensorType *SensorType) error {
	return nil
}

func (mdb *MockDB) UpdateSensorType(updatedSensorType *SensorType) error {
	return nil
}

func (mdb *MockDB) ArchiveSensorTypeWithId(id int) error {
	return nil
}

// BUOY INSTANCE SENSORS
func (mdb *MockDB) UpdateBuoyInstanceSensorDisabledStatus(buoyInstanceId int, sensorTypeId int, status bool) error {
	return nil
}

// COMMAND TYPES
func (mdb *MockDB) GetAllCommandTypes() ([]CommandType, error) {
	return nil, nil
}

// COMMANDS
func (mdb *MockDB) GetCommandWithId(id int) (*Command, error) {
	return nil, nil
}

func (mdb *MockDB) GetAllCommands() ([]Command, error) {
	return nil, nil
}

func (mdb *MockDB) GetAllCommandsWithSent(sent bool) ([]Command, error) {
	return nil, nil
}

func (mdb *MockDB) UpdateCommand(updatedCommand *Command) error {
	return nil
}

func (mdb *MockDB) UpdateCommandSentStatus(id int, sent bool, sentAt mysql.NullTime) error {
	return nil
}

func (mdb *MockDB) DeleteCommandWithId(id int) error {
	return nil
}

// USERS
func (mdb *MockDB) GetUserWithEmail(email string) (*User, error) {
	return nil, nil
}

func (mdb *MockDB) GetPasswordHash(email string) ([]byte, error) {
	return []byte(""), nil
}

func (mdb *MockDB) CreateUser(user *User) error {
	return nil
}

func (mdb *MockDB) UpdateUserExcludePassword(updatedUser *User) error {
	return nil
}

func (mdb *MockDB) UpdateUserPassword(user *NewUserPassword) error {
	return nil
}

func (mdb *MockDB) GetAllUsers() ([]User, error) {
	return nil, nil
}

func (mdb *MockDB) GetUser(id int) (*User, error) {
	return nil, nil
}

func (mdb *MockDB) DeleteUserWithId(id int) error {
	return nil
}

// WARNING TRIGGERS
func (mdb *MockDB) GetAllWarningTriggers() ([]WarningTrigger, error) {
	return nil, nil
}

func (mdb *MockDB) CreateWarningTrigger(warningTrigger *WarningTrigger) error {
	return nil
}

func (mdb *MockDB) UpdateWarningTrigger(updatedWarningTrigger *WarningTrigger) error {
	return nil
}

func (mdb *MockDB) DeleteWarningTriggerWithId(id int) error {
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

func (mdb *MockDB) SendPasswordResetEmail(user *User, link string, emailUser *EmailCredentials) error {
	return nil
}
