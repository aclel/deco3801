package models

import (
	"fmt"
	"net/http"

	"github.com/aclel/deco3801/server/logger"
)

type Logger interface {
	Log(string)
	LogError(string, int)
}

type BuoyLogger struct {
	LogServer *logger.Server
}

func (l BuoyLogger) Log(str string) {
	fmt.Println(str)
	l.LogServer.SendAll(&logger.Message{Body: str})
}

func (l BuoyLogger) LogError(w http.ResponseWriter, str string, code int) {
	l.Log(str)
	http.Error(w, str, code)
}
