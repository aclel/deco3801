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
	
	angular.module('app.admin')
		.controller('AdminController', AdminController);
	
	function AdminController(server) {
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