package models

type Warning struct {
	WarningLevel   float64        `json:"warningLevel"`
	WarningTrigger WarningTrigger `json:"warningTrigger"`
}
