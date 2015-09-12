package models

type BuoyInstanceSensor struct {
	Id           int `json:"id" db:"id"`
	SensorTypeId int `json:"sensorTypeId" db:"sensor_type_id"`
}
