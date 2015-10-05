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
		.controller('AuthController', AuthController);
	
	/**
		* @ngdoc object
		* @name app.auth.controller:AuthController
		* @description Controller for authentication across entire app
		* @requires $scope
		* @requires $state
		* @requires $stateParams
		* @requires auth
		* @requires server
		* @requires routeHelper
	**/
	function AuthController($scope, $state, $stateParams, auth, server, routerHelper) {
		var vm = this;
		
		/** Variables and methods bound to viewmodel */
		vm.firstLogin = false;
		vm.login = login;
		vm.forgotResponse =- 1;
		vm.changePasswordResponse = -1;
		vm.waiting = false;
		vm.changePassword = changePassword;
		vm.forgotPassword = forgotPassword;
		vm.resetPassword = resetPassword;
		
		activate();
		
		/** Called when controller is instantiated */
		function activate() {
			resetLoginForm();
			$scope.$on('$stateChangeSuccess', stateLoaded);
		}

		/** Called when a state is loaded, used to reset views */
		function stateLoaded() {
			if ($state.is('change_password') ||
					$state.is('reset_password') ||
					$state.is('forgot_password')) {
				vm.changePasswordResponse = -1;
				vm.forgotResponse = -1;
				vm.waiting = false;
				resetPasswordForm();
			}
		}
		
		/** Send login request to server, called on Login button click */	
		function login() {
			server.login(vm.email, vm.password).then(
			function(res) {
				if (auth.loggedIn()) {
					if (!res.data.lastLogin.Valid) {
						// $state.go('changepassword');
						vm.firstLogin = true;
					} else {
						$state.go('dashboard');
					}
					resetLoginForm();
				}
				
			},
			function(res) {
				alert('Invalid email or password');
			});
		}
		
		/** Send change password request to server */
		function changePassword() {
			vm.waiting = true;
			// need to validate input
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				server.changePassword(vm.currentPassword, vm.newPassword).then(function(res) {
					vm.changePasswordResponse = 0;
				}, function(res) {
					vm.changePasswordResponse = 1;
				});
				vm.firstLogin = false;
			} else {
				alert("Invalid password");
			}
		}

		/** Send reset password request to server */
		function resetPassword() {
			vm.waiting = true;
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				server.resetPassword($stateParams.token + "=", vm.newPassword).then(function(res) {
					vm.changePasswordResponse = 0;
				}, function(res) {
					vm.changePasswordResponse = 1;
				});
			} else {
				alert("Invalid password");
			}
		}
		
		/** Send forgot password request to server */
		function forgotPassword() {
			vm.waiting = true;
			server.forgotPassword(vm.email).then(function(res) {
				vm.forgotResponse = 0;
				resetLoginForm();
			}, function(res) {
				vm.forgotResponse = 1;
				resetLoginForm();
			});
		}
		
		/** Reset login form */
		function resetLoginForm() {
			vm.email = "andrew@dyergroup.com.au"; // placeholder
			vm.password = "D9mEpnvx";
		}

		/** Reset change password form */
		function resetPasswordForm() {
			vm.currentPassword = "";
			vm.newPassword = "";
			vm.confirmPassword = "";
		}
	}
})();