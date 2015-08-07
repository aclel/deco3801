(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.controller('DashboardController', DashboardController);
		
	function DashboardController($document, dashboard, map) {
		var vm = this;
		
		vm.buoys = dashboard.buoys();
		vm.updateBuoysFilter = updateBuoysFilter;
		
		vm.fromDate = "1430626500";
		vm.fromTime = "1430626500";
		vm.toDate = "28 May 2015";
		vm.toTime = "3:00 PM";
			
		$document.ready(function() {
			map.initialiseMap();
			map.markReadings();
		});
		
		function updateBuoysFilter(buoy) {
			dashboard.filterBuoy(buoy);
			map.updateReadings();
		}
	}
})();