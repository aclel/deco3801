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
		.controller('DashboardController', DashboardController);
	
	/**
			* @ngdoc object
			* @name app.dashboard.controller:DashboardController
			* @description Provides viewmodel for dashboard view
			* @requires $document
			* @requires dashboard
			* @requires map
			* @requires moment
		**/	
	function DashboardController($log, $document, dashboard, map, moment) {
		var vm = this;
		
		/** Internal variables */
		var dateFormat = "DD/MM/YY";
		var timeFormat = "h:mm A";
			
		/** Variables and methods bound to viewmodel */
		vm.loading = false;
		vm.showGraphs = false;
		vm.buoys = dashboard.buoys();
		vm.times = dashboard.times();
		vm.sensors = dashboard.sensors();
		vm.updateBuoysFilter = updateBuoysFilter;
		vm.updateTimesFilter = updateTimesFilter;
		vm.updateSensorsFilter = updateSensorsFilter;
		vm.toggleBuoyGroup = toggleBuoyGroup;
		vm.selectBuoyGroup = selectBuoyGroup;
		vm.selectBuoyInstance = selectBuoyInstance;
		vm.exportData = exportData;
		vm.toggleGraphs = toggleGraphs;

		
		activate();
		
		/** Called when controller is instantiated (dashboard page is loaded) */
		function activate() {
			vm.loading = true;
			var resolved = 0;
			dashboard.queryReadings().then(function() {
				map.updateReadings();
				if (++resolved == 2) {
					vm.loading = false;
				}
			});
			
			dashboard.querySensors().then(function() {
				vm.sensors = dashboard.sensors();
				if (++resolved == 2) {
					vm.loading = false;
				}
			});
		}
		
		function toggleGraphs() {
			var center = map.getCenter();
			console.log(center);
			vm.showGraphs = !vm.showGraphs;
			angular.element(
				document.getElementsByClassName('dashboard-panel'))
				.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
					map.setCenter(center);
					console.log(center);
			});
		}
			
		/** Initialise google map when document is loaded */
		$document.ready(function() {
			map.initialiseMap();
		});
		
		/** Toggle buoy group in list */
		function toggleBuoyGroup(buoyGroup) {
			buoyGroup.collapsed = !buoyGroup.collapsed;

			vm.showGraphs = !vm.showGraphs;
		}
		
		/** Update whether buoy group filter is enabled */
		function selectBuoyGroup(buoyGroup) {
			buoyGroup.buoyInstances.forEach(function(buoyInstance) {
				buoyInstance.enabled = buoyGroup.enabled;
			});
			
			updateBuoysFilter();
		}
		
		/** Update whether buoy instance filter is enabled,
		 *  Also handle display of indeterminate checkbox for group	
		 */
		function selectBuoyInstance(buoyGroup, buoyInstance) {
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
			
			updateBuoysFilter();
		}
		
		/** Update filters and map when buoy filters are changed */
		function updateBuoysFilter() {
			dashboard.updateBuoys();
			map.updateReadings();
		}
		
		/** Update filters and map when time filters are changed */
		function updateTimesFilter() {
			// convert input strings to moments 
			// and update vm.times, which updates reference in dashboard service
			if (timesInputsValid()) {
				var momentFormat = dateFormat + " " + timeFormat;
				
				if (vm.times.type == 'range') {
					vm.times.range.from = moment(vm.times.inputs.range.from.date
						+ " " + vm.times.inputs.range.from.time, momentFormat);
					vm.times.range.to = moment(vm.times.inputs.range.to.date
						+ " " + vm.times.inputs.range.to.time, momentFormat);
				}
				
				else if (vm.times.type == 'point') {
					vm.times.point = moment(vm.times.inputs.point.date
						+ " " + vm.times.inputs.point.time, momentFormat);
				}
				
				vm.loading = true;
				dashboard.updateTimes().then(function() {
					vm.loading = false;
					map.updateReadings();
				});
			}
		}
		
		/** Basic validation of times inputs */
		function timesInputsValid() {
			if (vm.times.type == 'since') {
				if (vm.times.inputs.since.value) {
					return true;
				}
			}
			if (vm.times.type == 'range') {
				// valid combinations: all filled, dates filled, times filled
				var fromDate = vm.times.inputs.range.from.date;
				var fromTime = vm.times.inputs.range.from.time;
				var toDate = vm.times.inputs.range.to.date;
				var toTime = vm.times.inputs.range.to.time;
				
				if (fromDate && fromTime && toDate && toTime) return true;
				if (fromDate && !fromTime && toDate && !toTime) return true;
			}
			if (vm.times.type == 'point') {
				// must have date, time is optional
				if (vm.times.inputs.point.date) {
					return true;
				}
			}
			
			return false;
		}
		
		/** Update filters and map when sensor filters are changed */
		function updateSensorsFilter() {
			dashboard.updateSensors();
			map.updateReadings();
		}
		
		/** Export data when button is clicked */
		function exportData() {
			dashboard.exportData();
		}
	}
})();