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
		.controller('UsersController', UsersController);
	
	/**
		* @ngdoc object
		* @name app.admin.controller:UsersController
		* @description Provides viewmodel for admin view
		* @requires server
	**/
	function UsersController($scope, server, gui) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.roles = ['user', 'power_user', 'system_admin'];
		vm.users = [];
		vm.editId = -1;
		vm.editExisting = editExisting;
		vm.editSave = editSave;
		vm.editDelete = editDelete;
		vm.editCancel = editCancel;
		vm.editNew = editNew;
		vm.showDeleteButton = showDeleteButton;
		vm.confirmDelete  = confirmDelete;
		
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
				gui.alertBadResponse(res);
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
		function editExisting(user) {
			vm.editId = user.id;
			vm.editObj = user;
		}

		/**
		 * User edits are saved, and server is updated, 
		 * called on Save button click
		 */
		function editSave() {
			if (vm.editId != -2) {
				server.updateUser(vm.editObj).then(function(res) {
					queryUsers();
					gui.alertSuccess('User updated.');
				}, function(res) {
					gui.alertBadResponse(res);
				});
			} else {
				server.addUser(vm.editObj).then(function(res) {
					queryUsers();
					gui.alertSuccess('User added.');
				}, function(res) {
					gui.alertBadResponse(res);
				});
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editId = -1;
		}
		
		/**
		 * User edits are discarded, called on Cancel button click
		 */
		function editCancel() {
			if (vm.editId == -2) {
				vm.users.splice(vm.users.length - 1, 1);
			}
			vm.editId = -1;
		}
		
		/**
		 * User is deleted, called on Confirm button click in delete modal
		 * @param  {object} user user to delete
		 */
		function confirmDelete(user) {
			server.deleteUser(user.id).then(function(res) {
				queryUsers();
				gui.alertSuccess('User deleted.');
			}, function(res) {
				gui.alertBadResponse(res);
			});
		}

		/**
		 * Shows a delete confirmation, called on Delete button click
		 * @param  {object} user user to delete
		 */
		function editDelete(user) {
			vm.deleteObject = user;
			vm.deleteType = 'user';
			vm.deleteName = user.email;
			gui.confirmDelete($scope);
		}
		
		/**
		 * Determines whether to show delete button for each user row
		 * @param  {object} user
		 * @return {bool}      whether to show delete button
		 */
		function showDeleteButton(user) {
			return ((vm.editId == -1 || vm.editId == user.id) &&
				user.id != -2);
		}
		
		/**
		 * Add new row to users table and start editing, 
		 * called on Add User button click
		 */
		function editNew() {
			var tempUser = { id: -2, role: vm.roles[0] };
			vm.users.push(tempUser);
			editExisting(tempUser);
		}
	}
})();