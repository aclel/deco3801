package models

type MockDB struct {
	users []User
	buoys []Buoy
}

// BUOYS
func (mdb *MockDB) GetAllBuoys() ([]Buoy, error) {
	return mdb.buoys, nil
}

func (mdb *MockDB) CreateBuoy(buoy *Buoy) error {
	return nil
}

func (mdb *MockDB) GetBuoyById(id int) (*Buoy, error) {
	return &Buoy{}, nil
}

func (mdb *MockDB) UpdateBuoy(buoy *Buoy) error {
	return nil
}

func (mdb *MockDB) DeleteBuoyWithId(id int) error {
	return nil
}

func (mdb *MockDB) GetBuoysForBuoyGroup(id int) ([]Buoy, error) {
	return nil, nil
}

func (mdb *MockDB) GetMostRecentBuoyInstance(guid string) (*BuoyInstance, error) {
	return &BuoyInstance{}, nil
}

// BUOY GROUPS
func (mdb *MockDB) GetAllBuoyGroups() ([]BuoyGroup, error) {
	return nil, nil
}

func (mdb *MockDB) GetBuoyGroupById(id int) (*BuoyGroup, error) {
	return nil, nil
}

func (mdb *MockDB) CreateBuoyGroup(buoyGroup *BuoyGroup) error {
	return nil
}

func (mdb *MockDB) UpdateBuoyGroup(buoyGroup *BuoyGroup) error {
	return nil
}

func (mdb *MockDB) DeleteBuoyGroupWithId(id int) error {
	return nil
}

// READINGS
func (mdb *MockDB) GetAllReadings() ([]byte, error) {
	return []byte(""), nil
}

func (mdb *MockDB) CreateReading(reading *Reading) error {
	return nil
}

// SENSOR TYPES
func (mdb *MockDB) GetSensorTypeWithName(name string) (*SensorType, error) {
	return &SensorType{}, nil
}

// USERS
func (mdb *MockDB) GetUserWithEmail(email string) (*User, error) {
	return nil, nil
}

func (mdb *MockDB) CreateUser(user *User) error {
	return nil
}

// AUTH
func (mdb *MockDB) Login(user *User) ([]byte, error) {
	//shortened token, only checking for non-empty
	return []byte(`{"token": "eyJhbGciOiJSUzI..."}`), nil
}

func (mdb *MockDB) RefreshToken(user *User) ([]byte, error) {
	return []byte(""), nil
}

func (mdb *MockDB) SendNewUserEmail(user *User, emailUser *EmailCredentials) error {
	return nil
}
