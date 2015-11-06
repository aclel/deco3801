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
			getWarnings: getWarnings,
			getBuoyInstances: getBuoyInstances,
			getSensorTypes: getSensorTypes,
			getReadings: getReadings,
			exportData: function() {}
		};

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
			      "sensors": [
			        {
			          "id": 41,
			          "sensorTypeId": 1,
			          "buoyInstanceId": 117,
			          "lastRecorded": {
			            "Time": "2015-10-07T00:00:00Z",
			            "Valid": true
			          }
			        }
			      ]
			    },
			    {
			      "id": 118,
			      "name": "BNE2 - Stationary",
			      "buoyId": 51,
			      "buoyGuid": "eaa777c0-c994-489d-aa94-49ce2ebb0c10",
			      "buoyGroupId": 10,
			      "buoyGroupName": "Brisbane River",
			      "latitude": {
			        "Float64": -27.3568,
			        "Valid": true
			      },
			      "longitude": {
			        "Float64": 153.19794,
			        "Valid": true
			      },
			      "dateCreated": "2015-10-26T02:07:55Z",
			      "pollRate": 0,
			      "lastPolled": {
			        "Time": "0001-01-01T00:00:00Z",
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
	}
})();