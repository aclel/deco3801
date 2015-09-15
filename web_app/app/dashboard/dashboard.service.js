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
	
	angular.module('app.dashboard')
		.factory('dashboard', dashboard);
		
	function dashboard($log, server, moment) {
		var data = [];
		var filteredReadings = [];
		
		var filters = {};
		initialiseFilters();
		
		return {
			queryReadings: queryReadings,
			querySensors: querySensors,
			readings: getReadings,
			buoys: getBuoys,
			times: getTimes,
			sensors: getSensors,
			sensorMetadata: getSensorMetadata,
			updateBuoys: updateBuoys,
			updateTimes: updateTimes,
			updateFilters: updateFilters,
			updateSensors: updateSensors,
			getOldestReading: getOldestReading,
			getRelativeAge: getRelativeAge,
			exportData: exportData
		};
		
		function queryReadings(from, to) {
			if (!from) {
				from = moment().subtract(filters.times.inputs.since.value,
					 filters.times.inputs.since.quantifier).unix();
				to = moment().unix();
			}
			var promise = server.getReadings(from, to);
			promise.then(function(res) {
				data = res.data.buoyGroups;
				populateBuoys();
			}, function(res) {
				$log.error(res);
			});
			return promise;
		}
		
		function querySensors() {
			var promise = server.getSensors();
			promise.then(function(res) {
				populateSensors(res.data.sensorTypes);
			}, function(res) {
				$log.error(res);
			});
			return promise;
		}
		
		function initialiseFilters() {
			filters.buoys = [];
			populateBuoys();
			
			filters.times = {
				type: "since",
				range: { from: null, to: null }, // from and to contain moments
				point: null,
				pointReadings: [], // contains list of closest readings to point
				inputs: {
					since: { value: 2, quantifier: "weeks", options: [
						"hours", "days", "weeks", "months"
					] },
					range: {
						from: { date: "", time: "" },
						to: { date: "", time: "" },
					},
					point: { date: "", time: "" },
				}
			}
			
			filters.sensors = {};
			filters.sensorInputs = {};
		}
		
		function populateBuoys() {		
			if (filters.buoys.length !== 0) return;
			
			data.forEach(function(buoyGroup) {
				var group = {};
				group.id = buoyGroup.id;
				group.name = buoyGroup.name;
				group.enabled = true;
				group.collapsed = false;
				group.indeterminate = false;
				group.buoyInstances = [];
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					var instance = {};
					instance.id = buoyInstance.id;
					instance.name = buoyInstance.name;
					instance.enabled = true;
					group.buoyInstances.push(instance);
				});
				filters.buoys.push(group);
			});
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
		
		function getSensors() {
			for (var key in filters.sensorInputs) {
				if (filters.sensorInputs.hasOwnProperty(key)) {
					filters.sensors[key].inputs = filters.sensorInputs[key];
				}
			}
			var sensors = []; 
			for (var key in filters.sensors) {
				if (filters.sensors.hasOwnProperty(key)) {
					// if (filters.sensors[key].display) {
						sensors.push(filters.sensors[key]);
					// }
				}
			}
			return sensors;
		}
		
		function getSensorMetadata() {
			return filters.sensors;
		}
		
		function updateBuoys() {
			updateFilters();
		}
		
		function updateTimes() {
			// query server for new times
			var from, to;
			
			if (filters.times.type == 'since') {
				from = moment().subtract(filters.times.inputs.since.value,
					 filters.times.inputs.since.quantifier).unix();
				to = moment().unix();
			} else if (filters.times.type == 'all') {
				from = 0;
				to = moment().unix();
			} else if (filters.times.type == 'range') {
				from = filters.times.range.from.unix();
				to = filters.times.range.to.unix();
			} else if (filters.times.type == 'point') {
				from = filters.times.point.clone().subtract(2, 'weeks').unix();
				to = filters.times.point.clone().add(2, 'weeks').unix();
			}
			
			var promise = queryReadings(from, to);
			promise.then(function() {
				if (filters.times.type == 'point') {
					calculatePointReadings();
				}
				updateFilters();
			});
			return promise;
		}
		
		function updateSensors() {
			updateFilters();
		}
		
		function populateSensors(sensors) {
			for (var i = 0; i < sensors.length; i++) {
				filters.sensors[sensors[i].id] = sensors[i];
				
				if (!filters.sensorInputs.hasOwnProperty(sensors[i].id)) {
					filters.sensorInputs[sensors[i].id] = {
						enabled: false,
						options: [">", "<", "="],
						selected: ">",
						value: ""
					}
				}
				
				// disable inputs which aren't set to display
				// if (!sensors[i].display) {
				// 	filters.sensorInputs[sensors[i].id].enabled = false;
				// }				
			}
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
			var pointReadings = [];
			data.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					var closest = {
						id: buoyInstance.readings[0].id,
						timestamp: buoyInstance.readings[0].timestamp
					};
					buoyInstance.readings.forEach(function(reading) {
						var diffOld = moment.unix(closest.timestamp).diff(filters.times.point);
						var diffNew = moment.unix(reading.timestamp).diff(filters.times.point);
						if (Math.abs(diffNew) < Math.abs(diffOld)) {
							closest.id = reading.id;
							closest.timestamp = reading.timestamp;
						}
					});
					pointReadings.push(closest.id);
				});
			});
			filters.times.pointReadings = pointReadings;
		}
		
		function updateFilters() {
			var fdata = [];
			
			// Get enabled buoy groups
			var enabledBuoyGroups = [];
			filters.buoys.forEach(function(buoyGroup) {
				if (buoyGroup.enabled) {
					enabledBuoyGroups.push(buoyGroup.id);
				}
			});
			
			// Get enabled buoy instances
			var enabledBuoyInstances = [];
			filters.buoys.forEach(function(buoyGroup) {
				if (buoyGroup.enabled) {
					buoyGroup.buoyInstances.forEach(function(buoyInstance) {
						if (buoyInstance.enabled) {
							enabledBuoyInstances.push(buoyInstance.id);
						}
					});
				}
			});
			
			// Get readings to display based on other filters
			var enabledReadings = [];
			for (var i = 0; i < data.length; i++) {
				var buoyGroup = data[i];
				if (enabledBuoyGroups.indexOf(buoyGroup.id) != -1) {
					for (var j = 0; j < buoyGroup.buoyInstances.length; j++) {
						var buoyInstance = buoyGroup.buoyInstances[j];
						if (enabledBuoyInstances.indexOf(buoyInstance.id) != -1) {
							for (var k = 0; k < buoyInstance.readings.length; k++) {
								var reading = buoyInstance.readings[k];
								if (filterTimes(reading) && filterSensors(reading)) { 
									enabledReadings.push(reading.id);
								}
							}		
						}
					}
				}
			}
			
			// Add enabled buoy groups and instances (without readings)
			data.forEach(function(buoyGroup) {
				if (enabledBuoyGroups.indexOf(buoyGroup.id) != -1) {
					var group = {};
					group.id = buoyGroup.id;
					group.name = buoyGroup.name;
					group.buoyInstances = [];
					buoyGroup.buoyInstances.forEach(function(buoyInstance) {
						if (enabledBuoyInstances.indexOf(buoyInstance.id) != -1) {
							var instance = {};
							instance.id = buoyInstance.id;
							instance.name = buoyInstance.name;
							instance.readings = [];
							buoyInstance.readings.forEach(function(reading) {
								if (enabledReadings.indexOf(reading.id) != -1) {
									instance.readings.push(reading);
								}
							});
							group.buoyInstances.push(instance);
						}
					});
					fdata.push(group);
				}
			});
			
			filteredReadings = fdata;
		}
		
		function showBuoyGroup(buoyGroup) {
			for (var i = 0; i < filters.buoys.length; i++) {
				var group = filters.buoys[i];
				if (buoyGroup.id == group.id) {
					if (!group.enabled) {
						return false;
					}
				}
			}		
			return true;
		}
		
		function filterBuoys(reading) {
			if (!filters.buoys[reading.buoy]) {
				return false;
			}
			return true;
		}
		
		function filterTimes(reading) {
			if (filters.times.type == 'since') {
				var since = moment().subtract(filters.times.inputs.since.value,
					 filters.times.inputs.since.quantifier);
				var time = moment.unix(reading.timestamp);
				if (!time.isAfter(since)) {
					return false;
				}
			} else if (filters.times.type == 'range') {
				var time = moment.unix(reading.timestamp);
				if (!time.isBetween(filters.times.range.from, filters.times.range.to)) {
					return false;
				}
			} else if (filters.times.type == 'point') {
				if (filters.times.pointReadings.indexOf(reading.id) == -1) {
					return false;
				}
			}
			return true;
		}
		
		function filterSensors(reading) {
			if (Object.keys(filters.sensorInputs).length === 0) {
				return true;
			}
			
			for (var i = 0; i < reading.sensorReadings.length; i++) {
				if (!filterSensor(reading.sensorReadings[i])) {
					return false;
				}
			}
			return true;
		}
		
		function filterSensor(sReading) {
			var sensor = filters.sensorInputs[sReading.sensorTypeId];
			
			if (!sensor.enabled) {
				return true;
			}
			var value = parseInt(sensor.value, 10);
			if (sensor.selected == ">") {
				if (sReading.value <= value) {
					return false;
				}
			} else if (sensor.selected == "<") {
				if (sReading.value >= value) {
					return false;
				}
			} else if (sensor.selected == "=") {
				if (sReading.value != value) {
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
			
			} else if (times.type == 'since') {
				var max = moment();
				var min = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier);
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
		
		function exportData() {
			var readingIds = [];
			filteredReadings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					buoyInstance.readings.forEach(function(reading) {
						readingIds.push(reading.id);
					});
				});
			});
			server.exportData(readingIds);
		}
	}
})();