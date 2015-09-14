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
		
		vm.users = [];
		vm.editUserId = -1;
		vm.startEditingUser = startEditingUser;
		vm.finishEditingUser = finishEditingUser;
		vm.deleteUser = deleteUser;
		vm.cancelEditingUser = cancelEditingUser;
		vm.startAddingUser = startAddingUser;
		vm.showDeleteButton = showDeleteButton;
		
		vm.sensors = server.getSensors();
		vm.sensorsEdit = [];
		vm.toggleEdit = toggleEdit;
		vm.sensorValid = sensorValid;
		
		activate();
		
		function activate() {
			queryUsers();
		}
		
		function queryUsers() {
			server.getUsers().then(function(res) {
				vm.users = res.data.users;
				formatLastLogin();
			}, function(res) {
				console.error(res);
			});
		}
		
		function formatLastLogin() {
			vm.users.forEach(function(user) {
				if (!user.lastLogin.Valid) {
					user.lastLogin.text = 'Never';
				} else {
					user.lastLogin.text = user.lastLogin.Time;
				}
			});
		}
		
		function startEditingUser(user) {
			vm.editUserId = user.id;
			vm.editUser = user;
		}
		
		function finishEditingUser() {
			if (vm.editUserId != -2) {
				server.updateUser(vm.editUser).then(function(res) {
					queryUsers();
				}, function(res) {
					console.error(res);
				});
			} else {
				server.addUser(vm.editUser).then(function(res) {
					queryUsers();
				}, function(res) {
					console.error(res);
				});
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editUserId = -1;
		}
		
		function cancelEditingUser() {
			if (vm.editUserId == -2) {
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editUserId = -1;
		}
		
		function deleteUser(user) {
			server.deleteUser(user.id).then(function(res) {
				queryUsers();
			}, function(res) {
				console.error(res);
			});
		}
		
		function showDeleteButton(user) {
			return ((vm.editUserId == -1 || vm.editUserId == user.id) &&
				user.id != -2);
		}
		
		function startAddingUser() {
			var tempUser = { id: -2 };
			vm.users.push(tempUser);
			startEditingUser(tempUser);
		}
		
		
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