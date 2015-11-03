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
		.controller('LoginController', LoginController);
	
	/**
		* @ngdoc object
		* @name app.auth.controller:LoginController
		* @description Controller for login view
		* @requires $scope
		* @requires $state
		* @requires auth
		* @requires server
	**/
	function LoginController($rootScope, $state, auth, server, gui) {
		var vm = this;

		/** Variables and methods bound to viewmodel */
		vm.login = login;

		/** Send login request to server, called on Login button click */	
		function login() {
			server.login(vm.email, vm.password).then(
			function(res) {
				if (auth.loggedIn()) {
					if (!res.data.lastLogin.Valid) {
						auth.setFirstLogin(true);
						auth.setSavedPassword(vm.password);
						$state.go('change_password');
					} else {
						$state.go('dashboard');
					}
				}
				
			},
			function(res) {
				gui.alertError('Invalid email or password');
				$rootScope.$broadcast('loading', false); // TODO (HACK)
			});
		}
	}
})();