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
		
	/**
		* @ngdoc service
		* @name app.dashboard.dashboard
		* @requires $log
		* @requires server
		* @requires moment
	**/
	function dashboard($log, server, moment) {
		/** Internal variables. These are preserved until page refresh. */
		// var data = [];
		var filteredReadings = [];
		// var filters = {};

		var readings = [];
		var sensors = {};
		var buoys = [];
		var times = {};

		initialiseTimes();

		/** The service methods to expose */
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
			getRelativeAge: getRelativeAge,
			exportData: exportData
		};
		
		/**
		 * Query readings from server and update internal data structures
		 * @param  {int} from unix timestamp from time
		 * @param  {int} to   unix timestamp to time
		 * @return {promise}      request promise
		 */
		function queryReadings(from, to) {
			if (!from) {
				from = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier).unix();
				to = moment().unix();
			}
			var promise = server.getReadings(from, to);
			promise.then(function(res) {
				readings = res.data.buoyGroups;
				populateBuoys();
				updateFilters();
			}, function(res) {
				$log.error(res);
			});
			return promise;
		}
		
		/**
		 * Query sensors from server and update internal data structures
		 * @return {promise} request promise
		 */
		function querySensors() {
			var promise = server.getSensorTypes();
			promise.then(function(res) {
				populateSensors(res.data.sensorTypes);
				updateFilters();
			}, function(res) {
				$log.error(res);
			});
			return promise;
		}
		
		/** Initialise filters and inputs */
		function initialiseTimes() {
			times = {
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
		}
		
		/** Populate buoys filter */
		function populateBuoys() {	
			var groups = [];
			var instances = [];

			// add groups
			for (var i = 0; i < readings.length; i++) {
				var buoyGroup = readings[i];
				groups.push(buoyGroup.id);
				var group = addBuoyGroup(buoyGroup);

				// add instances
				for (var j = 0; j < buoyGroup.buoyInstances.length; j++) {
					var buoyInstance = buoyGroup.buoyInstances[j];
					instances.push(buoyInstance.id);
					addBuoyInstance(buoyInstance, group);
				}
			}		

			// remove old buoys
			removeOldBuoyGroups(groups);
			removeOldBuoyInstances(instances);
		}

		/**
		 * Add buoy group to buoys list, don't overwrite existing groups
		 * 
		 * @param {object} buoyGroup buoyGroup to add
		 * @return {object} reference to added group
		 */
		function addBuoyGroup(buoyGroup) {
			var group = {};
			var gIndex = buoyGroupIndex(buoyGroup.id);
			if (gIndex != -1) {
				group = buoys[gIndex];
			} else {
				group.id = buoyGroup.id;
				group.name = buoyGroup.name;
				group.enabled = true;
				group.collapsed = false;
				group.indeterminate = false;
				group.buoyInstances = [];
				buoys.push(group);
			}
			return group;
		}

		/**
		 * Add buoy instance to a buoy group, don't overwrite existing instances
		 * @param {object} buoyInstance buoyInstance to add
		 * @param {object} group        buoyGroup to add the instance to
		 * @return {object} reference to added instance
		 */
		function addBuoyInstance(buoyInstance, group) {
			var instance = {};
			var gIndex = buoyGroupIndex(group.id);
			var iIndex = buoyInstanceIndex(buoyInstance.id, gIndex);
			if (iIndex == -1) {
				instance.id = buoyInstance.id;
				instance.name = buoyInstance.name;
				instance.enabled = true;
				group.buoyInstances.push(instance);
			}
			return instance;
		}

		/**
		 * Find out index of buoyGroup in buoys array
		 * @param  {int} id id of buoyGroup
		 * @return {int}    index or -1 if not found
		 */
		function buoyGroupIndex(id) {
			for (var i = 0; i < buoys.length; i++) {
				if (buoys[i].id == id) {
					return i;
				}
			}
			return -1;
		}

		/**
		 * Find out index of buoyInstance in buoyGroup in buoys array
		 * @param  {int} id  id of buoyInstance to find
		 * @param  {int} gIndex index of buoyGroup to check
		 * @return {int}     index of buoyInstance or -1 if not found
		 */
		function buoyInstanceIndex(id, gIndex) {
			if (gIndex == -1) return -1;
			for (var i = 0; i < buoys[gIndex].buoyInstances.length; i++) {
				if (buoys[gIndex].buoyInstances[i].id == id) {
					return i;
				}
			}
			return -1;
		}

		/**
		 * Remove buoyGroup from buoys list
		 * @param  {int[]} keep array of buoyGroup IDs not to remove
		 */
		function removeOldBuoyGroups(keep) {
			var remove = [];
			for (var i = 0; i < buoys.length; i++) {
				var group = buoys[i];
				if (keep.indexOf(group.id) == -1) {
					remove.push(i);
				}
			}
			for (var i = 0; i < remove.length; i++) {
				buoys.splice(remove[i], 1);
			}
		}

		/**
		 * Remove buoyInstance from buoys list
		 * @param  {int[]} keep array of buoyInstance IDs not to remove
		 */
		function removeOldBuoyInstances(keep) {
			var remove = [];
			for (var i = 0; i < buoys.length; i++) {
				var group = buoys[i];
				for (var j = 0; j < group.buoyInstances.length; j++) {
					var instance = group.buoyInstances[j];
					if (keep.indexOf(instance.id) == -1) {
						remove.push({ group: i, instance: j });
					}
				}
			}
			for (var i = 0; i < remove.length; i++) {
				buoys[remove[i].group].splice(remove[i].instance, 1);
			}
		}

		/**
		 * Return filtered readings
		 * @return {object array} filtered readings
		 */
		function getReadings() {
			return filteredReadings;
		}
		
		/**
		 * Return buoy input data structures
		 * @return {object} buoys filters and inputs
		 */
		function getBuoys() {
			return buoys;
		}
		
		/**
		 * Return time input data structures
		 * @return {object} time inputs
		 */
		function getTimes() {
			return times;
		}
		
		/**
		 * Return sensor input data structures
		 * @return {object} sensor inputs and filters
		 */
		function getSensors() {
			return sensors;
		}
		
		/** Update internal filtered readings when buoy filters changed */
		function updateBuoys() {
			updateFilters();
		}
		
		/** Update internal filtered readings when time filters changes */
		function updateTimes() {
			// query server for new times
			var from, to;
			
			if (times.type == 'since') {
				from = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier).unix();
				to = moment().unix();
			} else if (times.type == 'all') {
				from = 0;
				to = moment().unix();
			} else if (times.type == 'range') {
				from = times.range.from.unix();
				to = times.range.to.unix();
			} else if (times.type == 'point') {
				from = times.point.clone().subtract(2, 'weeks').unix();
				to = times.point.clone().add(2, 'weeks').unix();
			}
			
			var promise = queryReadings(from, to);
			promise.then(function() {
				if (times.type == 'point') {
					calculatePointReadings();
				}
				updateFilters();
			});
			return promise;
		}
		
		/** Update internal filtered readings when sensor filters changed */
		function updateSensors() {
			updateFilters();
		}
		
		/** Populate sensor input data */
		function populateSensors(data) {
			for (var i = 0; i < data.length; i++) {
				var sensor = data[i];
				
				if (sensors.hasOwnProperty(sensor.id)) continue;

				sensor.inputs = {
					enabled: false,
					options: [">", "<", "="],
					selected: ">",
					value: ""
				};

				sensors[sensor.id] = sensor;	
			}
		}
		
		/**
		 * Return the oldest reading from filtered readings
		 * @return {object} oldest reading
		 */
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
		
		/** Calculate readings closest to specified time */
		function calculatePointReadings() {
			var pointReadings = [];
			readings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					var closest = {
						id: buoyInstance.readings[0].id,
						timestamp: buoyInstance.readings[0].timestamp
					};
					buoyInstance.readings.forEach(function(reading) {
						var diffOld = moment.unix(closest.timestamp).diff(times.point);
						var diffNew = moment.unix(reading.timestamp).diff(times.point);
						if (Math.abs(diffNew) < Math.abs(diffOld)) {
							closest.id = reading.id;
							closest.timestamp = reading.timestamp;
						}
					});
					pointReadings.push(closest.id);
				});
			});
			times.pointReadings = pointReadings;
		}
		
		/** Re-filter readings based on updated filters */
		function updateFilters() {
			var fdata = [];
			
			// Get enabled buoy groups
			var enabledBuoyGroups = [];
			buoys.forEach(function(buoyGroup) {
				if (buoyGroup.enabled) {
					enabledBuoyGroups.push(buoyGroup.id);
				}
			});
			
			// Get enabled buoy instances
			var enabledBuoyInstances = [];
			buoys.forEach(function(buoyGroup) {
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
			for (var i = 0; i < readings.length; i++) {
				var buoyGroup = readings[i];
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
			readings.forEach(function(buoyGroup) {
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
		

		// function showBuoyGroup(buoyGroup) {
		// 	for (var i = 0; i < buoys.length; i++) {
		// 		var group = buoys[i];
		// 		if (buoyGroup.id == group.id) {
		// 			if (!group.enabled) {
		// 				return false;
		// 			}
		// 		}
		// 	}		
		// 	return true;
		// }
		
		/**
		 * Filter buoys from readings
		 * @param  {object} reading reading
		 * @return {bool}         include reading
		 */
		function filterBuoys(reading) {
			if (!buoys[reading.buoy]) {
				return false;
			}
			return true;
		}
		
		/**
		 * Filter readings based on timestamp
		 * @param  {object} reading reading
		 * @return {bool}         include reading
		 */
		function filterTimes(reading) {
			if (times.type == 'since') {
				var since = moment().subtract(times.inputs.since.value,
					 times.inputs.since.quantifier);
				var time = moment.unix(reading.timestamp);
				if (!time.isAfter(since)) {
					return false;
				}
			} else if (times.type == 'range') {
				var time = moment.unix(reading.timestamp);
				if (!time.isBetween(times.range.from, times.range.to)) {
					return false;
				}
			} else if (times.type == 'point') {
				if (times.pointReadings.indexOf(reading.id) == -1) {
					return false;
				}
			}
			return true;
		}
		
		/**
		 * Filter readings based on sensor filters
		 * @param  {object} reading reading
		 * @return {bool}         include reading
		 */
		function filterSensors(reading) {
			if (Object.keys(sensors).length === 0) {
				return true;
			}
			
			for (var i = 0; i < reading.sensorReadings.length; i++) {
				if (!filterSensor(reading.sensorReadings[i])) {
					return false;
				}
			}
			return true;
		}
		
		/**
		 * Filter reading based on specific sensor
		 * @param  {object} sReading sensor reading
		 * @return {bool}          include reading
		 */
		function filterSensor(sReading) {
			var sensor = sensors[sReading.sensorTypeId].inputs;
			
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
		
		/**
		 * Return 0-1 depending where reading timestamp falls based on time filters
		 * @param  {object} reading reading
		 * @return {float}         age (0 is old, 1 is new)
		 */
		function getRelativeAge(reading) {
			// returns age between 0 and 1, based on a range determined as seen below
			var time = moment.unix(reading.timestamp);
			
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
		
		/** 
		 * Calculate where number falls in range
		 * @param  {int} time time
		 * @param  {int} min  min time
		 * @param  {int} max  max time
		 * @return {float}      0-1, where time falls in range
		 */
		function calculateAgeInRange(time, min, max) {
			if (time.isBefore(min)) {
				return 0;
			} else if (!time.isBefore(max)) {
				return 1.0;
			}
			return (time.diff(min) / max.diff(min));
		}
		
		/** Export filtered readings, query server for file */
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