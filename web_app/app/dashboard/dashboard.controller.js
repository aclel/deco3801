(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.controller('DashboardController', DashboardController);
		
	function DashboardController($document, dashboard, map) {
		var vm = this;
		
		vm.buoys = dashboard.buoys();
		vm.timeFilterType = 'all';
		vm.times = dashboard.times();
		vm.updateBuoysFilter = updateBuoysFilter;
		vm.updateTimesFilter = updateTimesFilter;
			
		$document.ready(function() {
			map.initialiseMap();
			map.markReadings();
		});
		
		function updateBuoysFilter(buoy) {
			dashboard.filterBuoy(buoy);
			map.updateReadings();
		}
		
		function updateTimesFilter() {
			if (vm.timeFilterType == 'all') {
				dashboard.filterTimes('all');
			} else if (vm.timeFilterType == 'range') {
				// make sure all time inputs have a value when filtering on times
				if (vm.times.from.date && vm.times.from.time
						&& vm.times.to.date && vm.times.to.time) {
					dashboard.filterTimes(vm.timeFilterType, vm.times);
				} else {
					dashboard.filterTimes('all');
				}
			} else if (vm.timeFilterType == 'point') {
				if (vm.times.point.date && vm.times.point.time) {
					dashboard.filterTimes(vm.timeFilterType, vm.times);
				} else {
					dashboard.filterTimes('all');
				}
			}
			
			map.updateReadings();
		}
	}
})();