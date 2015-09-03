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
6. Run `go get` to get all project dependencies

#### Configuring the database

1. Setup a MySQL server
2. Create a database called deco3801 and import fms.sql
3. Create a user called deco3801 with password deco3801 and give them access to the database

### Create Environment Variables
Several environment variables need to be configured for the server to run:
- `FMS_DB_HOST` - The hostname of the database, for example "localhost"
- `FMS_DB_PORT` - The port of the database at the hostname, for example "3306"
- `FMS_DB_USERNAME` - The username of the database
- `FMS_DB_PASSWORD` - The password of the database
- `FMS_DB_NAME` - The name of the database
- `FMS_SMTP_USERNAME` - Ask Andrew C for this
- `FMS_SMTP_PASSWORD` - Ask Andrew C for this
- `FMS_SMTP_SERVER` - smtp.gmail.com
- `FMS_SMTP_PORT` - 587
- `FMS_PRIVATE_KEY` - This is used to sign Json Web Tokens
- `FMS_PUBLIC_KEY` - This is used to decodee Json Web Tokens

A private key can be generated with: `openssl genrsa -out mykey.pem 1024`  
A public key can be generated with: `openssl rsa -in mykey.pem -pubout > mykey.pub`

On Mac OSX you can set environment variables in `~/.bash_profile`.

### Running the server
1. `cd` into `deco3801/server`
2. Run go run main.go and if it was successful you should see the logs saying that the web service is running


### Using Postman to test the API

[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) is an Chrome extension that we can use to send requests the the web service.

1. Download, install and open Postman
2. Import requests.postman_dump. You are able to run all of the teamneptune.co requests without having a local go server running
3. Make sure that the server is running, either with the binary or by running `go run main.go` in the server directory

#### Creating a User

1. Click on the POST /users route in the users folder in Postman
2. Click on the Body tab and modify the email to whatever you like
3. Click the blue Send button

You should get a response with Status 200 OK.

#### Login

Now that you have a User account you are able to login

1. Click on the POST /login route in the auth folder
2. Click on the Body tab and change the email to your own
3. Click the blue Send button
4. You should get a response with Status 200 OK. The request body contains a [JSON Web Token](http://jwt.io/).
4. Copy the token 

#### Get all readings

Now that you are logged in you are able to access the readings. If you try to do so without logging in you will get a 401 Unauthorized.

1. Click on the GET /readings route in the buoys folder
2. Click on the Headers tab and replace the token in the value of the Authorization field with the one that you copied. Note that "Bearer" must remain at the beginning of the field. The value field should look like: `Bearer eyJhbGciOiJSUzI1NiIsInR5...`
3. Click the blue Send button

## Web Interface

The web interface is a single-page application built with [AngularJS](https://angularjs.org/).

### Quickstart

Run `http-server -o` from `deco3801/web_app`.

### Getting Started

The web app needs to be served through a web server with the server root directory configured as *deco3801/web_app*. One way to do this is by running a Node.js http-server from this directory.

 1. Install [Node.js](https://nodejs.org/)
 2. Run `npm install -g http-server`. This will perform a global install of the node [http-server](https://www.npmjs.com/package/http-server) package.
 3. `cd` into `deco3801/web_app`
 4. Run `http-server`. You should get a message saying which port the server is using.
 5. Browse to http://localhost:8080 or whichever port the server is using.