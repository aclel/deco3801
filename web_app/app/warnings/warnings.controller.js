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
	
	angular.module('app.warnings')
		.controller('WarningsController', WarningsController);
	
	function WarningsController($log, server, moment) {
		var vm = this;
		
		vm.warnings = [];
		vm.buoyInstances = [];
		vm.sensorTypes = [];
		
		activate();
		
		function activate() {
			queryWarnings();
		}
		
		function queryWarnings() {
			server.getWarnings().then(function(res) {
				vm.warnings = res.data.warnings;
				queryBuoyInstances();
			}, function(res) {
				$log.error(res);
			});
		}
		
		function queryBuoyInstances() {
			server.getBuoyInstances().then(function(res) {
				vm.buoyInstances = res.data.buoyInstances;
				querySensorTypes();
			}, function(res) {
				$log.error(res);
			});
		}
		function querySensorTypes() {
			server.getSensorTypes().then(function(res) {
				vm.sensorTypes = res.data.sensorTypes;
				parseWarnings();
			}, function(res) {
				$log.error(res);
			});
		}
		
		function parseWarnings() {
			vm.warnings.forEach(function(warning) {
				// parse time
				warning.readingTime = moment(warning.readingTimestamp,
					'X').format("DD/MM/YY HH:mm A");
				// get buoy name
				for (var i = 0; i < vm.buoyInstances.length; i++) {
					var buoyInstance = vm.buoyInstances[i];
					if (buoyInstance.id == warning.warningTrigger.buoyInstanceId) {
						warning.buoyName = buoyInstance.name;
						break;
					}
				}
				// get sensor name
				for (var i = 0; i < vm.sensorTypes.length; i++) {
					var sensorType = vm.sensorTypes[i];
					if (sensorType.id == warning.warningTrigger.sensorTypeId) {
						warning.sensorName = sensorType.name;
						break;
					}
				}
			});
		}
	}
})();