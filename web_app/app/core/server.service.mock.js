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
	function server() {
		
		/** The mock service methods to expose */
		return {
			getReadings: getReadings,
			getSensors: getSensors,
			login: login,
			logout: logout
		};
		
		/** Dummy reading data */
		function getReadings() {
			return [
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
		}
		
		/** Dummy sensor data */
		function getSensors() {
			return [
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
		}
		
		/** Mocked login function */
		function login() {
			// return 0;
		}
		
		/** Mocked logout function */
		function logout() {
			
		}
	}
})();