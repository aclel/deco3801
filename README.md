# Flood Monitoring System

## Server

The server is a RESTful web service written in [Go](https://golang.org/)

### Installation

The web server is written in Go, meaning that the entire project needs to be cloned into a Go workspace. This is necessary for the `go tool` commands (https://golang.org/cmd/go/) to work.

1. [Install Go](https://golang.org/doc/install) 
2. [Read up on Go workspaces and GOPATH](https://golang.org/doc/code.html)
3. Make a Go workspace
4. Set your GOPATH
5. Run `go get github.com/aclel/deco3801` from inside your GOPATH. This will clone the repository into `$GOPATH/src/github.com/aclel/deco3801`.
6. `cd` into deco3801/server and run `go run *.go`  
7. The application will now the running

### Building an exe

You can build a binary executable by running `go install` inside the server directory. This will create a binary called 'server' in $GOPATH/bin/. Double click on it to run it.


### Using Postman to test the API

[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) is an Chrome extension that we can use to send requests the the web service.

1. Download, install and open Postman
2. Import server.json.postman_collection into Postman from the server directory. This will import a collection of requests.
3. Make sure that the server is running, either with the binary or by running `go run *.go` in the server directory

#### Creating a User

1. Click on the POST /users route in the users folder in Postman
2. Click on the Body tab and modify the username and password to whatever you like
3. Click the blue Send button

You should get a response with Status 200 OK.

#### Login

Now that you have a User account you are able to login

1. Click on the POST /login route in the auth folder
2. Click on the Body tab and change the username and password to your own
3. Click the blue Send button
4. You should get a response with Status 200 OK. The request body contains a [JSON Web Token](http://jwt.io/).
4. Copy the token 

#### Get all the Buoys

Now that you are logged in you are able to access the Buoys. If you try to do so without logging in you will get a 401 Unauthorized.

1. Click on the GET /buoys route in the buoys folder
2. Click on the Headers tab and replace the token in the value of the Authorization field with the one that you copied. Note that "Bearer" must remain at the beginning of the field. The value field should look like: `Bearer eyJhbGciOiJSUzI1NiIsInR5...`
3. Click the blue Send button

The /buoys route just returns text at the moment but this will be changed to JSON.


