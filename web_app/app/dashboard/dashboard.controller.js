(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.controller('DashboardController', DashboardController);
		
	function DashboardController($document, dashboard, map) {
		var vm = this;
			
		vm.buoys = dashboard.buoys();
		vm.times = dashboard.times();
		vm.updateBuoysFilter = updateBuoysFilter;
		vm.updateTimesFilter = updateTimesFilter;
		
		var dateFormat = "D/M/YY";
		var timeFormat = "h:mm A";
			
		$document.ready(function() {
			map.initialiseMap();
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
					vm.times.range.from = moment(vm.times.inputs.range.from.date
						+ " " + vm.times.inputs.range.from.time, momentFormat);
					vm.times.range.to = moment(vm.times.inputs.range.to.date
						+ " " + vm.times.inputs.range.to.time, momentFormat);
				} else if (vm.times.type == 'point') {
					vm.times.point = moment(vm.times.inputs.point.date
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
	}
})();