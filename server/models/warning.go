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

// A Warning is created if there is a reading which satisfies
// the conditions of a warning trigger. Warnings are not stored
// in the database. They are generated when GET /api/warnings
// is requested.
type Warning struct {
	ReadingValue   float64        `json:"readingValue"`
	ReadingTimestamp int64 				`json:"readingTimestamp"`
	WarningTrigger WarningTrigger `json:"warningTrigger"`
}
