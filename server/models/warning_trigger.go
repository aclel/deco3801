package models

type WarningTrigger struct {
	Id             int     `json:"id" db:"id"`
	Value          float32 `json:"value" db:"value"`
	Operator       string  `json:"operator" db:"operator"`
	Message        string  `json:"message" db:"message"`
	BuoyInstanceId int     `json:"buoyInstanceId" db:"buoy_instance_id"`
	SensorTypeId   int     `json:"sensorTypeId" db:"sensor_type_id"`
}

type WarningTriggerRepository interface {
	CreateWarningTrigger(*WarningTrigger) error
}

// Insert a new WarningTrigger into the database
func (db *DB) CreateWarningTrigger(warningTrigger *WarningTrigger) error {
	stmt, err := db.Preparex(`INSERT INTO warning_trigger (value, operator, message, buoy_instance_id, sensor_type_id) 
							 	VALUES(?, ?, ?, ?, ?);`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(warningTrigger.Value, warningTrigger.Operator,
		warningTrigger.Message, warningTrigger.BuoyInstanceId, warningTrigger.SensorTypeId)
	if err != nil {
		return err
	}

	return nil
}
