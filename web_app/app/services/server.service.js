(function() {
	'use strict';
	
	angular.module('app')
		.factory('server', server);
	
	function server() {
		var dummyReadings = [
			{
				readingId: 1,
				buoy: 1,
				timestamp: 1438933614,
				latitude: -27.44613423,
				longitude: 153.07834625,
				readings : {
					battery: 0.90,
					pressure: 140,
					sealevel: 21,
					turbidity: 14
				}
			}, {
				readingId: 2, 
				buoy: 2,
				timestamp: 1438588117,
				latitude: -27.42693772,
				longitude: 153.20674896,
				readings : {
					battery: 0.70,
					pressure: 122,
					sealevel: 44,
					turbidity: 4
				}
			}, {
				readingId: 3, 
				buoy: 3,
				timestamp: 1438760876,
				latitude: -27.491475, 
				longitude: 153.006655,
				readings : {
					battery: 0.45,
					pressure: 85,
					sealevel: 15,
					turbidity: 45
				}
			}, {
				readingId: 4, 
				buoy: 4,
				timestamp: 1438847291,
				latitude: -27.400357, 
				longitude: 153.177995,
				readings : {
					battery: 0.75,
					pressure: 97,
					sealevel: 33,
					turbidity: 66
				}
			}, {
				readingId: 77, 
				buoy: 1,
				timestamp: 1438328839,
				latitude: -27.44713423,
				longitude: 153.09234625,
				readings : {
					battery: 0.83,
					pressure: 118,
					sealevel: 24.5,
					turbidity: 8
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