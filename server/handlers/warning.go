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
package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

// Wrap Warnings array for json response
type WarningWrapper struct {
	Warnings []models.Warning `json:"warnings"`
}

// GET /api/warnings
// Get all warnings. Warnings are retrieved by looking at all the most recent Readings
// for active Buoy Instances and checking if any of the Buoy Instance's Warning Triggers
// are satisfied. Responds with HTTP 200. All warnings and their warning triggers are returned
// as JSON in the response body.
func WarningsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	// Get the most recent reading for each active buoy instance
	recentReadings, err := env.DB.GetMostRecentReadingsForActiveBuoyInstances()
	if err != nil {
		return &AppError{err, "Error retrieving recent readings", http.StatusInternalServerError}
	}

	warningTriggers, err := env.DB.GetWarningTriggersForActiveBuoyInstances()
	if err != nil {
		return &AppError{err, "Error retrieving warning triggers", http.StatusInternalServerError}
	}

	// Get a warning for every Warning Trigger which is satisfied by the most recent Reading
	// for each Buoy Instance Sensor
	warnings := getWarnings(recentReadings, warningTriggers)

	response, err := json.Marshal(WarningWrapper{Warnings: warnings})
	if err != nil {
		return &AppError{err, "Error marshalling warnings json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// Get a warning for every Warning Trigger which is satisfied by the most recent Reading
// for each Buoy Instance Sensor.
func getWarnings(recentReadings []models.DbMapReading, warningTriggers []models.WarningTrigger) []models.Warning {
	warnings := []models.Warning{}
	for _, reading := range recentReadings {
		for _, warningTrigger := range warningTriggers {
			// Check if a warning trigger is applicable to a reading
			if reading.BuoyInstanceId == warningTrigger.BuoyInstanceId && reading.SensorTypeId == warningTrigger.SensorTypeId {
				if isWarningTriggerSatisfied(reading, warningTrigger) {
					warnings = append(warnings, models.Warning{
						ReadingValue:     reading.Value,
						ReadingTimestamp: reading.Timestamp.Unix(),
						WarningTrigger:   warningTrigger,
					})
				}
			}
		}
	}
	return warnings
}

// Check if a the Reading value satisfies the conditions for the Warning Trigger. Returns true
// if the Warning Trigger is satisfied.
func isWarningTriggerSatisfied(reading models.DbMapReading, warningTrigger models.WarningTrigger) bool {
	operator := warningTrigger.Operator
	switch operator {
	case ">":
		if reading.Value > warningTrigger.Value {
			return true
		}
	case "<":
		if reading.Value < warningTrigger.Value {
			return true
		}
	}
	return false
}
