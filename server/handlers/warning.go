package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/aclel/deco3801/server/models"
)

type WarningWrapper struct {
	Warnings []models.Warning `json:"warnings"`
}

// GET /api/warnings
// Get all warnings. Warnings are retrieved by looking at all the most recent Readings
// for active Buoy Instances and checking if any of the Buoy Instance's Warning Triggers
// are satisfied. Responds with HTTP 200. All warnings their warning triggers are returned
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

	// Set return status and write to response body.
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	response, _ := json.Marshal(WarningWrapper{Warnings: warnings})
	w.Write(response)

	return nil
}

// Get a warning for every Warning Trigger which is satisfied by the most recent Reading
// for each Buoy Instance Sensor
func getWarnings(recentReadings []models.Reading, warningTriggers []models.WarningTrigger) []models.Warning {
	warnings := []models.Warning{}
	for _, reading := range recentReadings {
		for _, warningTrigger := range warningTriggers {
			if reading.BuoyInstanceId == warningTrigger.BuoyInstanceId && reading.SensorTypeId == warningTrigger.SensorTypeId {
				if isWarningTriggerSatisfied(reading, warningTrigger) {
					warnings = append(warnings, models.Warning{ReadingValue: reading.Value, WarningTrigger: warningTrigger})
				}
			}
		}
	}
	return warnings
}

func isWarningTriggerSatisfied(reading models.Reading, warningTrigger models.WarningTrigger) bool {
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
