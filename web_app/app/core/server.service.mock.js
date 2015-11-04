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
			getSensorTypes: getSensorTypes
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
			      "archived": false
			    }
			]};
			var defer = $q.defer();
            defer.resolve({ data: data });
            return defer.promise;
		}
	}
})();