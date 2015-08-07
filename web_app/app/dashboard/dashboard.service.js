(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.factory('dashboard', dashboard);
		
	function dashboard($filter) {
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
		
		var readings = dummyReadings; // replace with AJAX request
		var filteredReadings = readings;
		var enabledBuoys = []; // initially enable all buoys
		var buoyFilter = [];
		
		initialiseFilters();
		
		return {
			readings: getReadings,
			buoys: getBuoys,
			filterBuoy: filterBuoy
		};
		
		function initialiseFilters() {
			// set up buoy filters
			var buoyArray = [];
			for (var i = 0; i < readings.length; i++) {
				if (buoyArray.indexOf(readings[i].buoy) == -1) {
					buoyArray.push(readings[i].buoy);
				}
			}
			enabledBuoys = buoyArray;
			
			for (var i = 0; i < buoyArray.length; i++) {
				buoyFilter.push({
					id: buoyArray[i],
					enabled: true
				});
			}
		}

		function getReadings() {
			return filteredReadings;
		}
		
		function getBuoys() {
			return buoyFilter;
		}
		
		function filterBuoy(buoy) {
			var index = enabledBuoys.indexOf(buoy.id);
			if (buoy.enabled) {
				if (index == -1) {
					enabledBuoys.push(buoy.id);
					updateFilters();
				}
			} else {
				if (index != -1) {
					enabledBuoys.splice(index, 1);
					updateFilters();
				}
			}
		}
		
		function updateFilters() {
			filteredReadings = $filter('filter')(readings, function(reading) {
				if (enabledBuoys.indexOf(reading.buoy) == -1) 
					return false;
				
				return true;
			});
		}
	}
})();