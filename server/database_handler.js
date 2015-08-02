/**
 * Created by tim on 27/04/2015.
 */

var connection = connect();
HEADER = '\033[95m';
OKBLUE = '\033[36m';
OKGREEN = '\033[92m';
WARNING = '\033[93m';
FAIL = '\033[91m';
ENDC = '\033[0m';
BOLD = '\033[1m';
UNDERLINE = '\033[4m';

module.exports = {
    get_reading_values: get_reading_values,
    get_buoys: get_buoys,
    get_readings: get_readings,
    get_recent: get_recent,
    get_sensor_types: get_sensor_types,
    save_reading: save_reading
};

function connect(){
    express    = require("express");
    mysql      = require('mysql');

    // SQL Database init
    var connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'deco3801',
        password : 'deco3801',
        database : 'deco3800'
    });

    var app = express();
    connection.connect(function(err) {
        if(!err) {
            console.log(WARNING + "Database connection established" + ENDC);
            return true;
        } else {
            console.log(FAIL + "[ERROR] Database connection error.... Stopping server" + ENDC);
            console.log(err)
            return false;
        }
    });
    return connection;
}

function get_reading_values(readingID, response) {
    var ret = "";
    connection.query('SELECT * FROM reading_value WHERE reading_id=' + readingID, function (err, rows, fields) {
        if (!err) {
            response.send(JSON.stringify(rows));
        } else {
            console.log(FAIL + 'Error while performing Query.' + ENDC);
            response.send("ERROR");
            
        }
    });
}

/*
SELECT buoy_id, reading_value.value, reading_value.sensor_type, reading_value.reading_id
FROM reading_value, reading
WHERE reading_value.reading_id = reading.reading_id AND reading_value.reading_id
IN (
SELECT MAX( reading_id ) 
FROM reading
GROUP BY buoy_id
)
ORDER BY buoy_id
*/

/*==================================================================*/
/* 						<GIANTFILTHYHACK>							*/
/*==================================================================*/

/*==================================================================*/
/* BEWARE!!! THIS IS A GIANT HACK FOR DEMONSTRATION PURPOSES ONLY 	*/
/*==================================================================*/
/* YOU MAY THINK YOU KNOW HOW THIS WORKS BUT YOU DONT 				*/
/*==================================================================*/
/* PLEASE INCREMENT THE HOURS COUNT WHERE NECESSARY 				*/
/* HOURS SPENT TRYING TO WORK OUT WHAT THIS DOES = 0 				*/
/*==================================================================*/

function get_recent(response){
    var resp = [];
    var buoys = [];
    var readings = [];
    connection.query('SELECT buoy_id, reading_value.value, reading_value.sensor_type, reading_value.reading_id FROM reading_value, reading WHERE reading_value.reading_id = reading.reading_id AND reading_value.reading_id IN ( SELECT MAX( reading_id ) FROM reading GROUP BY buoy_id ) ORDER BY buoy_id', function (err, rows, fields) {		
        if (!err) {
	    	console.log(OKBLUE + "Recent request received. Processing..." + ENDC);
	    	var buoy_count = 0;
			for(i in rows){
				if(doesBuoyExist(rows[i]['buoy_id'], readings)){
					addToReadings(rows[i]['buoy_id'], readings, rows[i]['value'], rows[i]['sensor_type']);
				} else {
					buoy_count++;
					readings.push({
						buoy: rows[i]['buoy_id'], 
						readings: [{type: rows[i]['sensor_type'], value: rows[i]['value']}]
					}); // [BUOYID, READING TYPE, READING VALUE]
				}
			}
			
            response.send(JSON.stringify(readings));
            console.log(OKGREEN + "Done. Returned %d buoys and %d readings" + ENDC, buoy_count, rows.length);
        } else {
            console.log(FAIL + 'Error while performing Query.' + ENDC);
        }
    });
}

/* Check if the buoy is already in the dict object */
function doesBuoyExist(buoy, readings){
	for(f in readings){
		if(readings[f]['buoy'] == buoy){
			return true;
		}
	}	
	return false;
}

function addToReadings(buoy, readings, value_t, type_t){
	for( i in readings){
		if(readings[i]['buoy'] == buoy){
			// We have found the right buoy to add this reading to
			var temp = readings[i]['readings'];
			temp.push({type: type_t, value: value_t});
		}
	}
}

function get_reading(response) {
    var connection = connect();
    var ret = "";
    connection.query('SELECT buoy.id, buoy.name, reading_value.* FROM buoy, reading_value', function (err, rows, fields) {
        if (!err) {
            response.write(JSON.stringify(rows));
            response.end();
        } else {
            console.log(FAIL + 'Error while performing Query.' + ENDC);
            response.write("ERROR");
            response.end();
        }
    });
    connection.end();
}

/*==================================================================*/
/* 						</GIANTFILTHYHACK>							*/
/*==================================================================*/

/*==================================================================*/
/* 						GET COMMANDS								*/
/*==================================================================*/

function get_readings(response){
    var IDs = [];
    connection.query('SELECT * FROM reading ORDER BY buoy_id', function (err, rows, fields) {
        if (!err) {
            response.send(JSON.stringify(rows));
            console.log(OKGREEN + "Query complete." + ENDC);
        }
    });
}

function get_buoys(response){
    var IDs = [];
    connection.query('SELECT * FROM buoy ORDER BY ID', function (err, rows, fields) {
        if (!err) {
            response.send(JSON.stringify(rows));
            console.log(OKGREEN + "Query complete." + ENDC);
        } else {
            console.log(FAIL + 'Error while performing Query.' + ENDC);
        }
    });
}

function get_sensor_types(response){
    var IDs = [];
    connection.query('SELECT * FROM sensor_type', function (err, rows, fields) {
        if (!err) {
            response.send(JSON.stringify(rows));
            console.log(OKGREEN + "Query complete." + ENDC);
        } else {
            console.log(FAIL + 'Error while performing Query.' + ENDC);
        }
    });
}

/*==================================================================*/
/* 						POST COMMANDS								*/
/*==================================================================*/
function save_buoy(name){
	
}

function save_reading(buoy_id, gps_lat, gps_long, time, reading_values){
	connection.query( 'INSERT INTO reading (buoy_id, gps_lat, gps_long, time) VALUES (' + buoy_id + ',' + gps_lat + ', ' + gps_long + ', ' + time + ')', function (err, rows, fields ) {
        if (!err) {
            var insert_id = rows['insertId'];
			console.log(OKBLUE + "Added 1 reading with ID = (" + insert_id + ")" + ENDC);
			
			for(i in reading_values[0]){
				//For each reading_value we need to enter those into the correct table
				add_reading_value(insert_id, i, reading_values[0][i]);
			}
        } else {
            console.log('Error while adding reading', err);
        }
    });	
}

function add_reading_value(reading_id, sensor_type, sensor_value){
	connection.query( 'INSERT INTO reading_value VALUES (' + reading_id + ', ' + sensor_value + ', ' + sensor_type + ');', function(err, rows, fields){
		if(!err){
			console.log(OKBLUE + "	Added reading_value for reading " + reading_id + ", sensor_type " + sensor_type + " and value " + sensor_value + ENDC);
		} else {
			console.log('Error while adding values', err);
		}
	});	
}
