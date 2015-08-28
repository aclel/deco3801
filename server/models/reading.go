package models

type ReadingManager interface {
	GetAllReadings() ([]byte, error)
}

func (db *DB) GetAllReadings() ([]byte, error) {
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
}
