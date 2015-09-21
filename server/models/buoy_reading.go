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

// These structs are needed to store the JSON from POST /api/readings.
// POST /api/readings is the route that the buoy sends its reading data to.
// The data from these structs is then used to build a Readings object
// for each individual sensor reading. Below is an example of the
// incoming JSON:
//{
//	"guid":"e7ed6c08-d969-4907-b855-bb04ce32c28a",
//	"readings": [
//		{
//	    	"latitude": -27.425676,
//	    	"longitude": 153.147055,
//	    	"sensorReadings": [
//				{
//	        		"sensorName": "Turbidity",
//	        		"value": 40
//	    		}
//			],
//	    	"timestamp": 1442115887,
//	    	"messageNumber": 1
//		}
//	]
//}

// Encapsulates the readings in the incoming /api/readings/
// POST request. Every reading will have the same buoy guid
// so there's no point in repeating it.
type BuoyReadingContainer struct {
	BuoyGuid string      `json:"guid"`
	Readings *[]*Reading `json:"readings"`
}

// Stores the data for multiple sensor readings.
// Each sensor reading within a buoy reading has the same latitude
// and longitude and timestamp, so there's no point in repeating it.
/*
type BuoyReading struct {
	Latitude       float64             `json:"latitude"`
	Longitude      float64             `json:"longitude"`
	SensorReadings []BuoySensorReading `json:"sensorReadings"`
	Timestamp      int64               `json:"timestamp"`
	MessageNumber  int                 `json:"messageNumber"`
}

// Stores the name of a sensor and the value associated with
// a particular reading for that sensor.
type BuoySensorReading struct {
	SensorName string  `json:"sensorName"`
	Value      float64 `json:"value"`
}
*/
