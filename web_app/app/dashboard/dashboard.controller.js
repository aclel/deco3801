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
		* @requires $log
		* @requires $document
		* @requires $scope
		* @requires dashboard
		* @requires map
	**/	
	function DashboardController($log, $document, $scope, dashboard, map) {
		var vm = this;

		/** Used to determine when initial requests have returned */
		var resolved = 0;
		var chartObjects = [];
		
		/** Variables and methods bound to viewmodel */
		vm.showGraphs = false;
		vm.showCharts = false;
		vm.buoys = dashboard.buoys(); // binds reference
		vm.times = dashboard.times(); // binds reference
		vm.sensors = dashboard.sensors(); // binds reference
		vm.charts = {};
		vm.readingMetadata = dashboard.readingMetadata(); // binds reference
		vm.selectBuoyGroup = dashboard.selectBuoyGroup;
		vm.selectBuoyInstance = dashboard.selectBuoyInstance;
		vm.updateSensors = dashboard.updateSensors;
		vm.updateTimes = updateTimes;
		vm.exportData = dashboard.exportData;
		vm.toggleGraphs = toggleGraphs;
		
		activate();

		/** Called when controller is instantiated (dashboard page is loaded) */
		function activate() {
			resolved = 0;

			queryReadings();
			querySensors();

			// set up chart listeners
			$scope.$on('mapMarkerSelected', function(event, buoyInstance) {
				if (vm.selectedBuoy && buoyInstance) {
					if (vm.selectedBuoy.id === buoyInstance.id) { return; }
				}
				chartObjects = [];
				vm.charts = dashboard.calculateChartData(buoyInstance);
				$scope.$apply(function() {
					vm.selectedBuoy = buoyInstance;
				});
			});
			$scope.$on('create', function(event, chart) {
				chartObjects.push(chart);
			});
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
		
		/** Update time filters */
		function updateTimes() {
			dashboard.updateTimes().then(function() {
				vm.charts = dashboard.calculateChartData(vm.selectedBuoy);
			});
		}
		
		/** Expand/contract graphs pane and update map */
		function toggleGraphs() {
			if (vm.showCharts) {
				vm.showCharts = false;
			}
			vm.showGraphs = !vm.showGraphs;
			angular.element(
				document.getElementsByClassName('dashboard-panel'))
				.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
					// finish expanding/contracting
					resizeCharts();
			});
		}

		/** Resize all charts */
		function resizeCharts() {
			if (!vm.showGraphs) { return; }
			$scope.$apply(function() {
				vm.showCharts = true;
			});
			chartObjects.forEach(function(chart) {
				chart.resize(chart.render, true);
			});
		}
			
		/** Initialise google map when document is loaded */
		$document.ready(function() {
			map.initialiseMap();
		});
	}
})();