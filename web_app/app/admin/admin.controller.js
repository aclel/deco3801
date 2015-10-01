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
		* @requires $log
		* @requires server
	**/
	function AdminController($log, server) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.users = [];
		vm.editUserId = -1;
		vm.newBuoyName = '';
		vm.roles = ['user', 'power_user', 'system_admin'];
		vm.startEditingUser = startEditingUser;
		vm.finishEditingUser = finishEditingUser;
		vm.deleteUser = deleteUser;
		vm.cancelEditingUser = cancelEditingUser;
		vm.startAddingUser = startAddingUser;
		vm.showDeleteButton = showDeleteButton;
		vm.addBuoy = addBuoy;
		
		// vm.sensors = server.getSensorTypes();
		// vm.sensorsEdit = [];
		// vm.toggleEdit = toggleEdit;
		// vm.sensorValid = sensorValid;
		
		activate();
		
		/** Called when controller is instantiated (admin page is loaded) */
		function activate() {
			queryUsers();
		}
		
		/**
		 * Query users from the server
		 */
		function queryUsers() {
			server.getUsers().then(function(res) {
				vm.users = res.data.users;
				formatLastLogin();
			}, function(res) {
				$log.error(res);
			});
		}
		
		/**
		 * Format last login time and add it to users array
		 */
		function formatLastLogin() {
			vm.users.forEach(function(user) {
				if (!user.lastLogin.Valid) {
					user.lastLogin.text = 'Never';
				} else {
					user.lastLogin.text = moment(user.lastLogin.Time).fromNow();
				}
			});
		}
		
		/**
		 * Start editing a user, called on Edit button click
		 * @param  {object} user 
		 */
		function startEditingUser(user) {
			vm.editUserId = user.id;
			vm.editUser = user;
		}

		/**
		 * User edits are saved, and server is updated, 
		 * called on Save button click
		 */
		function finishEditingUser() {
			if (vm.editUserId != -2) {
				server.updateUser(vm.editUser).then(function(res) {
					queryUsers();
				}, function(res) {
					$log.error(res);
				});
			} else {
				server.addUser(vm.editUser).then(function(res) {
					queryUsers();
				}, function(res) {
					$log.error(res);
				});
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editUserId = -1;
		}
		
		/**
		 * User edits are discarded, called on Cancel button click
		 */
		function cancelEditingUser() {
			if (vm.editUserId == -2) {
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editUserId = -1;
		}
		
		/**
		 * User is deleted, called on Delete button click
		 * @param  {object} user
		 */
		function deleteUser(user) {
			server.deleteUser(user.id).then(function(res) {
				queryUsers();
			}, function(res) {
				$log.error(res);
			});
		}
		
		/**
		 * Determines whether to show delete button for each user row
		 * @param  {object} user
		 * @return {bool}      whether to show delete button
		 */
		function showDeleteButton(user) {
			return ((vm.editUserId == -1 || vm.editUserId == user.id) &&
				user.id != -2);
		}
		
		/**
		 * Add new row to users table and start editing, 
		 * called on Add User button click
		 */
		function startAddingUser() {
			var tempUser = { id: -2, role: vm.roles[0] };
			vm.users.push(tempUser);
			startEditingUser(tempUser);
		}
		
		/**
		 * Add new Buoy, update server, called on Add button click
		 */
		function addBuoy() {
			if (vm.newBuoyName == '') return;
			var guid = generateGuid();
			server.addBuoy(vm.newBuoyName, guid).then(function(res) {
				alert('Buoy created successfully');
			}, function(res) {
				$log.error(res);
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