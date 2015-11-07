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

// Create new client. Sets up a channel `ch` which Messages can be written to,
// and another `doneCh` which allows the client to tell the server that the connection
// can be closed.
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

// Get the Client's websocket
func (c *Client) Conn() *websocket.Conn {
	return c.ws
}

// Write a message to the Client's channel
func (c *Client) Write(msg *Message) {
	select {
	case c.ch <- msg:
	default:
		c.server.Del(c)
	}
}

// Listen Write request via channel
func (c *Client) Listen() {
	c.listenWrite()
}

// Listen for write requests that the Server sends to the Client.
func (c *Client) listenWrite() {
	for {
		select {

		// Send message to the client
		case msg := <-c.ch:
			websocket.JSON.Send(c.ws, msg)

		// Receive done request. Delete the client from the server.
		case <-c.doneCh:
			c.server.Del(c)
			return
		}
	}
}
