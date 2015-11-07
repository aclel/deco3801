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

import "github.com/aclel/deco3801/server/logger"

// Represents app context.
// Provides a means to safely pass around context variables,
// such as the database.
type Env struct {
	DB         Repository
	EmailUser  EmailCredentials
	LogServer  logger.Server
	BuoyLogger Logger
}

// Every model that's added needs to have a Repository interface
// added here as well. Contains all methods which need data access.
// All methods need to be implemented. The database can be mocked out
// by implementing all methods.
type Repository interface {
	BuoyRepository
	BuoyInstanceRepository
	BuoyInstanceSensorRepository
	BuoyGroupRepository
	ReadingRepository
	SensorTypeRepository
	CommandTypeRepository
	CommandRepository
	WarningTriggerRepository
	UserRepository
	AuthRepository
	SmtpManager
}
