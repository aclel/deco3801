(function() {
	'use strict';
	
	angular.module('app')
		.factory('server', server);
	
	function server($http) {
		
		var serverAddress = "http://localhost:8080";
		// var serverAddress = "";
		
		var dummyReadings = [
			{
				id: 1,
				buoy: 1,
				timestamp: 1438933614,
				latitude: -27.44613423,
				longitude: 153.07834625,
				readings : {
					battery: 90,
					pressure: 140,
					sealevel: 21,
					turbidity: 14
				}
			}, {
				id: 2, 
				buoy: 2,
				timestamp: 1438588117,
				latitude: -27.42693772,
				longitude: 153.20674896,
				readings : {
					battery: 70,
					pressure: 122,
					sealevel: 44,
					turbidity: 4
				}
			}, {
				id: 3, 
				buoy: 2,
				timestamp: 1438760876,
				latitude: -27.491475, 
				longitude: 153.006655,
				readings : {
					battery: 45,
					pressure: 85,
					sealevel: 15,
					turbidity: 45
				}
			}, {
				id: 4, 
				buoy: 4,
				timestamp: 1438847291,
				latitude: -27.400357, 
				longitude: 153.177995,
				readings : {
					battery: 75,
					pressure: 97,
					sealevel: 33,
					turbidity: 66
				}
			}, {
				id: 77, 
				buoy: 1,
				timestamp: 1438328839,
				latitude: -27.44713423,
				longitude: 153.09234625,
				readings : {
					battery: 83,
					pressure: 118,
					sealevel: 24.5,
					turbidity: 8
				}
			}
		];
		
		var dummySensors = [
			{
				id: "battery",
				name: "Battery",
				description: "Battery level of buoy",
				colour: "",
				units: "%",
				lowerBound: 0,
				upperBound: 100,
				display: true,
				unconfigured: false				
			},
			{
				id: "turbidity",
				name: "Turbidity",
				description: "Water quality around buoy",
				colour: "",
				units: "g/ml",
				lowerBound: 0,
				upperBound: 70,
				display: true,
				unconfigured: false				
			},
			{
				id: "pressure",
				name: "",
				description: "",
				colour: "",
				units: "",
				lowerBound: -1,
				upperBound: -1,
				display: false,
				unconfigured: true				
			}
		];
		
		return {
			getReadings: getReadings,
			getSensors: getSensors
		};
		
		function getReadings() {
			console.log('querying server');
			
			/* This token is temporarily hardcoded to demonstrate authentication
				between the web interface and server without the need for a login page
			*/
			var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NDAwNzY3MTIsImlhdCI6MTQzOTk5MDMxMiwic3ViIjoiYW5keXJvbyJ9.Gk_-UQGWqy22tPuiPRNNimaBx1OnC1JsBg9t3-CWFhkvtlpPXH0YAjXaTHxhkLsjKEeRM6WLWsq7B72vjdlj51CETjFY6H4eM84YKWnk9RcUPiwJ3N2eUoT4hxtwZ3ix4Z1sRm0xKiCm35etpgxYHGYBsDCEvaeMHG8hs77eRww';
			var config = {
				headers: {
					'Authorization': 'Bearer ' + token
				}
			};
			
			return $http.get(serverAddress + '/api/readings', config);
		}
		
		function getSensors() {
			return dummySensors;
		}
	}
})();