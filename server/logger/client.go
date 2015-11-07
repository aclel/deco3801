package logger

import (
	"log"

	"golang.org/x/net/websocket"
)

const channelBufSize = 100

var maxId int = 0

// Logger client
type Client struct {
	id     int
	ws     *websocket.Conn
	server *Server
	ch     chan *Message
	doneCh chan bool
}

// Create new client
func NewClient(ws *websocket.Conn, server *Server) *Client {
	if ws == nil {
		log.Println("ws cannot be nil")
	}

	if server == nil {
		log.Println("server cannot be nil")
	}

	maxId++
	ch := make(chan *Message, channelBufSize)
	doneCh := make(chan bool)

	return &Client{maxId, ws, server, ch, doneCh}
}

func (c *Client) Conn() *websocket.Conn {
	return c.ws
}

func (c *Client) Write(msg *Message) {
	select {
	case c.ch <- msg:
	default:
		c.server.Del(c)
	}
}

func (c *Client) Done() {
	c.doneCh <- true
}

// Listen Write request via channel
func (c *Client) Listen() {
	c.listenWrite()
}

// Listen write request via channel
func (c *Client) listenWrite() {
	for {
		select {

		// send message to the client
		case msg := <-c.ch:
			websocket.JSON.Send(c.ws, msg)

		// receive done request
		case <-c.doneCh:
			c.server.Del(c)
			c.doneCh <- true // for listenRead method
			return
		}
	}
}
