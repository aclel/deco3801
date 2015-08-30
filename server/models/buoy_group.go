package models

type BuoyGroup struct {
	Id   int32
	Name string
}

type BuoyGroupReadings struct {
}

type BuoyGroupRepository interface {
	GetAllBuoyGroups() ([]BuoyGroup, error)
}

func (db *DB) GetAllBuoyGroups() ([]BuoyGroup, error) {
	return nil, nil
}

func (db *DB) GetAllBuoyGroupReadings() ([]BuoyGroup, error) {
	return nil, nil
}
