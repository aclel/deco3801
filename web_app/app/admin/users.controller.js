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
		* @description Provides viewmodel for Users tab on admin view
		* @requires $scope
        * @requires server
        * @requires gui
	**/
	function UsersController($scope, server, gui, auth) {
		var vm = this;

		/** Internal variables */
        var editOriginal;
		
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
			saveOriginal(user);
			vm.editId = user.id;
			vm.editObj = user;
			gui.focus('editExisting');
		}

		/**
		 * User edits are saved, and server is updated, 
		 * called on Save button click
		 */
		function editSave() {
			if (!inputValid()) return;
			if (vm.editId != -2) {
				var user = vm.editObj.email;
				server.updateUser(vm.editObj).then(function(res) {
					queryUsers();
					if (auth.currentUser() == user) {
						gui.alertSuccess('User updated. Please logout and login again to update your user restrictions.');
					} else {
						gui.alertSuccess('User updated.');
					}
				}, function(res) {
					gui.alertBadResponse(res);
				});
			} else {
				vm.editObj.id = -3;
				server.addUser(vm.editObj).then(function(res) {
					queryUsers();
					gui.alertSuccess('User added.');
				}, function(res) {
					gui.alertBadResponse(res);
					vm.users.splice(vm.users.length - 1, 1);
				});
			}
			vm.editId = -1;
		}

		/**
         * Validate input
         * @return {boolean} true if input is valid, else false
         */
		function inputValid() {
            if (!vm.editObj.email) return false;
            if (!/[\w-]+@([\w-]+\.)+[\w-]+/.test(vm.editObj.email)) return false;
            return true;
        }
		
		/**
		 * User edits are discarded, called on Cancel button click
		 */
		function editCancel() {
			if (vm.editId == -2) {
				vm.users.splice(vm.users.length - 1, 1);
			}
			restoreOriginal();
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
			gui.focus('editNew');
		}

		/**
         * Save an object details so it can be restored if an edit is cancelled
         * @param  {object} obj object to save
         */
		function saveOriginal(obj) {
            editOriginal = JSON.parse(JSON.stringify(obj));
        }

        /**
         * Restore an object details if an edit was cancelled
         */
        function restoreOriginal() {
            if (!editOriginal) { return; }
            vm.editObj.firstName = editOriginal.firstName;
            vm.editObj.lastName = editOriginal.lastName;
            vm.editObj.role = editOriginal.role;
        }
	}
})();