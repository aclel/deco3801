package models

type WarningTrigger struct {
	Id             int     `json:"id" db:"id"`
	Value          float64 `json:"value" db:"value"`
	Operator       string  `json:"operator" db:"operator"`
	Message        string  `json:"message" db:"message"`
	BuoyInstanceId int     `json:"buoyInstanceId" db:"buoy_instance_id"`
	SensorTypeId   int     `json:"sensorTypeId" db:"sensor_type_id"`
}

type WarningTriggerRepository interface {
	CreateWarningTrigger(*WarningTrigger) error
	DeleteWarningTriggerWithId(int) error
	UpdateWarningTrigger(*WarningTrigger) error
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

// Updates the old warning trigger record with the new one
func (db *DB) UpdateWarningTrigger(updatedWarningTrigger *WarningTrigger) error {
	stmt, err := db.Preparex(`UPDATE warning_trigger SET value=?, operator=?,
		message=?, buoy_instance_id=?, sensor_type_id=? WHERE id=?;`)
	if err != nil {
		return err
	}

	_, err = stmt.Exec(updatedWarningTrigger.Value, updatedWarningTrigger.Operator,
		updatedWarningTrigger.Message, updatedWarningTrigger.BuoyInstanceId,
		updatedWarningTrigger.SensorTypeId, updatedWarningTrigger.Id)
	if err != nil {
		return err
	}

	return nil
}

// Delete Warning Trigger from the database with the given id.
func (db *DB) DeleteWarningTriggerWithId(id int) error {
	stmt, err := db.Preparex("DELETE FROM warning_trigger WHERE id=?")
	if err != nil {
		return err
	}

	_, err = stmt.Exec(id)
	if err != nil {
		return err
	}

	return nil
}
