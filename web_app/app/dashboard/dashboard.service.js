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
		
	function dashboard($filter, server, moment) {
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
			updateBuoys: updateBuoys,
			updateTimes: updateTimes,
			updateFilters: updateFilters,
			updateSensors: updateSensors,
			getOldestReading: getOldestReading,
			getRelativeAge: getRelativeAge
		};
		
		function queryReadings() {
			var promise = server.getReadings();
			promise.then(function(res) {
				// console.log(res);
				data = res.data.buoyGroups;
				repopulateFilters();
			}, function(res) {
				console.log('error');
				console.log(res);
			});
			return promise;
		}
		
		function querySensors() {
			var promise = server.getSensors();
			promise.then(function(res) {
				// console.log(res);
				populateSensors(res.data.sensorTypes);
			}, function(res) {
				console.log('error');
				console.log(res);
			});
			return promise;
		}
		
		function initialiseFilters() {
			// filters.buoys = {}; // { buoyId: enabled }
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
			// populateSensors();
		}
		
		function repopulateFilters() {
			populateBuoys();
			// populateSensors();
		}
		
		function populateBuoys() {		
			// data.forEach(function(buoyGroup) {
			// 	buoyGroup.buoyInstances.forEach(function(buoyInstance) {
			// 		if (!filters.buoys.hasOwnProperty(buoyInstance.id)) {
			// 			filters.buoys[buoyInstance.id] = true;
			// 		}
			// 	});
			// });
			
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
			// return data;
			return filteredReadings;
		}
		
		function getBuoys() {
			return filters.buoys;
		}
		
		function getTimes() {
			return filters.times;
		}
		
		function getSensors() {
			// populateSensors();
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
		
		function updateBuoys() {
			updateFilters();
		}
		
		function updateTimes() {
			if (filters.times.type == 'point') {
				calculatePointReadings();
			}
			updateFilters();
		}
		
		function updateSensors() {
			updateFilters();
		}
		
		function populateSensors(sensors) {
			// var sensors = server.getSensors();
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
			// console.log(filters.sensors);
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
			// var buoyReadings = {};
			// for (var i = 0; i < data.length; i++) {
			// 	var reading = data[i];
			// 	if (buoyReadings.hasOwnProperty(reading.buoy)) {
			// 		// determine which reading is closer to point
			// 		var oldReading = buoyReadings[reading.buoy].time;
			// 		var newReading = reading.timestamp;
							 
			// 		var diffOld = moment.unix(oldReading).diff(filters.times.point);
			// 		var diffNew = moment.unix(newReading).diff(filters.times.point);
					
			// 		if (Math.abs(diffNew) < Math.abs(diffOld)) {
			// 			buoyReadings[reading.buoy] = {
			// 				id: reading.id,
			// 				time: reading.timestamp
			// 			};
			// 		} 
			// 	} else {
			// 		buoyReadings[reading.buoy] = {
			// 			id: reading.id,
			// 			time: reading.timestamp
			// 		};
			// 	}
			// }
			// filters.times.pointReadings = buoyReadings;
			
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
			// var fdata = [];
			
			// Filter buoy groups first
			// filteredReadings = $filter('filter')(fdata, function(buoyGroup) {
			// 	if (!showBuoyGroup(buoyGroup)) return false;
				
			// 	return true;
			// });
			
			// Filter buoy groups
			// var enabledBuoyGroups = [];
			// data.forEach(function(buoyGroup) {
			// 	if (showBuoyGroup(buoyGroup)) {
			// 		// fdata.push({
			// 		// 	id: buoyGroup.id,
			// 		// 	name: buoyGroup.name
			// 		// });
			// 		enabledBuoyGroups.push(buoyGroup.id);
			// 	}				
			// });
			
			// data.forEach(function(buoyGroup) {
			// 	if (enabledBuoyGroups.indexOf(buoyGroup.id) != -1) {
			// 		buoyGroup.buoyInstances.forEach(function(buoyInstance) {
						
			// 		});
			// 	}
			// });
			
			// var fdata = [];
			
			// // Filter buoy groups
			// var enabledBuoyGroups = [];
			// for (var i = 0; i < filters.buoys.length; i++) {
			// 	var buoyGroup = filters.buoys[i];
			// 	if (buoyGroup.enabled) {
			// 		enabledBuoyGroups.push(buoyGroup.id);
					
			// 		var group = {};
			// 		group.id = buoyGroup.id;
			// 		group.name = buoyGroup.name;
					
			// 		// for (var j = 0; j < buoyGroup.)
			// 	}
			// }
			
			// for (var i = 0; i < data.length; i++) {
			// 	var buoyGroup = data[i];
			// 	if (enabledBuoyGroups.indexOf(buoyGroup.id) != -1) {
			// 		var group = {};
			// 		group.id = buoyGroup.id;
			// 		group.name = buoyGroup.name;
			// 		group.
					
			// 		for (var j = 0; j < buoyGroup.buoyInstances.length; j++) {
			// 			var buoyInstance = buoyGroup.buoyInstances[i];
			// 			if (buoyInstance.enabled) {
							
			// 			}
			// 		}
			// 	}
			// }
			
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
			
			// console.log('groups: ' + enabledBuoyGroups);
			// console.log('instances: ' + enabledBuoyInstances);
			// console.log('readings: ' + enabledReadings);
			
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
			
			
			
			// console.log(fdata);

			// console.log(filters.sensorInputs);
			filteredReadings = fdata;
			// console.log(filteredReadings);
			
			// filteredReadings = $filter('filter')(data, function(reading) {
			// 	if (!filterBuoys(reading)) return false;
			// 	if (!filterTimes(reading)) return false;
			// 	for (var key in filters.sensorInputs) {
			// 		if (filters.sensorInputs.hasOwnProperty(key)) {
			// 			if (!filterSensor(key, filters.sensorInputs[key], reading)) 
			// 				return false;
			// 		}
			// 	}
			// 	return true;
			// });
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
				// if (filters.times.pointReadings.hasOwnProperty(reading.buoy)) {
				// 	if (filters.times.pointReadings[reading.buoy].id != reading.id) {
				// 		return false;
				// 	}
				// }
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
				var sReading = reading.sensorReadings[i];
				if (!filterSensor(sReading)) {
					return false;
				}
				
				// for (var key in filters.sensorInputs) {
				// 	if (filters.sensorInputs.hasOwnProperty(key)) {
				// 		if (!filterSensor(reading, filters.sensorInputs[key], sReading)) 
				// 			return false;
				// 	}
				// }
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
		// function filterSensor(id, sensor, reading) {
		// 	if (!sensor.enabled) {
		// 		return true;
		// 	}
		// 	var value = parseInt(sensor.value, 10);
		// 	if (sensor.selected == ">") {
		// 		if (reading.readings[id] <= value) {
		// 			return false;
		// 		}
		// 	} else if (sensor.selected == "<") {
		// 		if (reading.readings[id] >= value) {
		// 			return false;
		// 		}
		// 	} else if (sensor.selected == "=") {
		// 		if (reading.readings[id] != value) {
		// 			return false;
		// 		}
		// 	}
		// 	return true;
		// }
		
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
	}
})();