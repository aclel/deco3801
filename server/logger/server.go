package logger

import (
	"log"

	"golang.org/x/net/websocket"
)

// A Server which multiple clients can connect to and receive a broadcasted message.
// All interaction with the Server is done through channels to allow for concurrent execution.
// Channels allow goroutines to synchronize without the need for explicit locks or conditional variables.
//
// messages is an array of previous Messages.
// clients is an array of all clients which are currently connected to a websocket.
// addCh is a channel which allows clients to be added to the server.
// delCh is a channel which allows clients to be deleted from the server.
// sendAllCh is a channel which allows a message to be broadcasted to all clients
// doneCh is a channel which allows the Server to be told to stop.
// errCh is a channel which errors can be sent to for logging
type Server struct {
	messages  []*Message
	clients   map[int]*Client
	addCh     chan *Client
	delCh     chan *Client
	sendAllCh chan *Message
	doneCh    chan bool
	errCh     chan error
}

// Setup a new server
func NewServer() *Server {
	messages := []*Message{}
	clients := make(map[int]*Client)
	addCh := make(chan *Client)
	delCh := make(chan *Client)
	sendAllCh := make(chan *Message)
	doneCh := make(chan bool)
	errCh := make(chan error)

	return &Server{
		messages,
		clients,
		addCh,
		delCh,
		sendAllCh,
		doneCh,
		errCh,
	}
}

// Add a client to the server.
func (s *Server) Add(c *Client) {
	s.addCh <- c
}

// Delete a client from the server.
func (s *Server) Del(c *Client) {
	s.delCh <- c
}

// Send a message to all clients which are currently connected to the server.
func (s *Server) SendAll(msg *Message) {
	s.sendAllCh <- msg
}

// Stop the Server.
func (s *Server) Done() {
	s.doneCh <- true
}

// Send an error to the server for logging.
func (s *Server) Err(err error) {
	s.errCh <- err
}

// Send all currently stored messages to the client.
func (s *Server) sendPastMessages(c *Client) {
	for _, msg := range s.messages {
		c.Write(msg)
	}
}

// Send a message to clients which are currently connected to the server
// If there are 20 messages stored then just kept the last 10 and get rid of the rest.
func (s *Server) sendAll(msg *Message) {
	s.messages = append(s.messages, msg)
	if len(s.messages) == 20 {
		s.messages = s.messages[9:]
	}
	for _, c := range s.clients {
		c.Write(msg)
	}
}

// HTTP handler which allows sets up a websocket for a new client
func (s *Server) Handler(ws *websocket.Conn) {
	defer func() {
		err := ws.Close()
		if err != nil {
			s.errCh <- err
		}
	}()

	client := NewClient(ws, s)
	s.Add(client)
	client.Listen()
}

// Starts the server
func (s *Server) Listen() {
	for {
		select {

		// Add new a client
		case c := <-s.addCh:
			s.clients[c.id] = c
			s.sendPastMessages(c)

		// Delete a client
		case c := <-s.delCh:
			delete(s.clients, c.id)

		// Broadcast message for all clients
		case msg := <-s.sendAllCh:
			s.sendAll(msg)

		// Log an error
		case err := <-s.errCh:
			log.Println("Error: ", err.Error())

		// Stop the server
		case <-s.doneCh:
			return
		}
	}
}
