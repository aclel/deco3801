package models

type SensorType struct {
	Id          int    `json:"id" db:"id"`
	Description string `json:"description" db:"description"`
	Unit        string `json:"unit" db:"unit"`
	Name        string `json:"name" db:"name"`
}

type SensorTypeRepository interface {
	GetSensorTypeWithName(string) (*SensorType, error)
}

// Get the sensor type from the database with the given unique name
func (db *DB) GetSensorTypeWithName(name string) (*SensorType, error) {
	dbSensorType := SensorType{}
	err := db.Get(&dbSensorType, "SELECT * FROM sensor_type WHERE name=?;", name)

	if err != nil {
		return nil, err
	}

	return &dbSensorType, nil
}
