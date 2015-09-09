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

// Represents app context.
// Provides a means to safely pass around context variables,
// such as the database.
type Env struct {
	DB        Repository
	EmailUser EmailCredentials
}

// Implements the same methods as DB struct.
// Every model that's added needs to have a Manager interface
// added here as well
type Repository interface {
	BuoyRepository
	BuoyInstanceRepository
	BuoyGroupRepository
	ReadingRepository
	SensorTypeRepository
	UserRepository
	AuthRepository
	SmtpManager
}
