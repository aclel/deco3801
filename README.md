# Flood Monitoring System

The Flood Monitoring System is a data management solution which is used to manage buoys that have been deployed to waterways.

#####It has 3 main components:
- Server
- Web App
- iOS App

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
2. Create a database and import fms.sql
3. Create a user and give them access to the database

#### Configuring SMTP Server

1. Create a Gmail account or use an existing one. 
2. Get the username and password (you will need them later) for that account.

#### Create Environment Variables

Several environment variables need to be configured for the server to run.

1. Open and edit `tools/env.sh` or `tools/env.bat` depending on your OS.
2. Run the edited enviornment script.  
3. Alternatively, you may manually add the following variables:
- `FMS_DB_HOST` - The hostname of the database, for example "localhost"
- `FMS_DB_PORT` - The port of the database at the hostname, for example "3306"
- `FMS_DB_USERNAME` - The username of the user that has access to the database
- `FMS_DB_PASSWORD` - The password of the user that has access to the database
- `FMS_DB_NAME` - The name of the database
- `FMS_SMTP_USERNAME` - Ask Andrew C for this
- `FMS_SMTP_PASSWORD` - Ask Andrew C for this
- `FMS_SMTP_SERVER` - smtp.gmail.com
- `FMS_SMTP_PORT` - 587
- `FMS_PRIVATE_KEY` - This is used to sign Json Web Tokens
- `FMS_PUBLIC_KEY` - This is used to decode Json Web Tokens

A private key can be generated with: `openssl genrsa -out mykey.pem 1024`  
A public key can be generated with: `openssl rsa -in mykey.pem -pubout > mykey.pub`

On Mac OSX/Unix you can set environment variables in `~/.bash_profile`.
On Windows you can set environment variables through a GUI, just search for them in start menu.

### Running the server
1. `cd` into `deco3801/server`
2. Run go run main.go and if it was successful you should see the logs saying that the web service is running


### Using Postman to test the API

[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) is an Chrome extension that we can use to send requests the the web service.

1. Download, install and open Postman
2. Import requests.postman_dump. You are able to run all of the teamneptune.co requests without having a local go server running
3. Make sure that the server is running, either with the binary or by running `go run main.go` in the server directory

#### Creating a User

1. Click on the POST /api/users route in the users folder in Postman
2. Click on the Body tab and modify the email to whatever you like
3. Click the blue Send button

You should get a response with Status 200 OK. An email will be sent the chosen email.

#### Login

Now that you have a User account you are able to login

1. Click on the POST /api/login route in the auth folder
2. Click on the Body tab and change the email to your own
3. Click the blue Send button
4. You should get a response with Status 200 OK. The request body contains a [JSON Web Token](http://jwt.io/) in the "token" field.
5. Copy the token 

#### Get all readings

Now that you are logged in you are able to access the readings. If you try to do so without logging in you will get a 401 Unauthorized.

1. Click on the GET /api/readings route in the buoys folder
2. Click on the Headers tab and replace "{{token}}"" in the value of the Authorization field with the one that you copied. Note that "Bearer" must remain at the beginning of the field. The value field should look like: `Bearer eyJhbGciOiJSUzI1NiIsInR5...`
3. Click the blue Send button

## Web App

The web app is a single-page application built with [AngularJS](https://angularjs.org/).

### Dependencies

 - [Node.js](https://nodejs.org/)
 - [Bower](http://bower.io/) (install globally)
 - [Gulp](http://gulpjs.com/) (install globally)

### Quickstart

1. Copy `web_app/env.js` to `web_app/app/env.js`
2. `cd` into `web_app` and run `npm install`, `bower install` and `gulp build`
3. Serve *web_app* through a web server (eg. [http-server](https://www.npmjs.com/package/http-server))

### Getting Started

Before the web app can be run, it needs to be built. Make sure you have installed the dependencies, and the follow these instructions.

 1. Copy `web_app/env.js` to `web_app/app/env.js`. This file contains environment variables for the web app. Feel free to edit these.
 2. Install dependencies by running `npm install` followed by `bower install` from the *web_app* directory.
 3. Build the javascript files by running `gulp build` from the *web_app* directory.

The web app needs to be served through a web server with the server root directory configured as *web_app*. One way to do this is by running a Node.js http-server from this directory.

 1. Run `npm install -g http-server`. This will perform a global install of the node [http-server](https://www.npmjs.com/package/http-server) package.
 2. Run `http-server` from the *web_app* directory. You should get a message saying which port the server is using.
 3. Browse to http://localhost:8080 or whichever port the server is using.

## iOS App

1. You will need a machine running OSX and Xcode 6.4 or greater. 
2. Open Xcode and import the project. You should be able to compile and run it under the iPhone simulators straight away. Note that these simulators cannot use Core Location to find your current position. To log in, you must first create a user on the server at teamneptune.co, which is the server the app attempts to access.
3. To compile and run on a device, plug in the device using a usb cable. Under Xcode->preferences->accounts, add a user who belongs to a team with an iOS developer account. You should now be able to compile for the device.
4. If the device complains about signing issues, you may have to update your provisioning profile to contain the device. Logon to developer.apple.com using the above account, and under Certificates->Devices, you can add your iPhone/iPad using its internal id. This should update your provisioning profile to let you build the app for this device.

Note that up to 100 devices can be added to a single iOS developer account.
