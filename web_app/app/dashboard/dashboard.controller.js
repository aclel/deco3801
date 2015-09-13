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
		
	function DashboardController($document, dashboard, map, moment) {
		var vm = this;
		
		var dateFormat = "D/M/YY";
		var timeFormat = "h:mm A";
			
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
		
		activate();
		
		function activate() {
			dashboard.queryReadings().then(function() {
				vm.buoys = dashboard.buoys();
				vm.times = dashboard.times();
				
				dashboard.updateFilters();
				map.updateReadings();
			});
			
			dashboard.querySensors().then(function() {
				vm.sensors = dashboard.sensors();
				
				// dashboard.updateFilters();
				// map.updateReadings();
			});
		}
			
		$document.ready(function() {
			map.initialiseMap();
		});
		
		function toggleBuoyGroup(buoyGroup) {
			buoyGroup.collapsed = !buoyGroup.collapsed;
		}
		
		function selectBuoyGroup(buoyGroup) {
			buoyGroup.buoyInstances.forEach(function(buoyInstance) {
				buoyInstance.enabled = buoyGroup.enabled;
			});
			
			updateBuoysFilter();
		}
		
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
		
		function updateBuoysFilter() {
			dashboard.updateBuoys();
			map.updateReadings();
		}
		
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
				
				dashboard.updateTimes().then(function() {
					map.updateReadings();
				});
			}
		}
		
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
				// if (fromDate && !fromTime && toDate && !toTime) return true;
				// if (fromDate && fromTime && toDate && toTime) return true;
			}
			if (vm.times.type == 'point') {
				// must have date, time is optional
				if (vm.times.inputs.point.date) {
					return true;
				}
			}
			
			return false;
		}
		
		function updateSensorsFilter() {
			dashboard.updateSensors();
			map.updateReadings();
		}
		
		function exportData() {
			dashboard.exportData();
		}
	}
})();