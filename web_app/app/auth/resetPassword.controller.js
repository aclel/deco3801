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
		.controller('ResetPasswordController', ResetPasswordController);
	
	/**
		* @ngdoc object
		* @name app.auth.controller:ResetPasswordController
		* @description Controller for login view
		* @requires $rootScope
		* @requires $state
		* @requires $sateParams
		* @requires server
		* @requires gui
	**/
	function ResetPasswordController($rootScope, $state, $stateParams, server, gui) {
		var vm = this;

		/** Variables and methods bound to viewmodel */
		vm.success = -1;
		vm.waiting = false;
		vm.resetPassword = resetPassword;

		activate();

		/** Called when controller is instantiated (view is loaded) */
		function activate() {
			if (!$stateParams.token) {
				$state.go('login');
			}
		}

		/** Send reset password request to server */
		function resetPassword() {
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				vm.waiting = true;
				server.resetPassword($stateParams.token, vm.newPassword).then(function(res) {
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
	}
})();