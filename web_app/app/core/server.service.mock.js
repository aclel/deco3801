/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Dyer <andrew@dyergroup.com.au>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
(function() {
	'use strict';
	
	angular.module('mock.server', [])
		.factory('server', server);
	
	/**
		* @ngdoc service
		* @name mock.server
		* @description Mock of server service for testing
	**/
	function server($q) {
		
		/** The mock service methods to expose */
		return {
			getBuoys: getBuoys,
			getWarnings: getWarnings,
			getBuoyGroups: getBuoyGroups,
			getBuoyInstances: getBuoyInstances,
			getSensorTypes: getSensorTypes,
			getReadings: getReadings,
			exportData: function() {},
			addBuoy: function() {},
			deleteBuoy: function() {},
			getCommandTypes: getCommandTypes,
			addCommandType: function() {},
			updateCommandType: function() {},
			deleteCommandType: function() {},
			addSensorType: function() {},
			updateSensorType: function() {},
			deleteSensorType: function() {},
			getUsers: getUsers,
			addUser: function() {},
			updateUser: function() {},
			deleteUser: function() {},
			getCommands: getCommands,
			addCommand: function() {},
			updateCommand: function() {},
			deleteCommand: function() {},
			getWarningTriggers: getWarningTriggers,
			addWarningTrigger: function() {},
			updateWarningTrigger: function() {},
			deleteWarningTrigger: function() {},
			updateBuoyInstanceGroup: function() {},
			updateBuoyGroupName: function() {},
			updateBuoyInstanceName: function() {},
			newBuoyGroup: function() {},
			redeployBuoy: function() {}
		};

		/** Mocked getBuoys */
		function getBuoys() {
			var data = { "buoys" : [
				    {
				      "id": 1,
				      "guid": "e9528b5e-1d8f-4960-91ae-8b21ecc0bcab",
				      "name": "",
				      "activeBuoyInstanceId": 63,
				      "archived": false
				    },
				    {
				      "id": 27,
				      "guid": "dd32376b-c944-4501-9ec4-b834d4cd0337",
				      "name": "",
				      "activeBuoyInstanceId": 95,
				      "archived": false
				    },
				    {
				      "id": 50,
				      "guid": "73e3a204-4219-4098-8f5b-58b935727b93",
				      "name": "",
				      "activeBuoyInstanceId": 117,
				      "archived": false
				    },
				    {
				      "id": 51,
				      "guid": "eaa777c0-c994-489d-aa94-49ce2ebb0c10",
				      "name": "",
				      "activeBuoyInstanceId": 118,
				      "archived": false
				    },
				    {
				      "id": 52,
				      "guid": "bc42db99-4d3c-4883-8568-66d837057efb",
				      "name": "",
				      "activeBuoyInstanceId": 119,
				      "archived": false
				    },
				    {
				      "id": 53,
				      "guid": "67793f41-bf19-40fa-bb1e-a93cb3599acc",
				      "name": "",
				      "activeBuoyInstanceId": 120,
				      "archived": false
				    },
				    {
				      "id": 54,
				      "guid": "84419686-920e-402f-8369-bb3ed1ddbb07",
				      "name": "",
				      "activeBuoyInstanceId": 121,
				      "archived": false
				    },
				    {
				      "id": 55,
				      "guid": "e2016e55-1f6b-4ecb-9094-7b30a7b94da0",
				      "name": "",
				      "activeBuoyInstanceId": 122,
				      "archived": false
				    }
			]};
			var defer = $q.defer();
			defer.resolve({ data: data });
			return defer.promise;
		}

		/** Mocked getWarnings */
		function getWarnings() {
			var data = { "warnings": [
			    {
			      "readingValue": 273,
			      "readingTimestamp": 1424610360,
			      "warningTrigger": {
			        "id": 52,
			        "value": 100,
			        "operator": ">",
			        "message": "The water is very dirty!",
			        "buoyInstanceId": 118,
			        "sensorTypeId": 1
			      }
			    },
			    {
			      "readingValue": 100.31,
			      "readingTimestamp": 1445727603,
			      "warningTrigger": {
			        "id": 53,
			        "value": 100,
			        "operator": ">",
			        "message": "The battery reading is broken",
			        "buoyInstanceId": 119,
			        "sensorTypeId": 3
			      }
			    }
		  	]};
		  	var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}

		/** Mocked getBuoyGroups */
		function getBuoyGroups() {
			var data = { "buoyGroups": [
			    {
			      "id": 0,
			      "name": "(Unassigned Group)",
			      "archived": false
			    },
			    {
			      "id": 1,
			      "name": "Dredging South",
			      "archived": false
			    },
			    {
			      "id": 10,
			      "name": "Brisbane River",
			      "archived": false
			    },
			    {
			      "id": 11,
			      "name": "Bremer River",
			      "archived": false
			    }
		  	]};
		  	var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}

		/** Mocked getBuoyInstances */
		function getBuoyInstances() {
			var data = { "buoyInstances": [
				{
			      "id": 117,
			      "name": "BNE1 - Drifting",
			      "buoyId": 50,
			      "buoyGuid": "73e3a204-4219-4098-8f5b-58b935727b93",
			      "buoyGroupId": 10,
			      "buoyGroupName": "Brisbane River",
			      "latitude": {
			        "Float64": -27.540333,
			        "Valid": true
			      },
			      "longitude": {
			        "Float64": 152.840145,
			        "Valid": true
			      },
			      "dateCreated": "2015-10-25T12:42:43Z",
			      "pollRate": 0,
			      "lastPolled": {
			        "Time": "0001-01-01T00:00:00Z",
			        "Valid": false
			      },
			      "sensors": []
			    },
			    {
			      "id": 118,
			      "name": "",
			      "buoyId": 51,
			      "buoyGuid": "eaa777c0-c994-489d-aa94-49ce2ebb0c10",
			      "buoyGroupId": 0,
			      "buoyGroupName": "(Unassigned Group)",
			      "latitude": {
			        "Float64": -27.3568,
			        "Valid": true
			      },
			      "longitude": {
			        "Float64": 153.19794,
			        "Valid": true
			      },
			      "dateCreated": "2015-10-26T02:07:55Z",
			      "pollRate": 20,
			      "lastPolled": {
			        "Time": "2015-02-22T00:00:00Z",
			        "Valid": true
			      },
			      "sensors": [
			        {
			          "id": 42,
			          "sensorTypeId": 1,
			          "buoyInstanceId": 118,
			          "lastRecorded": {
			            "Time": "2015-02-22T00:00:00Z",
			            "Valid": true
			          }
			        }
			      ]
			    },
			    {
			      "id": 333,
			      "name": "",
			      "buoyId": 19,
			      "buoyGuid": "eaa777c0-c994-489d-aa94-49ce2ebb0c10",
			      "buoyGroupId": 90,
			      "buoyGroupName": "(Unassigned Group)",
			      "latitude": {
			        "Float64": -27.3568,
			        "Valid": true
			      },
			      "longitude": {
			        "Float64": 153.19794,
			        "Valid": true
			      },
			      "dateCreated": "2015-10-26T02:07:55Z",
			      "pollRate": 20,
			      "lastPolled": {
			        "Time": "2015-02-22T00:00:00Z",
			        "Valid": false
			      },
			      "sensors": [
			        {
			          "id": 42,
			          "sensorTypeId": 1,
			          "buoyInstanceId": 118,
			          "lastRecorded": {
			            "Time": "2015-02-22T00:00:00Z",
			            "Valid": true
			          }
			        }
			      ]
			    }
		    ]};
		    var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}
		
		/** Mocked getSensorTypes */
		function getSensorTypes() {
			var data = { "sensorTypes": [
			    {
			      "id": 1,
			      "description": "Amount of light that can pass through the water",
			      "unit": "NTU",
			      "name": "Turbidity",
			      "lowerBound": 0,
			      "upperBound": 200,
			      "archived": false
			    },
			    {
			      "id": 2,
			      "description": "Temperature",
			      "unit": "°C",
			      "name": "Temperature",
			      "lowerBound": 0,
			      "upperBound": 100,
			      "archived": false
			    },
			    {
			      "id": 3,
			      "description": "Battery",
			      "unit": "%",
			      "name": "Battery",
			      "lowerBound": 0,
			      "upperBound": 100,
			      "archived": false
			    },
			    {
			      "id": 4,
			      "description": "Water pressure",
			      "unit": "hPa",
			      "name": "Pressure",
			      "lowerBound": 0,
			      "upperBound": 500,
			      "archived": true
			    }
			]};
			var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}

		/** Mocked getReadings */
		function getReadings() {
			var data = { "buoyGroups": [
			    {
			      "id": 10,
			      "name": "Brisbane River",
			      "buoyInstances": [
			        {
			          "id": 120,
			          "name": "BNE4 - Drifting",
			          "readings": [
			            {
			              "id": 116,
			              "latitude": -27.533115,
			              "longitude": 152.95779,
			              "altitude": 0,
			              "speedOG": 0,
			              "course": 0,
			              "timestamp": 1445075880,
			              "sensorReadings": [
			                {
			                  "value": 21,
			                  "sensorTypeId": 1
			                }
			              ]
			            },
			            {
			              "id": 117,
			              "latitude": -27.534725,
			              "longitude": 152.959645,
			              "altitude": 0,
			              "speedOG": 0,
			              "course": 0,
			              "timestamp": 1445075940,
			              "sensorReadings": [
			                {
			                  "value": 31,
			                  "sensorTypeId": 1
			                }
			              ]
			            },
			            {
			              "id": 118,
			              "latitude": -27.536128,
			              "longitude": 152.960461,
			              "altitude": 0,
			              "speedOG": 0,
			              "course": 0,
			              "timestamp": 1446830929,
			              "sensorReadings": [
			                {
			                  "value": 37,
			                  "sensorTypeId": 1
			                }
			              ]
			            }
		              ]
			        },
			       	{
			          "id": 118,
			          "name": "BNE2 - Stationary",
			          "readings": [
			            {
			              "id": 21,
			              "latitude": -27.3568,
			              "longitude": 153.19794,
			              "altitude": 0,
			              "speedOG": 0,
			              "course": 0,
			              "timestamp": 1424339880,
			              "sensorReadings": [
			                {
			                  "value": 21,
			                  "sensorTypeId": 1
			                }
			              ]
			            },
			            {
			              "id": 22,
			              "latitude": -27.3568,
			              "longitude": 153.19794,
			              "altitude": 0,
			              "speedOG": 0,
			              "course": 0,
			              "timestamp": 1424344920,
			              "sensorReadings": [
			                {
			                  "value": 63,
			                  "sensorTypeId": 1
			                }
			              ]
			            }
			          ]
			        }
		        ],
		      },
		      {
			      "id": 11,
			      "name": "Bremer River",
			      "buoyInstances": [
			        {
			          "id": 121,
			          "name": "BRE1 - Drifting",
			          "readings": [
			            {
			              "id": 275,
			              "latitude": -27.591166,
			              "longitude": 152.782302,
			              "altitude": 0,
			              "speedOG": 0,
			              "course": 0,
			              "timestamp": 1438882130,
			              "sensorReadings": [
			                {
			                  "value": 24,
			                  "sensorTypeId": 2
			                },
			                {
			                  "value": 21,
			                  "sensorTypeId": 1
			                }
			              ]
			            },
			            {
			              "id": 276,
			              "latitude": -27.589996,
			              "longitude": 152.782987,
			              "altitude": 0,
			              "speedOG": 0,
			              "course": 0,
			              "timestamp": 1438968530,
			              "sensorReadings": [
			                {
			                  "value": 27,
			                  "sensorTypeId": 1
			                },
			                {
			                  "value": 23,
			                  "sensorTypeId": 2
			                }
			              ]
			            },
			            {"id": 277, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438978531, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 278, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438988532, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 279, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438998533, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 280, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438958534, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 281, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438948535, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 282, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438938536, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 283, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438928537, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 284, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438918538, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 285, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438908539, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 286, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438668540, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 287, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438668541, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 288, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438658542, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 289, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438648543, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 290, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438638544, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 291, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438628545, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 292, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438618546, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 293, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438698547, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 294, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438688548, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 295, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438678549, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
			            {"id": 296, "latitude": -27.589996, "longitude": 152.782987, "altitude": 0, "speedOG": 0, "course": 0, "timestamp": 1438968530, "sensorReadings": [{"value": 27, "sensorTypeId": 1 }, {"value": 23, "sensorTypeId": 2 } ] },
		              ]
		           }
	             ]
	         	}
         	  ]
			};
			var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}

		/** Mocked getCommandTypes */
		function getCommandTypes() {
			var data = { "commandTypes": [
			    {
			      "id": 1,
			      "name": "Base Wakeup Rate",
			      "description": "How frequently the buoy wakes up",
			      "archived": false
			    },
			    {
			      "id": 2,
			      "name": "Ping",
			      "description": "Used during deployment to test buoy connection to server",
			      "archived": false
			    },
			    {
			      "id": 3,
			      "name": "GPS Wakeup Rate",
			      "description": "How frequently the GPS module on the buoy wakes up to update its coordinates",
			      "archived": false
			    },
			    {
			      "id": 4,
			      "name": "Transmit Reading Rate",
			      "description": "How frequently the buoy queries the server for new commands and transmits its collected readings",
			      "archived": false
			    }
			]};
			var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}

		/** Mocked getUsers */
		function getUsers() {
			var data = { "users": [
			    {
			      "id": 23,
			      "email": "andrew@dyergroup.com.au",
			      "password": "$2a$10$0y7AQ5gESxnkl4CovBf0W.ROl/im/JhWGCgsSUhTc/ocsHIx4IGLW",
			      "firstName": "Andrew",
			      "lastName": "Dyer",
			      "lastLogin": {
			        "Time": "2015-11-07T12:33:20Z",
			        "Valid": true
			      },
			      "role": "system_admin",
			      "token": ""
			    },
			    {
			      "id": 46,
			      "email": "m.marker@uq.edu.au",
			      "password": "$2a$10$kDc7ZrBEAvOua1GNgv0uCOgvv7/vqPTmbBIR.HhAzvk6pN/iP54XO",
			      "firstName": "Malcolm",
			      "lastName": "Marker",
			      "lastLogin": {
			        "Time": "2015-09-30T05:18:38Z",
			        "Valid": false
			      },
			      "role": "power_user",
			      "token": ""
			    },
			    {
			      "id": 61,
			      "email": "andrew.cleland3@gmail.com",
			      "password": "$2a$10$CBGWu3oDZe.VkKIPbR5yeODDFcdfawUHlchXA51vey8t09gizc9Pm",
			      "firstName": "Andrew",
			      "lastName": "Cleland",
			      "lastLogin": {
			        "Time": "2015-10-23T12:15:35Z",
			        "Valid": true
			      },
			      "role": "system_admin",
			      "token": ""
			    }
			]};
			var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}

		/** Mocked getCommands */
		function getCommands() {
			var data = { "commands": [
			    {
			      "id": 1,
			      "buoyId": 50,
			      "commandTypeId": 1,
			      "value": 892,
			      "sent": false,
			      "sentAt": {
			        "Time": "0001-01-01T00:00:00Z",
			        "Valid": false
			      },
			      "createdAt": "2015-10-28T03:54:38Z"
			    },
			    {
			      "id": 10,
			      "buoyId": 51,
			      "commandTypeId": 2,
			      "value": 0,
			      "sent": false,
			      "sentAt": {
			        "Time": "0001-01-01T00:00:00Z",
			        "Valid": false
			      },
			      "createdAt": "2015-10-28T05:15:05Z"
			    },
			    {
			      "id": 11,
			      "buoyId": 50,
			      "commandTypeId": 2,
			      "value": 0,
			      "sent": false,
			      "sentAt": {
			        "Time": "0001-01-01T00:00:00Z",
			        "Valid": false
			      },
			      "createdAt": "2015-10-28T05:27:09Z"
			    }
		  	]};
		  	var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}

		/** Mocked getWarningTriggers */
		function getWarningTriggers() {
			var data = { "warningTriggers": [
			    {
			      "id": 49,
			      "value": 100,
			      "operator": ">",
			      "message": "The water is very dirty!",
			      "buoyInstanceId": 117,
			      "sensorTypeId": 1
			    },
			    {
			      "id": 50,
			      "value": 100,
			      "operator": ">",
			      "message": "The water is very dirty!",
			      "buoyInstanceId": 118,
			      "sensorTypeId": 1
			    },
			    {
			      "id": 51,
			      "value": 100,
			      "operator": ">",
			      "message": "The water is very dirty!",
			      "buoyInstanceId": 117,
			      "sensorTypeId": 1
			    }
		  	]};
		  	var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}
	}
})();