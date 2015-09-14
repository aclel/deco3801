(function() {
	'use strict';
	
	angular.module('app.warnings')
		.controller('WarningsController', WarningsController);
	
	function WarningsController(server) {
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
				console.error(res);
			});
		}
		
		function queryBuoyInstances() {
			server.getBuoyInstances().then(function(res) {
				vm.buoyInstances = res.data.buoyInstances;
				querySensorTypes();
			}, function(res) {
				console.error(res);
			});
		}
		function querySensorTypes() {
			server.getSensorTypes().then(function(res) {
				vm.sensorTypes = res.data.sensorTypes;
				parseWarnings();
			}, function(res) {
				console.error(res);
			});
		}
		
		function parseWarnings() {
			vm.warnings.forEach(function(warning) {
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