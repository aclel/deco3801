package models

import (
	"fmt"
	"net/http"

	"github.com/aclel/deco3801/server/logger"
)

type Logger interface {
	Log(string)
	LogError(http.ResponseWriter, string, int)
}

type BuoyLogger struct {
	LogServer *logger.Server
}

// Log to stdout and also send a message to all active clients
// that are currently connected to the BuoyLogger websocker
func (l BuoyLogger) Log(str string) {
	fmt.Println(str)
	l.LogServer.SendAll(&logger.Message{Body: str})
}

// Log to stdout and websocket. Also throw an http error
func (l BuoyLogger) LogError(w http.ResponseWriter, str string, code int) {
	l.Log(str)
	http.Error(w, str, code)
}

// Mock logger used for testing which does not write to the web socket
type MockLogger struct {
	LogServer *logger.Server
}

func (m MockLogger) Log(str string) {
	fmt.Println(str)
}

func (m MockLogger) LogError(w http.ResponseWriter, str string, code int) {
	fmt.Println(str)
	http.Error(w, str, code)
}
