(function() {
	'use strict';
	
	angular.module('app')
		.factory('server', server);
	
	function server() {
		var dummyReadings = [
			{
				readingId: 1,
				buoy: 1,
				timestamp: 1430626500,
				latitude: -27.44613423,
				longitude: 153.07834625,
				readings : {
					1: 30,
					2: 40,
					3: 50,
					4: 60
				}
			}, {
				readingId: 2, 
				buoy: 2,
				timestamp: 1430712900,
				latitude: -27.42693772,
				longitude: 153.20674896,
				readings : {
					1: 30,
					2: 40,
					3: 50,
					4: 60
				}
			}, {
				readingId: 3, 
				buoy: 3,
				timestamp: 1430712900,
				latitude: -27.491475, 
				longitude: 153.006655,
				readings : {
					1: 30,
					2: 40,
					3: 50,
					4: 60
				}
			}, {
				readingId: 4, 
				buoy: 4,
				timestamp: 1430712900,
				latitude: -27.400357, 
				longitude: 153.177995,
				readings : {
					1: 30,
					2: 40,
					3: 50,
					4: 60
				}
			}, {
				readingId: 77, 
				buoy: 1,
				timestamp: 1430713900,
				latitude: -27.44713423,
				longitude: 153.09234625,
				readings : {
					1: 30,
					2: 40,
					3: 50,
					4: 60
				}
			}
		];
		
		return {
			getReadings: getReadings
		};
		
		function getReadings() {
			return dummyReadings; // replace with AJAX request
		}
	}
})();