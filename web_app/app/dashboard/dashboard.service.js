(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.factory('dashboard', dashboard);
		
	function dashboard($filter, server) {
		var readings = server.getReadings();
		var filteredReadings = readings;

		var filters = {};
		initialiseFilters();
		
		return {
			readings: getReadings,
			buoys: getBuoys,
			times: getTimes,
			battery: getBattery,
			updateBuoys: updateBuoys,
			updateTimes: updateTimes,
			updateBattery: updateBattery,
			getOldestReading: getOldestReading,
			getRelativeAge: getRelativeAge
		};
		
		function initialiseFilters() {
			filters.buoys = {}; // { buoyId: enabled }
			for (var i = 0; i < readings.length; i++) {
				if (!filters.buoys.hasOwnProperty(readings[i].buoy)) {
					filters.buoys[readings[i].buoy] = true;
				}
			}
			
			filters.times = {
				type: "all",
				range: { from: null, to: null }, // from and to contain moments
				point: null,
				pointReadings: {}, // contains list of closest readings to point
				inputs: {
					range: {
						from: { date: "", time: "" },
						to: { date: "", time: "" },
					},
					point: { date: "", time: "" },
				}
			}
			
			filters.battery = {
				enabled: false,
				options: [">", "<", "="],
				selected: ">",
				value: ""
			}
		}

		function getReadings() {
			return filteredReadings;
		}
		
		function getBuoys() {
			return filters.buoys;
		}
		
		function getTimes() {
			return filters.times;
		}
		
		function getBattery() {
			return filters.battery;
		}
		
		function updateBuoys() {
			updateFilters();
		}
		
		function updateTimes() {
			if (filters.times.type == 'point') {
				calculatePointReadings();
			}
			updateFilters();
		}
		
		function updateBattery() {
			updateFilters();
		}
		
		function getOldestReading() {
			var readings = filteredReadings;
			var oldest = moment.unix(readings[0].timestamp);
			for (var i = 1; i < readings.length; i++) {
				if (moment.unix(readings[i].timestamp).isBefore(oldest)) {
					oldest = moment.unix(readings[i].timestamp);
				}
			}
			return oldest;
		}
		
		function calculatePointReadings() {
			var buoyReadings = {};
			for (var i = 0; i < readings.length; i++) {
				var reading = readings[i];
				if (buoyReadings.hasOwnProperty(reading.buoy)) {
					// determine which reading is closer to point
					var oldReading = buoyReadings[reading.buoy].time;
					var newReading = reading.timestamp;
							 
					var diffOld = moment.unix(oldReading).diff(filters.times.point);
					var diffNew = moment.unix(newReading).diff(filters.times.point);
					
					if (Math.abs(diffNew) < Math.abs(diffOld)) {
						buoyReadings[reading.buoy] = {
							id: reading.readingId,
							time: reading.timestamp
						};
					} 
				} else {
					buoyReadings[reading.buoy] = {
						id: reading.readingId,
						time: reading.timestamp
					};
				}
			}
			filters.times.pointReadings = buoyReadings;
		}
		
		function updateFilters() {
			filteredReadings = $filter('filter')(readings, function(reading) {
				if (!filterBuoys(reading)) return false;
				if (!filterTimes(reading)) return false;
				if (!filterBattery(reading)) return false;
				return true;
			});
		}
		
		function filterBuoys(reading) {
			if (!filters.buoys[reading.buoy]) {
				return false;
			}
			return true;
		}
		
		function filterTimes(reading) {
			if (filters.times.type == 'range') {
				var time = moment.unix(reading.timestamp);
				if (!time.isBetween(filters.times.range.from, filters.times.range.to)) {
					return false;
				}
			} else if (filters.times.type == 'point') {
				if (filters.times.pointReadings[reading.buoy].id != reading.readingId) {
					return false;
				}
			}
			return true;
		}
		
		function filterBattery(reading) {
			if (!filters.battery.enabled) {
				return true;
			}
			var value = parseInt(filters.battery.value, 10);
			if (filters.battery.selected == ">") {
				if (reading.readings.battery <= value) {
					return false;
				}
			} else if (filters.battery.selected == "<") {
				if (reading.readings.battery >= value) {
					return false;
				}
			} else if (filters.battery.selected == "=") {
				if (reading.readings.battery != value) {
					return false;
				}
			}
			return true;
		}
		
		function getRelativeAge(reading) {
			// returns age between 0 and 1, based on a range determined as seen below
			var time = moment.unix(reading.timestamp);
			var times = filters.times;
			
			if (times.type == 'all') {
				// range: from 2 weeks ago until now
				var max = moment();
				var min = max.clone().subtract(2, 'weeks');
				return calculateAgeInRange(time, min, max);
			
			} else if (times.type == 'range') {
				// range: range of time filters
				var max = times.range.to;
				var min = times.range.from;
				return calculateAgeInRange(time, min, max);
			
			}  else if (times.type == 'point') {
				// range: from two weeks before point until point
				if (times.point === null) {
					return 1.0;
				}
				var max = times.point;
				var min = max.clone().subtract(2, 'weeks');
				return calculateAgeInRange(time, min, max);
			}
		}
		
		function calculateAgeInRange(time, min, max) {
			if (time.isBefore(min)) {
				return 0;
			} else if (!time.isBefore(max)) {
				return 1.0;
			}
			return (time.diff(min) / max.diff(min));
		}
	}
})();