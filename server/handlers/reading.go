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
	"archive/zip"
	"encoding/csv"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"math"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/aclel/deco3801/server/models"
	"github.com/go-sql-driver/mysql"
)

// GET /api/readings
// Get all readings between the start time and end time that must be present in the
// request url. Responds with HTTP 200. All readings between start time and end time
// are present in the response body.
func ReadingsIndex(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	// Parse query parameters
	u, err := url.Parse(r.URL.String())
	params, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return &AppError{err, "Error parsing query parameters", http.StatusInternalServerError}
	}

	// Get start time from query params
	unixStart, err := strconv.ParseInt(params["start_time"][0], 10, 64)
	if err != nil {
		return &AppError{err, "Error parsing start time", http.StatusInternalServerError}
	}

	// Get end time from query params
	unixEnd, err := strconv.ParseInt(params["end_time"][0], 10, 64)
	if err != nil {
		return &AppError{err, "Error parsing end time", http.StatusInternalServerError}
	}

	startTime := time.Unix(unixStart, 0).UTC()
	endTime := time.Unix(unixEnd, 0).UTC()

	if unixEnd < unixStart {
		return &AppError{errors.New("End time before start time"), "End time before start time", http.StatusInternalServerError}
	}

	// Get all readings from the database between the start time and the end time
	readings, err := env.DB.GetAllReadings(startTime, endTime)
	if err != nil {
		return &AppError{err, "Error retrieving readings", http.StatusInternalServerError}
	}

	response, err := json.Marshal(readings)
	if err != nil {
		return &AppError{err, "Error marshalling readings json", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)

	return nil
}

// POST /api/readings
// Accepts an array of readings from a particular buoy. See buoy_reading.go for an example
// of the incoming JSON. Stores each sensor reading in the database.
// Example request body:
//
// {
//     "guid": "e9528b5e-1d8f-4960-91ae-8b21ecc0bcab",
//     "r": [
//         {
//             "lat": "4140.831527",
//             "lng": "-00053.173495",
//             "sR": [
//                 {
//                     "type": 1,
//                     "val": 100
//                 },
//                 {
//                     "type": 2,
//                     "val": 30
//                 }
//             ],
//             "ut": 1442115887,
//             "msgNo": 1
//         }
//     ]
// }
func ReadingsCreate(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsContainer := new(models.BuoyReadingContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsContainer)

	// Check if the request is valid
	if err != nil && err != io.EOF {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	var e *AppError
	// Constructs the Readings from the data
	readings, e := buildReadings(env, readingsContainer)

	// Insert each reading into db
	for _, reading := range *readings {
		id, err := env.DB.CreateReading(reading)
		if err != nil {
			e = &AppError{err, "Error inserting the reading into the database", http.StatusInternalServerError}
		}

		for _, sensorReading := range reading.SensorReadings {
			sensorReading.ReadingId = id
			err = env.DB.CreateSensorReading(sensorReading)
			if err != nil {
				e = &AppError{err, "Error inserting the sensor reading into the database", http.StatusInternalServerError}
			}
		}
	}

	// Respond with 201 Created if everything was successful
	if e == nil {
		w.WriteHeader(http.StatusCreated)
	}

	return e
}

// Same as ReadingsCreate except the readings aren't added to the database
// Readings sent to this route are still validated and missing buoy instance sensors
// are still created.
func ReadingsTest(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsContainer := new(models.BuoyReadingContainer)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsContainer)

	// Check if the request is valid
	if err != nil && err != io.EOF {
		return &AppError{err, "Invalid JSON", http.StatusBadRequest}
	}

	var e *AppError
	// Validate the readings and add missing buoy instance sensors
	_, e = buildReadings(env, readingsContainer)

	// Respond with 200 OK if everything was successful
	if e == nil {
		w.WriteHeader(http.StatusOK)
	}

	return e
}

// Constructs Readings from the JSON which was in the request body of a /buoys/api/readings POST request.
func buildReadings(env *models.Env, readingsContainer *models.BuoyReadingContainer) (*[]*models.Reading, *AppError) {
	// Get most recent buoy instance for buoy with guid
	buoyInstance, err := env.DB.GetActiveBuoyInstance(readingsContainer.BuoyGuid)
	if err != nil {
		return nil, &AppError{err, "Could not get the most recent buoy instance for a buoy with the specified guid", http.StatusBadRequest}
	}

	var validReadings []*models.Reading
	var e *AppError
	// Go through each reading in the request. Add metadata to readings (buoy instance id, timestamp)
	// Update sensor configuration for buoy instance.
	for _, reading := range *readingsContainer.Readings {
		reading.BuoyInstanceId = buoyInstance.Id
		reading.BuoyGuid = readingsContainer.BuoyGuid
		reading.Timestamp, err = parseDatetime(reading)
		if err != nil {
			e = &AppError{err, "Error parsing datetime", http.StatusInternalServerError}
			continue
		}

		// Parse latitude from DDmm.mmmm format
		reading.Latitude, err = parseLatitude(reading.LatitudeString)
		if err != nil {
			e = &AppError{err, "Error parsing latitude", http.StatusInternalServerError}
			continue
		}

		// Parse longitude from DDDmm.mmmm format
		reading.Longitude, err = parseLongitude(reading.LongitudeString)
		if err != nil {
			e = &AppError{err, "Error parsing latitude", http.StatusInternalServerError}
			continue
		}

		if e = validateReading(env, reading); e != nil {
			continue
		}
		validReadings = append(validReadings, reading)

		// Add new sensors, update last received
		updateBuoyInstanceSensorConfiguration(env, buoyInstance.Id, mysql.NullTime{reading.Timestamp, true}, &reading.SensorReadings)
	}

	return &validReadings, e
}

// Parses the date and time field in the reading
func parseDatetime(reading *models.Reading) (time.Time, error) {
	datetime := reading.Date + "T" + reading.Time
	parsed, err := time.Parse("020106T150405.999999", datetime)
	if err != nil {
		return time.Now(), err
	}

	return parsed, nil
}

// Parse the latitude from a string with format DDmm.mmmm.
// DD is the degrees and mm.mmmm is the minutes.
func parseLatitude(input string) (float64, error) {
	// Check if the decimal point is in the correct place depending
	// on if there's a sign or not
	if ((input[0] == '+' || input[0] == '-') && input[5] != '.') ||
		(input[0] != '+' && input[0] != '-' && input[4] != '.') {
		return 0, errors.New("Invalid indicator")
	}

	// pull the sign out from the front of the string if there is one
	var sign byte
	if input[0] == '+' || input[0] == '-' {
		sign = input[0]
		input = input[1:]
	}

	// convert degrees (DD) to an int
	x, err := strconv.Atoi(input[0:2])
	if err != nil {
		return 0, err
	}
	degrees := float64(x)

	// convert minutes (mm.mmmm) to float
	y, err := strconv.ParseFloat(input[2:], 64)
	if err != nil {
		return 0, err
	}
	minutes := float64(y)

	// add minutes to degrees
	degrees = degrees + minutes/60

	// convert to negative if there was a minus at the start of the string
	if sign == '-' {
		degrees *= -1.0
	}

	return degrees, nil
}

// Parse the longitude from a string with format DDDmm.mmmm.
// DDD is the degrees and mm.mmmm is the minutes.
func parseLongitude(input string) (float64, error) {
	// Check if the decimal point is in the correct place depending
	// on if there's a sign or not
	if ((input[0] == '+' || input[0] == '-') && input[6] != '.') ||
		(input[0] != '+' && input[0] != '-' && input[5] != '.') {
		return 0, errors.New("Invalid indicator")
	}

	// pull sign out from the front of the string if it's there
	var sign byte
	if input[0] == '+' || input[0] == '-' {
		sign = input[0]
		input = input[1:]
	}

	// convert the degrees (DDD) to an int
	x, err := strconv.Atoi(input[0:3])
	if err != nil {
		return 0, err
	}
	degrees := float64(x)

	// convert the minutes (mm.mmmm) to a float
	y, err := strconv.ParseFloat(input[3:], 64)
	if err != nil {
		return 0, err
	}
	minutes := float64(y)

	// add minutes to degrees
	degrees = degrees + minutes/60

	// convert to negative if there's a minus at the start of the string
	if sign == '-' {
		degrees *= -1.0
	}

	return degrees, nil
}

func round(num float64) int {
	return int(num + math.Copysign(0.5, num))
}

func toFixed(num float64, precision int) float64 {
	output := math.Pow(10, float64(precision))
	return float64(round(num*output)) / output
}

/*
func parseDegreesMinutes(input string, coordType string) (float64, error) {
	var degrees, minutes float64

	var signed bool
	if input[0] == '+' || input[1] == '-' {
		signed = true
	}

	temp := make([]byte, 20)

	// get degress from input string
	if signed {
		if input[5] == '.' {
			// latitude format: DDmm.mmmm
			temp[0] = input[1]
			temp[1] = input[2]
		}
		else {
			// longitude format: DDDmm.mmmm
			temp[0] = input[1]
			temp[1] = input[2]
			temp[2] = input[3]
		}
	} else {
		if input[4] == '.' {
			// latitude format: DDmm.mmmm
			temp[0] = input[0]
			temp[1] = input[1]
		} else {
			// longitude format: DDDmm.mmmm
			temp[0] = input[0]
			temp[1] = input[1]
			temp[2] = input[2]
		}
	}

	// pull out the number of bytes from the array that we need,
	// depending on if it's the latitude or longitude
	var conv []byte
	if coordType == "lat" {
		conv = temp[:2]
	} else {
		conv = temp[:3]
	}

	// convert string to integer and it to final float variable
	x, err := strconv.Atoi(string(conv))
	if err != nil {
		return 0, err
	}
	degrees = float64(x)

	// get 'minutes' from input string
	if input[5] == '.' {
		fmt.Println(input)
		// latitude format: DDmm.mmmm
		for i := 0; i < 9; i++ {
			temp[i] = input[i+3]
		}
	} else {
		// longitude format: DDDmm.mmmm
		for i := 0; i < 10; i++ {
			fmt.Println(i)
			temp[i] = input[i+4]
		}
	}

	// convert string to integer and add it to final float variable
	y, err := strconv.Atoi(string(temp))
	if err != nil {
		return 0, err
	}
	minutes = float64(y)

	// add minutes to degrees
	degrees = degrees + minutes/60

	// convert to negative if there's a minus at the start of the string
	if input[0] == '-' {
		degrees *= -1.0
	}

	return degrees, nil
}
*/

// Add new sensors and update the "last recorded" time of the other sensors with sensor readings.
func updateBuoyInstanceSensorConfiguration(env *models.Env, buoyInstanceId int, readingTimestamp mysql.NullTime, sensorReadings *[]*models.SensorReading) *AppError {
	dbSensors, err := env.DB.GetSensorsForBuoyInstance(buoyInstanceId)
	if err != nil {
		return &AppError{err, "Error retrieving sensors for buoy instance " + strconv.Itoa(buoyInstanceId), http.StatusInternalServerError}
	}

	// Add new sensors, update last received of all
	for _, sensorReading := range *sensorReadings {
		// Buoy instance doesn't have the sensor, add it
		if !sensorExists(sensorReading.SensorTypeId, dbSensors) {
			newSensor := models.BuoyInstanceSensor{
				BuoyInstanceId: buoyInstanceId,
				SensorTypeId:   sensorReading.SensorTypeId,
				LastRecorded:   readingTimestamp,
			}
			err = env.DB.AddSensorToBuoyInstance(&newSensor)
			if err != nil {
				return &AppError{err, "Error adding buoy instance sensor", http.StatusInternalServerError}
			}
		} else {
			// Update the last received time
			for _, sensor := range dbSensors {
				if sensor.SensorTypeId == sensorReading.SensorTypeId {
					sensor.LastRecorded = readingTimestamp
					err = env.DB.UpdateBuoyInstanceSensor(&sensor)
					if err != nil {
						return &AppError{err, "Error updating buoy instance sensor", http.StatusInternalServerError}
					}
					break
				}
			}
		}
	}

	return nil
}

// Check if a sensor exists in the given slice of sensors
func sensorExists(sensorTypeId int, sensors []models.BuoyInstanceSensor) bool {
	for _, sensor := range sensors {
		if sensor.SensorTypeId == sensorTypeId {
			return true
		}
	}
	return false
}

// Ensure the reading has a buoy guid and valid latitude and longitude.
func validateReading(env *models.Env, reading *models.Reading) *AppError {
	// Check if guid is present
	if reading.BuoyGuid == "" {
		return &AppError{errors.New("Reading error"), "No guid", http.StatusBadRequest}
	}

	// Check if latitute is valid
	if reading.Latitude < -90.0 || reading.Latitude > 90.0 {
		return &AppError{errors.New("Reading error "), "Invalid latitude", http.StatusBadRequest}
	}

	// Check if longitude is valid
	if reading.Longitude < -180.0 || reading.Longitude > 180 {
		return &AppError{errors.New("Reading error "), "Invalid longitude", http.StatusBadRequest}
	}

	if len(reading.SensorReadings) == 0 {
		return &AppError{errors.New("Reading error"), "No sensor readings", http.StatusBadRequest}
	}

	// Check if all the sensor readings have sensor types which exist in the db
	for _, sensorReading := range reading.SensorReadings {
		// Get sensor type for the reading
		_, err := env.DB.GetSensorTypeWithId(sensorReading.SensorTypeId)
		if err != nil {
			return &AppError{err, "Could not find a sensor type with the specified id: " + strconv.Itoa(sensorReading.SensorTypeId),
				http.StatusBadRequest}
		}
	}

	return nil
}

// Used to store the reading ids in an incoming POST /api/export request
type ReadingsIds struct {
	Ids []int `json:"readings"`
}

// POST /api/export
// Gets all Readings that have the ids specified in the request body
// Returns all Sensor Readings for the Readings.
// The Readings are written to a CSV file and sent in the response.
// Example request body:
//	{
//		"readings": [1,2,3,4,5,6]
//	}
func ReadingsExport(env *models.Env, w http.ResponseWriter, r *http.Request) *AppError {
	readingsIds := new(ReadingsIds)
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&readingsIds)

	readings, err := env.DB.GetReadingsIn(readingsIds.Ids)
	if err != nil {
		return &AppError{err, "Error retrieving readings", http.StatusInternalServerError}
	}

	w.Header().Set("Content-Type", "application/zip")
	w.Header().Set("Content-Disposition", "attachment;filename=\"export.zip\"")

	{
		zw := zip.NewWriter(w)

		// Get readings for each buoy instance
		files, err := buildCsvFiles(readings)
		if err != nil {
			return &AppError{err, "Error building data for csv files", http.StatusInternalServerError}
		}
		// Create zip file
		for _, file := range files {
			zipHeader := &zip.FileHeader{
				Name:         fmt.Sprintf("%s.csv", file.FileName),
				ModifiedTime: uint16(time.Now().UnixNano()),
				ModifiedDate: uint16(time.Now().UnixNano()),
			}

			fw, err := zw.CreateHeader(zipHeader)
			if err != nil {
				return &AppError{err, "Error creating zip header", http.StatusInternalServerError}
			}
			// Add csv to zip
			csvWriter := csv.NewWriter(fw)
			csvWriter.WriteAll(file.StringArray())
			if err := csvWriter.Error(); err != nil {
				return &AppError{err, "Error writing csv", http.StatusInternalServerError}
			}
		}

		if err := zw.Close(); err != nil {
			return &AppError{err, "Error writing zip", http.StatusInternalServerError}
		}
	}

	return nil
}

type CsvFile struct {
	BuoyInstanceId   int64
	BuoyInstanceName string
	FileName         string
	CsvRows          []CsvRow
	CsvRowsMap       map[int64]*CsvRow
}

func indexOf(i int64, slice []int64) int {
	for j, x := range slice {
		if x == i {
			return j
		}
	}
	return -1
}

// Get a [][]string representation of the csv object so that
// it can be written directly to the csv writer with WriteAll
func (f *CsvFile) StringArray() [][]string {
	// Create CSV header
	initialHeaderLength := 6
	csvHeader := []string{"Timestamp (UTC)", "Latitude", "Longitude", "Altitude (m)", "Course (Degrees)", "Speed OG (Knots)"}

	// Get all unique sensor types in the readings and add them to the csv header
	var sensorTypeIds []int64
	for _, r := range f.CsvRowsMap {
		for _, s := range r.SensorReadings {
			if indexOf(s.SensorTypeId, sensorTypeIds) == -1 {
				sensorTypeIds = append(sensorTypeIds, s.SensorTypeId)
				csvHeader = append(csvHeader, s.SensorTypeName+" ("+s.SensorTypeUnit+")")
			}
		}
	}

	var csvRows [][]string
	csvRows = append(csvRows, csvHeader)
	// Build a 2D string array - the first dimension is for the "rows" and the second dimension is for the "cells"
	for _, r := range f.CsvRowsMap {
		reading := r.Reading
		row := make([]string, initialHeaderLength+len(sensorTypeIds))
		row[0] = reading.Timestamp.UTC().String()
		row[1] = strconv.FormatFloat(reading.Latitude, 'f', -1, 64)
		row[2] = strconv.FormatFloat(reading.Longitude, 'f', -1, 64)
		row[3] = strconv.FormatFloat(float64(reading.Altitude), 'f', -1, 32)
		row[4] = strconv.FormatFloat(float64(reading.Course), 'f', -1, 32)
		row[5] = strconv.FormatFloat(float64(reading.SpeedOG), 'f', -1, 32)

		for _, s := range r.SensorReadings {
			// The index of the column where this cell needs to go
			headerIndex := initialHeaderLength + indexOf(s.SensorTypeId, sensorTypeIds)
			row[headerIndex] = strconv.FormatFloat(s.Value, 'f', -1, 64)
		}
		csvRows = append(csvRows, row)
	}

	return csvRows
}

type CsvRow struct {
	Reading        models.Reading
	SensorReadings []CsvSensorReading
}

type CsvSensorReading struct {
	Value          float64
	SensorTypeId   int64
	SensorTypeName string
	SensorTypeUnit string
}

// Build the objects that will eventually be written to the csv writer
func buildCsvFiles(readings []models.ExportedSensorReading) (map[int64]*CsvFile, error) {
	csvFiles := make(map[int64]*CsvFile)

	// For each sensor reading in the SQL result
	for _, reading := range readings {
		var csvFile *CsvFile
		var exists bool
		// If the Buoy Instance doesn't exist yet, create a new csv file for it
		if csvFile, exists = csvFiles[reading.BuoyInstanceId]; !exists {
			csvFile = &CsvFile{
				BuoyInstanceId:   reading.BuoyInstanceId,
				BuoyInstanceName: reading.BuoyInstanceName,
				FileName:         formattedCsvFileName(reading.BuoyInstanceName),
			}
			csvFile.CsvRowsMap = make(map[int64]*CsvRow)
			csvFiles[reading.BuoyInstanceId] = csvFile
		}

		var csvRow *CsvRow
		// If the row for the reading doesn't exist in the csv file yet, add it
		if csvRow, exists = csvFile.CsvRowsMap[reading.ReadingId]; !exists {
			readingRow := &models.Reading{
				Id:        reading.ReadingId,
				Latitude:  reading.Latitude,
				Longitude: reading.Longitude,
				Altitude:  reading.Altitude,
				SpeedOG:   reading.SpeedOG,
				Course:    reading.Course,
				Timestamp: reading.Timestamp,
			}
			csvRow = &CsvRow{Reading: *readingRow}
			csvFile.CsvRowsMap[reading.ReadingId] = csvRow
		}

		// Add the sensor reading to the csv row
		sensorReading := &CsvSensorReading{
			Value:          reading.Value,
			SensorTypeId:   reading.SensorTypeId,
			SensorTypeName: reading.SensorTypeName,
			SensorTypeUnit: reading.SensorTypeUnit,
		}
		csvRow.SensorReadings = append(csvRow.SensorReadings, *sensorReading)
	}

	return csvFiles, nil
}

func formattedCsvFileName(buoyInstanceName string) string {
	return "export_" + replaceCharsWithUnderscores(buoyInstanceName, "/\\?%*:|\"<> ")
}

// Replaces all characters in str that are present in chr with underscores
func replaceCharsWithUnderscores(str, chars string) string {
	return strings.Map(func(r rune) rune {
		if strings.IndexRune(chars, r) < 0 {
			return r
		}
		return '_'
	}, str)
}
