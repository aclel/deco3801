(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.controller('DashboardController', DashboardController);
		
	function DashboardController($document, dashboard, map, moment) {
		var vm = this;
			
		vm.buoys = dashboard.buoys();
		vm.times = dashboard.times();
		vm.sensors = dashboard.sensors();
		vm.updateBuoysFilter = updateBuoysFilter;
		vm.updateTimesFilter = updateTimesFilter;
		vm.updateSensorsFilter = updateSensorsFilter;
		
		var dateFormat = "D/M/YY";
		var timeFormat = "h:mm A";
		
		activate();
		
		function activate() {
				dashboard.initialise().then(function() {
				vm.buoys = dashboard.buoys();
				vm.times = dashboard.times();
				vm.sensors = dashboard.sensors();
				
				dashboard.updateFilters();
				map.updateReadings();
			});
		}
			
		$document.ready(function() {
			map.initialiseMap();
			// dashboard.updateFilters();
			// map.updateReadings();
		});
		
		function updateBuoysFilter(id, enabled) {
			vm.buoys[id] = enabled;
			dashboard.updateBuoys();
			map.updateReadings();
		}
		
		function updateTimesFilter() {
			// convert input strings to moments 
			// and update vm.times, which updates reference in dashboard service
			if (timesInputsValid()) {
				var momentFormat = dateFormat + " " + timeFormat;
				if (vm.times.type == 'range') {
					vm.times.range.from = moment.call(vm.times.inputs.range.from.date
						+ " " + vm.times.inputs.range.from.time, momentFormat);
					vm.times.range.to = moment.call(vm.times.inputs.range.to.date
						+ " " + vm.times.inputs.range.to.time, momentFormat);
				} else if (vm.times.type == 'point') {
					vm.times.point = moment.call(vm.times.inputs.point.date
						+ " " + vm.times.inputs.point.time, momentFormat);
				}
				
				dashboard.updateTimes();
				map.updateReadings();
			}
		}
		
		function timesInputsValid() {
			if (vm.times.type == 'all') {
				return true;
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
	}
})();