package models

type BuoyInstance struct {
	Id          int `json:"id" db:"id"`
	BuoyId      int `json:"buoyId" db:"buoy_id"`
	BuoyGroupId int `json:"buoyGroupId" db:"buoy_group_id"`
}

type BuoyInstanceRepository interface {
	GetMostRecentBuoyInstance(string) (*BuoyInstance, error)
}

// Get the most recent buoy instance for the buoy with the given guid
func (db *DB) GetMostRecentBuoyInstance(buoyGuid string) (*BuoyInstance, error) {
	dbBuoyInstance := BuoyInstance{}
	err := db.Get(&dbBuoyInstance, `SELECT * from buoy_instance 
		INNER JOIN buoy on buoy_instance.buoy_id = buoy.id WHERE buoy.guid=? 
		ORDER BY date_created DESC LIMIT 1;`, buoyGuid)

	if err != nil {
		return nil, err
	}

	return &dbBuoyInstance, nil
}
