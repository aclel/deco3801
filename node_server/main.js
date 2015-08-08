// SETTINGS
var WEB_PORT = 8080;
var NODE_PORT = 8081;
var http = require("http");

var file = "test.db";
var HOST = '0.0.0.0';
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

HEADER = '\033[95m';
OKBLUE = '\033[36m';
OKGREEN = '\033[92m';
WARNING = '\033[93m';
FAIL = '\033[91m';
ENDC = '\033[0m';
BOLD = '\033[1m';
UNDERLINE = '\033[4m';


console.log(WARNING + "Starting server please stand by..." + ENDC);


var commands = [[1, "PING"]];

/*
 * Request handler entity
 */
var database = require("./database_handler.js");

//UDP Node server stuff
server.on('listening', function () {
    var address = server.address();
    console.log(WARNING + 'UDP Server listening on https://' + address.address + ":" + address.port + ENDC);
});

server.on('message', function (message, remote) {
    var data = JSON.parse(message);
    //console.log(data);

    if(data[0]['type'] == "data"){
        // We have received buoy data from a node
        console.log(OKGREEN + '\nMessage from buoy at ' + remote.address + ':' + remote.port + ENDC);

        var timestamp = data[0]["status"]["time"];
        var bid = data[0]["status"]["buoy_id"];
        var reading_values = data[0]["sensors"];
        var gps_lat = data[0]["status"]["gps_lat"];
        var gps_long = data[0]["status"]["gps_long"];

        database.save_reading(bid, gps_lat, gps_long, timestamp, [reading_values]);
    } else if(data[0]['type'] == "commandreq"){
        var command = getCommand(data[0]['status']['buoy_id']);
        var bid = data[0]["status"]["buoy_id"];
        if(command == null){
            //There are no commands
            console.log(OKBLUE + "Got a command request from buoy " + OKGREEN + bid + OKBLUE  + " but no commands are waiting, returning NULL command " + ENDC);
            var response = new Buffer("NULL");
            server.send( response, 0, response.length, remote.port, remote.address, 0);
        } else {
            console.log(OKBLUE + "Got a command request from buoy " + OKGREEN + bid + OKBLUE + ", returning command " + OKGREEN + command + ENDC);
            var response = new Buffer(command);
            server.send( response, 0, response.length, remote.port, remote.address, 0);
        }
    }

});

server.bind(NODE_PORT, HOST);

//Express routing
var express = require('express');
var app = express();

var router = app.listen(WEB_PORT, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(WARNING + 'API Server listening on http://127.0.0.1:8080' + ENDC);
});

//Routing paths
app.get('/api', function (req, res) {
    res.send('This is not a web server sorry!!');
});

app.get('/api/readings', function(req, res){
    database.get_readings(res);
});

//Format: reading_values?reading_id=1
app.get('/api/reading_values', function(req, res){
    database.get_reading_values(req.query.reading_id, res);
});

app.get('/api/buoys', function(req, res){
    database.get_buoys(res);
});

app.get('/api/recent', function(req, res){
    database.get_recent(res);
});

app.get('/api/sensor_types', function(req, res){
    database.get_sensor_types(res);
});

app.get('/api/test_add', function(req, res){
	database.save_reading(1, 12.5, 15.2, 140000, [{4:95, 1:24, 2:1500}]);
	res.end();
});

app.get('/api/command', function(req, res){
    var command = req.query.command; //req.param('command', null);
    var buoy = req.query.buoy_id;
    commands.push([buoy, command]);
    res.end();
});

function getCommand(buoy){
    for(r in commands){
        //console.log("<" + commands[r][0] + " " + buoy + ">")
        if(commands[r][0] == buoy){
            var command = commands[r][1];
            commands.pop(r);
            return command;
        }
    }
    return null;
}
