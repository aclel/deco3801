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
	**/	
	function DashboardController($log, $document, dashboard, map) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.buoys = dashboard.buoys(); // binds reference
		vm.times = dashboard.times(); // binds reference
		vm.sensors = dashboard.sensors(); // binds reference
		vm.selectBuoyGroup = dashboard.selectBuoyGroup;
		vm.selectBuoyInstance = dashboard.selectBuoyInstance;
		vm.updateSensors = dashboard.updateSensors;
		vm.updateTimes = dashboard.updateTimes;
		vm.exportData = dashboard.exportData;
		
		activate();
		
		/** Called when controller is instantiated (dashboard page is loaded) */
		function activate() {
			queryReadings();
			querySensors();
		}

		/** Query readings and update display */
		function queryReadings() {
			dashboard.queryReadings();
		}

		/** Bind sensor information to vm */
		function querySensors() {
			dashboard.querySensors().then(function() {
				vm.sensors = dashboard.sensors();
			});
		}
			
		/** Initialise google map when document is loaded */
		$document.ready(function() {
			map.initialiseMap();
		});
	}
})();