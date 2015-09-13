package models

type Warning struct {
	ReadingValue   float64        `json:"readingValue"`
	WarningTrigger WarningTrigger `json:"warningTrigger"`
}
