package models

type MockDB struct {
	users []User
	buoys []Buoy
}

func (mdb *MockDB) GetAllBuoys() ([]Buoy, error) {
	return mdb.buoys, nil
}

func (mdb *MockDB) GetAllReadings() ([]byte, error) {
	return []byte(""), nil
}

func (mdb *MockDB) GetUserWithEmail(email string) (*User, error) {
	return &User{}, nil
}

func (mdb *MockDB) CreateUser(user *User) error {
	return nil
}

func (mdb *MockDB) Login(user *User) (int, []byte) {
	return 200, []byte("")
}

func (mdb *MockDB) RefreshToken(user *User) []byte {
	return []byte("")
}
