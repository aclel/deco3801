package models

type MockDB struct {
	users []User
	buoys []Buoy
}

func (mdb *MockDB) GetAllBuoys() ([]Buoy, error) {
	return mdb.buoys, nil
}

func (mdb *MockDB) GetMostRecentBuoyInstance(guid string) (*BuoyInstance, error) {
	return &BuoyInstance{}, nil
}

func (mdb *MockDB) GetAllReadings() ([]byte, error) {
	return []byte(""), nil
}

func (mdb *MockDB) CreateReading(reading *Reading) error {
	return nil
}

func (mdb *MockDB) GetSensorTypeWithName(name string) (*SensorType, error) {
	return &SensorType{}, nil
}

func (mdb *MockDB) GetUserWithEmail(email string) (*User, error) {
	return &User{}, nil
}

func (mdb *MockDB) CreateUser(user *User) error {
	return nil
}

func (mdb *MockDB) Login(user *User) (int, []byte) {
	//shortened token, only checking for non-empty
	return 200, []byte(`{"token": "eyJhbGciOiJSUzI..."}`)
}

func (mdb *MockDB) RefreshToken(user *User) []byte {
	return []byte("")
}
