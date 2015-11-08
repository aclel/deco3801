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
	
	angular.module('app.auth')
		.controller('ChangePasswordController', ChangePasswordController);
	
	/**
		* @ngdoc object
		* @name app.auth.controller:ChangePasswordController
		* @description Controller for login view
		* @requires $scope
		* @requires $state
		* @requires server
	**/
	function ChangePasswordController($rootScope, server, auth, gui) {
		var vm = this;

		/** Variables and methods bound to viewmodel */
		vm.success = -1;
		vm.waiting = false;
		vm.firstLogin = auth.getFirstLogin();
		vm.changePassword = changePassword;
		vm.tryAgain = tryAgain;

		activate();

		function activate() {
			var savedPassword = auth.getSavedPassword();
			if (savedPassword != "") {
				// password carried over from first login
				vm.currentPassword = savedPassword;
				auth.setSavedPassword("");
			}
		}

		/** Send change password request to server */
		function changePassword() {
			// need to validate input
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				vm.waiting = true;
				server.changePassword(vm.currentPassword, vm.newPassword).then(function(res) {
					// vm.firstLogin = false;
					auth.setFirstLogin(false);
					vm.success = 1;
					vm.waiting = false;
					$rootScope.$broadcast('loading', false); // TODO (HACK)
				}, function(res) {
					vm.success = 0;
					vm.waiting = false;
					$rootScope.$broadcast('loading', false); // TODO (HACK)
				});
			} else {
				gui.alertError("Passwords do not match.");
			}
		}

		function tryAgain() {
			vm.success = -1;
			resetPasswordForm();
		}

		/** Reset change password form */
		function resetPasswordForm() {
			vm.currentPassword = "";
			vm.newPassword = "";
			vm.confirmPassword = "";
		}
	}
})();