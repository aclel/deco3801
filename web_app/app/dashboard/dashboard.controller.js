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
			
		$document.ready(function() {
			map.initialiseMap();
			map.markReadings();
		});
		
		function updateBuoysFilter(buoy) {
			dashboard.filterBuoy(buoy);
			map.updateReadings();
		}
		
		function updateTimesFilter() {	
			// make sure all time inputs have a value when filtering on times
			if (vm.times.from.date && vm.times.from.time
					&& vm.times.to.date && vm.times.to.time) {
				dashboard.filterTimes('range', vm.times);
			} else {
				dashboard.filterTimes('all');
			}
			
			map.updateReadings();
		}
	}
})();