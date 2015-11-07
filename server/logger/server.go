package logger

import (
	"log"

	"golang.org/x/net/websocket"
)

type Server struct {
	messages  []*Message
	clients   map[int]*Client
	addCh     chan *Client
	delCh     chan *Client
	sendAllCh chan *Message
	doneCh    chan bool
	errCh     chan error
}

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

func (s *Server) Add(c *Client) {
	s.addCh <- c
}

func (s *Server) Del(c *Client) {
	s.delCh <- c
}

func (s *Server) SendAll(msg *Message) {
	s.sendAllCh <- msg
}

func (s *Server) Done() {
	s.doneCh <- true
}

func (s *Server) Err(err error) {
	s.errCh <- err
}

func (s *Server) sendPastMessages(c *Client) {
	for _, msg := range s.messages {
		c.Write(msg)
	}
}

func (s *Server) sendAll(msg *Message) {
	s.messages = append(s.messages, msg)
	if len(s.messages) == 20 {
		s.messages = s.messages[9:]
	}
	for _, c := range s.clients {
		c.Write(msg)
	}
}

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

func (s *Server) Listen() {
	for {
		select {

		// Add new a client
		case c := <-s.addCh:
			s.clients[c.id] = c
			s.sendPastMessages(c)

		// del a client
		case c := <-s.delCh:
			delete(s.clients, c.id)

		// broadcast message for all clients
		case msg := <-s.sendAllCh:
			s.sendAll(msg)

		case err := <-s.errCh:
			log.Println("Error: ", err.Error())

		case <-s.doneCh:
			return
		}
	}
}
