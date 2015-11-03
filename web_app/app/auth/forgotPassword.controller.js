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
		.controller('ForgotPasswordController', ForgotPasswordController);
	
	/**
		* @ngdoc object
		* @name app.auth.controller:ForgotPasswordController
		* @description Controller for login view
		* @requires $scope
		* @requires $state
		* @requires server
	**/
	function ForgotPasswordController($rootScope, $state, server, gui) {
		var vm = this;

		/** Variables and methods bound to viewmodel */
		vm.success = -1;
		vm.waiting = false;
		vm.forgotPassword = forgotPassword;

		/** Send forgot password request to server */
		function forgotPassword() {
			vm.waiting = true;
			server.forgotPassword(vm.email).then(function(res) {
				vm.success = 1;
				vm.waiting = false;
				$rootScope.$broadcast('loading', false); // TODO (HACK)
			}, function(res) {
				vm.success = 0;
				vm.waiting = false;
				$rootScope.$broadcast('loading', false); // TODO (HACK)
			});
		}
	}
})();