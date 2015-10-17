# WaterWatcher

WaterWatcher is a data management solution which is used to manage and collect data from buoys that have been deployed to waterways throughout South-East Queensland and other regions throughout the world. 

WaterWatcher has 3 main components:
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
2. Create a database and import mysql/fms.sql
3. Create a user and give them access to the database

Remember the name of the database, you will need it later. 

#### Configuring SMTP Server

1. Create a Gmail account or use an existing one. 
2. Get the username and password (you will need them later) for that account.

#### Create Environment Variables

Several environment variables need to be configured for the server to run.

1. Open and edit `tools/env.sh` or `tools/env.bat` depending on your OS. Note this is where you will need to recall the database name and Gmail account.
2. Run the edited environment script.  

Alternatively, you may manually add the following variables:
| Variable Name               | Value            | Description
| ----------------------------|------------------|------------------------------
| `FMS_DB_PORT_3306_TCP_ADDR` | "localhost"      | The hostname of the database
| `FMS_DB_PORT_3306_TCP_PORT` | "3306"           | The port of the database
| `FMS_DB_USERNAME`           | "username"       | Database user's username 
| `FMS_DB_PASSWORD`           | "password"       | Database user's password 
| `FMS_DB_NAME`               | "water"          | The name of the database  
| `FMS_SECRET_KEY`            | "<ommited>"     | 32 character random string.  
| `FMS_SMTP_USERNAME`         | "me@domain.com"  | Provide your own SMTP username
| `FMS_SMTP_PASSWORD`         | "password"       | Provide your own SMTP password  
| `FMS_SMTP_SERVER`           | "smtp.gmail.com" | SMTP server hostname
| `FMS_SMTP_PORT`             | 587              | Remember not to add quotes.  

On Mac OSX/Unix you can set environment variables in `~/.bash_profile`.
On Windows you can set environment variables through a GUI, just search for it from the start menu: "environment variables".

### Running the server
1. `cd` into `deco3801/server`
2. Run `go run main.go` and if it was successful you should see the logs saying that the web service is running

## Web App

The web app is a single-page application built with [AngularJS](https://angularjs.org/).

### Dependencies

 - [Node.js](https://nodejs.org/)
 - [Bower](http://bower.io/) (install globally)
 - [Gulp](http://gulpjs.com/) (install globally)

### Quickstart

1. `cd` into `web_app` and run `npm install`, `bower install` and `gulp build`
2. Serve *web_app* through a web server (eg. [http-server](https://www.npmjs.com/package/http-server))

### Getting Started

Before the web app can be run, it needs to be built. Make sure you have installed the dependencies, and then follow these instructions.

 1. Install dependencies by running `npm install` followed by `bower install` from the *web_app* directory.
 2. Build the javascript files by running `gulp build` or `gulp build-prod` from the *web_app* directory.

The web app needs to be served through a web server with the server root directory configured as *web_app*. One way to do this is by running a Node.js http-server from this directory.

 1. Run `npm install -g http-server`. This will perform a global install of the node [http-server](https://www.npmjs.com/package/http-server) package.
 2. Run `http-server` from the *web_app* directory. You should get a message saying which port the server is using.
 3. Browse to http://localhost:8080 or whichever port the server is using.

## iOS App

1. You will need a machine running OSX and Xcode 7.0 or greater.
2. Simply import the project. You can compile the given code for simulators out of the box.
3. To load the program onto a device, first plug it in with USB and then wait for Xcode to finish generating indices for it. Once complete, press run and say 'yes' to all dialogs which pop up about signing identities. (This step requires an Apple ID)  If any errors arise with security, try allowing yourself as a developer on your phone under Settings->General->Profile.