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
		* @requires map
		* @requires moment
	**/
	function dashboard($log, $q, $rootScope, server, map, moment) {
		/** Internal variables. These are preserved until page refresh. */
		var readings = [];
		var filteredReadings = [];
		var sensors = {};
		var buoys = [];
		var times = {};
		var readingMetadata = {};

		var dateFormat = "D/M/YY";
		var timeFormat = "h:mm A";
		// palette generated from http://tools.medialab.sciences-po.fr/iwanthue/
		var colours = ["#84CBD1", "#CC4B30", "#BF54D0", "#70D84C", "#36362B",
				"#CD4075", "#553264", "#CBCC92", "#D2983C", "#6B7AD0",
				"#C78378", "#5A8A37", "#CCD446", "#72DA9E", "#598369",
				"#6D292F", "#CAB3CC", "#785F2A", "#596C87", "#C471B4"
		].reverse(); 
		var instanceColours = {};

		initialiseTimes();
		initialiseListeners();

		/** The service methods to expose */
		return {
			buoys: getBuoys,
			times: getTimes,
			sensors: getSensors,
			queryReadings: queryReadings,
			querySensors: querySensors,
			selectBuoyGroup: selectBuoyGroup,
			selectBuoyInstance: selectBuoyInstance,
			updateTimes: updateTimes,
			updateSensors: updateSensors,
			exportData: exportData,
			calculateChartData: calculateChartData,
			readingMetadata: getReadingMetadata
		};

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

		function getReadingMetadata() {
			return readingMetadata;
		}
		
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
					since: { value: 20, quantifier: "weeks", options: [
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

		function initialiseListeners() {
			$rootScope.$on('mapMarkerSelected', function(event, buoyInstance) {
				updateMap(buoyInstance);
			});
		}
		
		/** Populate buoys filter */
		function populateBuoys() {	
			var groups = [];
			var instances = [];

			// add groups
			for (var i = 0; i < readings.length; i++) {
				var buoyGroup = readings[i];
				groups.push(buoyGroup.id);
				var group = buoysFilterAddGroup(buoyGroup);

				// add instances
				for (var j = 0; j < buoyGroup.buoyInstances.length; j++) {
					var buoyInstance = buoyGroup.buoyInstances[j];
					assignInstanceColour(buoyInstance);
					instances.push(buoyInstance.id);
					buoysFilterAddInstance(buoyInstance, group);
				}
			}		

			// remove old buoys
			buoysFilterRemoveOldGroups(groups);
			buoysFilterRemoveOldInstances(instances);
		}

		/**
		 * Assign a colour to a buoy instance.
		 * Note colours are never unassigned.
		 * @param  {object} buoyInstance buoyInstance to assign colour to
		 */
		function assignInstanceColour(buoyInstance) {
			// note colours are never unassigned
			if (!instanceColours.hasOwnProperty(buoyInstance.id)) {
				if (colours.length) {
					instanceColours[buoyInstance.id] = colours.pop();
				} else {
					instanceColours[buoyInstance.id] = "#FFFFFF";
				}
			}
			buoyInstance.colour = instanceColours[buoyInstance.id];
		}

		/** Populate sensor input data */
		function populateSensors(data) {
			for (var i = 0; i < data.length; i++) {
				var sensor = data[i];

				if (sensor.archived) continue;
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
		 * Add buoy group to buoys filter array, don't overwrite existing groups
		 * 
		 * @param {object} buoyGroup buoyGroup to add
		 * @return {object} reference to added group
		 */
		function buoysFilterAddGroup(buoyGroup) {
			var group = {};
			var gIndex = buoysFilterGroupIndex(buoyGroup.id);
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
			group.name = buoyGroup.name; // always update name in case it was changed in config page
			return group;
		}

		/**
		 * Add buoy instance to a buoy group, don't overwrite existing instances
		 * @param {object} buoyInstance buoyInstance to add
		 * @param {object} group        buoyGroup to add the instance to
		 * @return {object} reference to added instance
		 */
		function buoysFilterAddInstance(buoyInstance, group) {
			var instance = {};
			var gIndex = buoysFilterGroupIndex(group.id);
			var iIndex = buoysFilterInstanceIndex(buoyInstance.id, group.id);
			if (iIndex != -1) {
				instance = buoys[gIndex].buoyInstances[iIndex];
			} else {
				instance.id = buoyInstance.id;
				instance.enabled = true;
				instance.colour = buoyInstance.colour;
				group.buoyInstances.push(instance);
			}
			instance.name = buoyInstance.name; // always update name in case it was changed in config page
			return instance;
		}

		/**
		 * Find out index of buoyGroup in buoys array
		 * @param  {int} id id of buoyGroup
		 * @return {int}    index or -1 if not found
		 */
		function buoysFilterGroupIndex(id) {
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
		 * @param  {int} gId id of buoyGroup
		 * @return {int}     index of buoyInstance or -1 if not found
		 */
		function buoysFilterInstanceIndex(id, gId) {
			var gIndex = buoysFilterGroupIndex(gId);
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
		function buoysFilterRemoveOldGroups(keep) {
			var remove = [];
			for (var i = 0; i < buoys.length; i++) {
				var group = buoys[i];
				if (keep.indexOf(group.id) == -1) {
					remove.push(i);
				}
			}
			for (var i = remove.length - 1; i >= 0; i--) {
				buoys.splice(remove[i], 1);
			}
		}

		/**
		 * Remove buoyInstance from buoys list
		 * @param  {int[]} keep array of buoyInstance IDs not to remove
		 */
		function buoysFilterRemoveOldInstances(keep) {
			// if (!buoys.length) return; doesn't do anything?
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
			for (var i = remove.length - 1; i >= 0; i--) {
				buoys[remove[i].group].buoyInstances.splice(remove[i].instance, 1);
			}
		}


		/** Update whether buoy group filter is enabled */
		function selectBuoyGroup(buoyGroup) {
			buoyGroup.buoyInstances.forEach(function(buoyInstance) {
				buoyInstance.enabled = buoyGroup.enabled;
			});
			updateFilters();
		}

		/** Update whether buoy instance filter is enabled */
		function selectBuoyInstance(buoyGroup) {
			updateBuoyGroupSelectState(buoyGroup);			
			updateFilters();
		}

		/** Also handle display of indeterminate checkbox for group */
		function updateBuoyGroupSelectState(buoyGroup) {
			var allTrue = true;
			var allFalse = true;
			
			buoyGroup.buoyInstances.forEach(function(instance) {
				if (instance.enabled) {
					allFalse = false;
				} else {
					allTrue = false;
				}
			});
			
			if (allFalse) {
				buoyGroup.enabled = false;
			} else {
				buoyGroup.enabled = true;
			}
			
			if (allFalse || allTrue) {
				buoyGroup.indeterminate = false;
			} else {
				buoyGroup.indeterminate = true;
			}
		}

		/** Update filters and map when time filters are changed */
		function updateTimes() {
			var defer = $q.defer();
			// convert input strings to moments 
			// and update vm.times, which updates reference in dashboard service
			if (timesInputsValid()) {
				var momentFormat = dateFormat + " " + timeFormat;
				
				if (times.type == 'range') {
					times.range.from = moment(times.inputs.range.from.date
						+ " " + times.inputs.range.from.time, momentFormat);
					times.range.to = moment(times.inputs.range.to.date
						+ " " + times.inputs.range.to.time, momentFormat);
				}
				
				else if (times.type == 'point') {
					times.point = moment(times.inputs.point.date
						+ " " + times.inputs.point.time, momentFormat);
				}
				
				queryReadingTimes().then(function() {
					defer.resolve();	
				}, function() {
					defer.reject();
				});
			}
			return defer.promise;
		}

		/** Basic validation of times inputs */
		function timesInputsValid() {
			if (times.type == 'since') {
				if (times.inputs.since.value) {
					return true;
				}
			}
			if (times.type == 'range') {
				// valid combinations: all filled, dates filled, times filled
				var fromDate = times.inputs.range.from.date;
				var fromTime = times.inputs.range.from.time;
				var toDate = times.inputs.range.to.date;
				var toTime = times.inputs.range.to.time;
				
				if (fromDate && fromTime && toDate && toTime) return true;
				if (fromDate && !fromTime && toDate && !toTime) return true;
			}
			if (times.type == 'point') {
				// must have date, time is optional
				if (times.inputs.point.date) {
					return true;
				}
			}
			
			return false;
		}
		
		/** Update internal filtered readings when time filters changes */
		function queryReadingTimes() {
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
			});
			return promise;
		}
		
		/** Update internal filtered readings when sensor filters changed */
		function updateSensors() {
			updateFilters();
		}
		
		/** Calculate readings closest to specified time */
		function calculatePointReadings() {
			times.pointReadings = [];
			if (!readings) return;

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
					times.pointReadings.push(closest.id);
				});
			});
		}
		
		/** Re-filter readings based on updated filters */
		function updateFilters() {
			filteredReadings = [];
			var numInstances = 0, numReadings = 0;
			if (!readings.length || !Object.keys(sensors).length) {
				map.hideDisabledMarkers([]); // hide all markers
				return;
			}

			for (var i = 0; i < readings.length; i++) {
				var buoyGroup = readings[i];
				if (!buoyGroupEnabled(buoyGroup.id)) continue;
				var group = addBuoyGroup(buoyGroup);

				for (var j = 0; j < buoyGroup.buoyInstances.length; j++) {
					var buoyInstance = buoyGroup.buoyInstances[j];
					if (!buoyInstanceEnabled(buoyInstance.id, buoyGroup.id)) continue;
					numInstances++;
					var instance = addBuoyInstance(buoyInstance, group);

					for (var k = 0; k < buoyInstance.readings.length; k++) {
						var reading = buoyInstance.readings[k];
						if (!showReading(reading)) continue;
						numReadings++;
						instance.readings.push(reading);
					}
				}
			}
			readingMetadata.numInstances = numInstances;
			readingMetadata.numReadings = numReadings;
			updateMap();
		}

		/**
		 * Check whether a buoy group should be shown
		 * @param  {int} id id of buoy group to check
		 * @return {bool}    true if it should be shown, false if not
		 */
		function buoyGroupEnabled(id) {
			return buoys[buoysFilterGroupIndex(id)].enabled;
		}

		/**
		 * Check whether a buoy instance should be shown
		 * @param  {int} id id of buoy instance to check
		 * @param {int} gId id of group instance is in
		 * @return {bool}    true if it should be shown, false if not
		 */
		function buoyInstanceEnabled(id, gId) {
			var gIndex = buoysFilterGroupIndex(gId);
			var iIndex = buoysFilterInstanceIndex(id, gId);
			return buoys[gIndex].buoyInstances[iIndex].enabled;
		}

		/**
		 * Add a buoy group to filtered readings
		 * @param {object} buoyGroup buoy group to add
		 * @return {object} reference to added group
		 */
		function addBuoyGroup(buoyGroup) {
			var group = {};
			filteredReadings.push(group);
			group.id = buoyGroup.id;
			group.name = buoyGroup.name;
			group.buoyInstances = [];
			return group;
		}

		/**
		 * Add a buoy instance to filtered readings
		 * @param {object} buoyInstance buoy instance to add
		 * @param {object} group the group it should be added to
		 * @return {object} reference to added instance
		 */
		function addBuoyInstance(buoyInstance, group) {
			var instance = {};
			group.buoyInstances.push(instance);
			instance.id = buoyInstance.id;
			instance.name = buoyInstance.name;
			instance.colour = buoyInstance.colour;
			instance.readings = [];
			return instance;
		}

		/**
		 * Check whether or not to show a reading based on other filters
		 * @param  {object} reading reading to check
		 * @return {bool}         true if the reading should be show, else false
		 */
		function showReading(reading) {
			if (!filterTimes(reading)) return false;
			if (!filterSensors(reading)) return false;
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
		function getRelativeAge(reading, buoyInstance) {
			// returns age between 0 and 1, based on a range determined as seen below
			var time = moment.unix(reading.timestamp);
			var min, max;

			// calculate age based on instance readings
			if (buoyInstance) {
				min = moment.unix(buoyInstance.readings[0].timestamp);
				max = moment.unix(
					buoyInstance.readings[buoyInstance.readings.length - 1].timestamp
					);

			// otherwise calculate age based on time filters
			} else {
				if (times.type == 'all') {
					// range: from 2 weeks ago until now
					max = moment();
					min = max.clone().subtract(2, 'weeks');
				
				} else if (times.type == 'since') {
					max = moment();
					min = moment().subtract(times.inputs.since.value,
						 times.inputs.since.quantifier);
						
				} else if (times.type == 'range') {
					// range: range of time filters
					max = times.range.to;
					min = times.range.from;
				
				}  else if (times.type == 'point') {
					// range: from two weeks before point until point
					if (times.point === null) {
						return 1.0;
					}
					max = times.point;
					min = max.clone().subtract(2, 'weeks');
				}
			}
			
			return calculateAgeInRange(time, min, max);
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

		/** 
		 * Determine content to set for marker popup
		 * @param  {object} reading      reading
		 * @param  {object} buoyInstance buoy instance
		 * @return {string}              popup content
		 */
		function popupContent(reading, buoyInstance) {
			var formattedTime = moment.unix(reading.timestamp)
										.format('D MMMM h:mm A');
										
			var content = "<div>" +
				"<h5><strong>" + buoyInstance.name + "</strong></h5>" +
				"<em>" + formattedTime + "</em><br>" +
				"<table class='popup-table'><tbody>";
			

			reading.sensorReadings.forEach(function(sensorReading) {
				content += "<tr><td>" + 
					sensors[sensorReading.sensorTypeId].name +
					": </td><td class='right'>" + sensorReading.value + " " +
					sensors[sensorReading.sensorTypeId].unit + "</td></tr>";
			});			
				
			content += "</tbody></table></div>";
				
			return content;
		}

		/**
		 * Update the map to show markers for filtered readings
		 */
		function updateMap(selectedInstance) {
			var enabledMarkers = [];
			var insNum = 0;

			// show a marker for every reading
			// filteredReadings.forEach(function(buoyGroup) {
			// 	buoyGroup.buoyInstances.forEach(function(buoyInstance) {
			// 		buoyInstance.readings.forEach(function(reading) {
			// 			enabledMarkers.push(reading.id);
			// 			map.showMarker(reading, buoyInstance,
			// 				insNum, getRelativeAge(reading),
			// 				popupContent(reading, buoyInstance));
			// 		});
			// 		insNum++;
			// 	});
			// });

			// if a marker has been selected, display all readings for that instance
			if (selectedInstance) {
				// map.hideDisabledMarkers([]); // hide all markers
				selectedInstance.readings.forEach(function(reading) {
					insNum++;
					enabledMarkers.push(reading.id);
					map.showMarker(reading, selectedInstance,
						getRelativeAge(reading, selectedInstance),
						popupContent(reading, selectedInstance));
				});
			}

			// show a marker for the most recent reading for every buoy instance
			filteredReadings.forEach(function(buoyGroup) {
				buoyGroup.buoyInstances.forEach(function(buoyInstance) {
					if (selectedInstance) {
						if (selectedInstance.id == buoyInstance.id) return;
					}

					var reading = buoyInstance.readings[buoyInstance.readings.length - 1];
					insNum++;
					enabledMarkers.push(reading.id);
					map.showMarker(reading, buoyInstance,
						1, //getRelativeAge(reading, buoyInstance),
						popupContent(reading, buoyInstance));
				});
			});

			map.hideDisabledMarkers(enabledMarkers);
		}


		/**
		 * Displays chart with given buoyInstance
		 * @param  {object} buoyInstance buoy instance
		 */
		function calculateChartData(buoyInstance) {
		    var charts = {};
		    console.log(filteredReadings);
		    console.log(buoyInstance);
		    buoyInstance.readings.forEach(function(reading) {
		    	
		        reading.sensorReadings.forEach(function(sReading) {

		            var sensorName = sensors[sReading.sensorTypeId].name;
		            //if no sensorReadings exist
		            if (!charts.hasOwnProperty(sensorName)) {
		                charts[sensorName] = { timestamps: [], data: [[]], 
		                	options: {
		                		scaleOverride : true,
		                		scaleStartValue: sensors[sReading.sensorTypeId].lowerBound,
		                		scaleSteps : 10,
		                		scaleStepWidth : (sensors[sReading.sensorTypeId].upperBound)/10,
		                		scaleIntegersOnly: true,
		                		tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>"
		                	}
		            	};
		            }
		            //then push to respective sensorReadings
		            charts[sensorName].timestamps.push(moment.unix(reading.timestamp).format("h:mma D/M"));
		            
		            //default chart not to display "Averaged" tag
		            charts[sensorName].averaged = false;

		            //prevents chart data point going above upperbound of chart 
		            //TODO: refactor so data average doesnt get brought down in averageReadings
		            if (sReading.value > sensors[sReading.sensorTypeId].upperBound){
		        		charts[sensorName].data[0].push(sensors[sReading.sensorTypeId].upperBound);
		            } else {
		            	charts[sensorName].data[0].push(sReading.value);
		            }
		            
		        });
		    });
		    
			
			averageReadings(charts);
		    return charts;
		}

		/**
		 * Handles large data sets for the charts
		 * ymax is the amount of labels in the y axis
		 * Does a moving average
		 */
		function averageReadings(charts){
			
			for (var key in charts){

				//sets the maxamount of values in the Y-axis of the charts
				var ymax = 15;

				var division = Math.floor(charts[key].timestamps.length/ymax);
				
				var averageData = [];
				var averageRespectiveTime = [];

				if (charts[key].timestamps.length > 20){
					var averagedReading = 0;
					for (var i = 0; i < charts[key].timestamps.length; i++){
						if (i == 0 || i % division != 0){
							var num = charts[key].data[0][i].valueOf();
							// console.log(i + "th element: reading = " +charts[key].data[0][i])
							averagedReading += charts[key].data[0][i];
						} else {
							averagedReading /= division;
							averageData.push(Math.floor(averagedReading));
							// console.log(averagedReading);
							averagedReading = charts[key].data[0][i];
							averageRespectiveTime.push(moment(charts[key].timestamps[i], "h:mma D/M").format( "h:00a D/M"));
						}
					}
					charts[key].timestamps = averageRespectiveTime;
					charts[key].data[0] = averageData;
					charts[key].averaged = true;
				}

			}
			return charts;
		}
	}
})();