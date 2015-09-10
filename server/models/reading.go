package models


// Represents a reading for one sensor from a particular buoy instance.
type Reading struct {
	Id             int
	Latitude       float64
	Longitude      float64
	Value          float64
	Timestamp      string
	BuoyGuid       string
	SensorTypeId   int
	BuoyInstanceId int
	SensorTypeName string
	MessageNumber  int
}



type SensorTypeObject struct {
	Id 			int 						`json:"id"`
	Name 		string 						`json:"name"`
}


type ReadingObject struct {
	Id 			int 						`json:"id"`
	Value 		int 						`json:"value"`
	SensorType 	SensorTypeObject 			`json:"sensor_type"`
}

type BuoyInstanceObject struct {
	Id			int							`json:"id" db:"id"`
	BuoyId		int 						`json:"buoy_id" db:"buoy_id"`
	Readings	[]ReadingObject				`json:"readings"`
}

type BuoyGroupObject struct {
	Id				int 					`db:"id" json:"id"`
	Name			string 					`db:"name" json:"name"`
	BuoyInstances	[]BuoyInstanceObject	`json:"buoy_instance"`
}

type BuoyGroupsWrapper struct {
	BuoyGroups		[]BuoyGroupObject 		`json:"value"`
}


type ReadingRepository interface {
	CreateReading(*Reading) error
	GetAllReadings() (*BuoyGroupsWrapper, error)
}

// Insert a new Reading into the database
func (db *DB) CreateReading(reading *Reading) error {
	stmt, err := db.Preparex(`INSERT INTO reading (sensor_type_id, buoy_instance_id, value, 
		latitude, longitude, timestamp) VALUES(?, ?, ?, ?, ?, ?);`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(reading.SensorTypeId, reading.BuoyInstanceId,
		reading.Value, reading.Latitude, reading.Longitude, reading.Timestamp)
	if err != nil {
		return err
	}

	return nil
}

// Returns all the readings from the database
func (db *DB) GetAllReadings() (*BuoyGroupsWrapper, error) {


	newWrapper := new(BuoyGroupsWrapper)
	err := db.Select(&newWrapper.BuoyGroups, "SELECT * FROM buoy_group;");
	if err != nil {
		return nil, err
	}

	// For each Buoy Group in newWrapper.BuoyGroupObject this loop will
	// populate it's BuoyInstanceObject member with buoy instances
	for i, thisBuoyGroup := range newWrapper.BuoyGroups {

		err := db.Select(&thisBuoyGroup.BuoyInstances, 
			"SELECT id, buoy_id FROM buoy_instance WHERE buoy_group_id=?;", thisBuoyGroup.Id)
		if err != nil {
			return nil, err
		}
		// For each BuoyIntanceObject populate it with it's readings
		for j, thisBuoyInstance := range thisBuoyGroup.BuoyInstances {
			err = db.Select(&thisBuoyInstance.Readings, 
			"SELECT id, value FROM reading WHERE buoy_instance_id=?;", thisBuoyInstance.Id)
			if err != nil {
				return nil, err
			}
			// Populate each reading with its sensor information
			for k, thisReading := range thisBuoyInstance.Readings {
				err = db.Get(&thisReading.SensorType, 
				"SELECT id, name FROM sensor_type WHERE id=(SELECT sensor_type_id FROM reading WHERE id=?);", thisReading.Id)
				if err != nil {
					return nil, err
				}

				thisBuoyInstance.Readings[k] = thisReading
			}

			thisBuoyGroup.BuoyInstances[j] = thisBuoyInstance
		}

		newWrapper.BuoyGroups[i] = thisBuoyGroup

	}

	return newWrapper, nil


	/*
	readings := []byte(`
			[{
				"id": 1,
				"buoy": 1,
				"timestamp": 1438933614,
				"latitude": -27.44613423,
				"longitude": 153.07834625,
				"readings": {
					"battery": 90,
					"pressure": 140,
					"sealevel": 21,
					"turbidity": 14
				}
			}, {
				"id": 2, 
				"buoy": 2,
				"timestamp": 1438588117,
				"latitude": -27.42693772,
				"longitude": 153.20674896,
				"readings": {
					"battery": 70,
					"pressure": 122,
					"sealevel": 44,
					"turbidity": 4
				}
			}, {
				"id": 3, 
				"buoy": 2,
				"timestamp": 1438760876,
				"latitude": -27.491475, 
				"longitude": 153.006655,
				"readings": {
					"battery": 45,
					"pressure": 85,
					"sealevel": 15,
					"turbidity": 45
				}
			}, {
				"id": 4, 
				"buoy": 4,
				"timestamp": 1438847291,
				"latitude": -27.400357, 
				"longitude": 153.177995,
				"readings": {
					"battery": 75,
					"pressure": 97,
					"sealevel": 33,
					"turbidity": 66
				}
			}, {
				"id": 77, 
				"buoy": 1,
				"timestamp": 1438328839,
				"latitude": -27.44713423,
				"longitude": 153.09234625,
				"readings": {
					"battery": 83,
					"pressure": 118,
					"sealevel": 24.5,
					"turbidity": 8
				}
			}, {
				"id": 5,
				"buoy": 5,
				"timestamp": 1438933614,
				"latitude": -27.457610,
				"longitude": 153.052099,
				"readings": {
					"battery": 45,
					"pressure": 130,
					"sealevel": 24,
					"turbidity": 20
				}
			}, {
				"id": 6, 
				"buoy": 5,
				"timestamp": 1438588117,
				"latitude": -27.455775,
				"longitude": 153.051804,
				"readings": {
					"battery": 75,
					"pressure": 121,
					"sealevel": 30,
					"turbidity": 50
				}
			}, {
				"id": 7, 
				"buoy": 5,
				"timestamp": 1438760876,
				"latitude": -27.454331, 
				"longitude": 153.051547,
				"readings": {
					"battery": 45,
					"pressure": 85,
					"sealevel": 15,
					"turbidity": 45
				}
			}, {
				"id": 8, 
				"buoy": 5,
				"timestamp": 1438847291,
				"latitude": -27.453493, 
				"longitude": 153.051472,
				"readings": {
					"battery": 30,
					"pressure": 100,
					"sealevel": 45,
					"turbidity": 70
				}
			}, {
				"id": 9, 
				"buoy": 5,
				"timestamp": 1438328839,
				"latitude": -27.452712,
				"longitude": 153.051161,
				"readings": {
					"battery": 82,
					"pressure": 110,
					"sealevel": 36.5,
					"turbidity": 18
				}
			}]`)

	return readings, nil
	*/
}
