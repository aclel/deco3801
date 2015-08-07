(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.factory('dashboard', dashboard);
		
	function dashboard($filter, server) {
		var readings = server.getReadings();
		var filteredReadings = readings;
		var enabledBuoys = []; // initially enable all buoys
		var buoyFilter = [];
		var timesFilter = {
			type: 'all', // range or point or all
			from: {},
			to: {},
			point: {}
		};
		var timesInputs = {};
		
		initialiseFilters();
		
		return {
			readings: getReadings,
			buoys: getBuoys,
			times: getTimes,
			timeRange: getTimeRange,
			filterBuoy: filterBuoy,
			filterTimes: filterTimes
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
			
			timesInputs = {
				from: {
					date: "",
					time: ""
				},
				to: {
					date: "",
					time: ""
				}
			};
		}

		function getReadings() {
			return filteredReadings;
		}
		
		function getBuoys() {
			return buoyFilter;
		}
		
		function getTimes() {
			return timesInputs;
		}
		
		function getTimeRange() {
			return timesFilter;
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
		
		function filterTimes(timeType, times) {
			timesFilter.type = timeType;
			var timeFormat = "D/M/YY h:mm A";
			
			if (timeType == 'range') {
				timesFilter.from = moment(times.from.date
				 		+ " " + times.from.time, timeFormat);
				timesFilter.to = moment(times.to.date
				 		+ " " + times.to.time, timeFormat);
			} else if (timeType == 'point') {
				// timesFilter.point = value;
			}
			updateFilters();
		}
		
		function updateFilters() {
			filteredReadings = $filter('filter')(readings, function(reading) {
				// buoys
				if (enabledBuoys.indexOf(reading.buoy) == -1) {
					return false;
				}
					
				// times
				if (timesFilter.type == 'range') {
					var time = moment.unix(reading.timestamp);
					if (!time.isBetween(timesFilter.from, timesFilter.to)) {
						return false;
					}
				}
				
				return true;
			});
		}
	}
})();