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
	
	/**
		* @ngdoc object
		* @name app.admin.controller:AdminController
		* @description Provides viewmodel for admin view
		* @requires server
	**/
	function AdminController($scope, server, gui) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.newBuoyName = '';
		vm.addBuoy = addBuoy;
		
		// vm.sensors = server.getSensorTypes();
		// vm.sensorsEdit = [];
		// vm.toggleEdit = toggleEdit;
		// vm.sensorValid = sensorValid;
		
		activate();
		
		/** Called when controller is instantiated (admin page is loaded) */
		function activate() {
		}

		/**
		 * Add new Buoy, update server, called on Add button click
		 */
		function addBuoy() {
			if (vm.newBuoyName == '') return;
			var guid = generateGuid();
			server.addBuoy(vm.newBuoyName, guid).then(function(res) {
				gui.alertSuccess('Buoy created.');
			}, function(res) {
				gui.alertBadResponse(res);
			});
			vm.newBuoyName = '';
		}
		
		/** Returns a GUID */
		function generateGuid() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				return v.toString(16);
			});
		}
		
		
		
		// for (var i = 0; i < vm.sensors.length; i++) {
		// 	vm.sensorsEdit.push(false);
		// }
		
		// function toggleEdit(index) {
		// 	if (vm.sensorsEdit[index]) {
		// 		vm.sensors[index].unconfigured = false;
		// 	}
		// 	vm.sensorsEdit[index] = !vm.sensorsEdit[index];
		// }
		
		// function sensorValid(sensor) {
		// 	if (!sensor.name || !sensor.units) {
		// 		return false;
		// 	}			
		// 	return true;
		// }
	}
})();