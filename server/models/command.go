package models

type Command struct {
	Id            int     `json:"id" db:"id"`
	BuoyId        int     `json:"buoyId" db:"buoy_id"`
	CommandTypeId int     `json:"commandTypeId" db:"command_type_id"`
	Value         float64 `json:"value" db:"value"`
	Sent          bool    `json:"sent" db:"sent"`
}
