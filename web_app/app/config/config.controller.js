(function() {
	'use strict';
	
	angular.module('app.config')
		.controller('ConfigController', ConfigController);
	
	function ConfigController(server) {
		var vm = this;
		
		vm.sensors = server.getSensors();
		vm.sensorsEdit = [];
		vm.toggleEdit = toggleEdit;
		vm.sensorValid = sensorValid;
		
		for (var i = 0; i < vm.sensors.length; i++) {
			vm.sensorsEdit.push(false);
		}
		
		function toggleEdit(index) {
			if (vm.sensorsEdit[index]) {
				vm.sensors[index].unconfigured = false;
			}
			vm.sensorsEdit[index] = !vm.sensorsEdit[index];
		}
		
		function sensorValid(sensor) {
			if (!sensor.name || !sensor.units) {
				return false;
			}			
			return true;
		}
	}
})();