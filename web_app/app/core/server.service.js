(function() {
	'use strict';
	
	angular.module('app')
		.factory('server', server);
	
	function server($http, SERVER_ADDRESS, auth) {
		
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
			getSensors: getSensors,
			login: login,
			logout: logout,
			changePassword: changePassword,
			forgotPassword: forgotPassword
		};
		
		function getReadings() {
			console.log('querying server');
			
			var token = auth.getToken();
			var config = {
				headers: {
					'Authorization': 'Bearer ' + token
				}
			};
			
			var params = "?start_time=2006-01-02T15:04:00.999999-07:00&end_time=2016-01-02T15:05:05.999999-07:00";
			
			return $http.get(SERVER_ADDRESS + '/api/readings' + params, config);
		}
		
		function getSensors() {
			return dummySensors;
		}
		
		function login(email, password) {
			var data = {
				email: email,
				password: password
			};
			return $http.post(SERVER_ADDRESS + '/api/login', JSON.stringify(data));
		}
		
		function logout() {
			auth.logout();
		}
		
		function changePassword(password) {
			var data = {
				email: auth.currentUser(),
				password: password
			};
			console.log(auth.currentUser());
			return $http.post(SERVER_ADDRESS + '/api/changepassword', JSON.stringify(data));
		}
		
		function forgotPassword(email) {
			var data = {
				email: email
			};
			return $http.post(SERVER_ADDRESS + '/api/forgotpassword', JSON.stringify(data));
		}
	}
})();