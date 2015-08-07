(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.factory('dashboard', dashboard);
		
	function dashboard($filter, server) {
		var readings = server.getReadings();
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