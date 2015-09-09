(function() {
	'use strict';
	
	angular.module('app.auth')
		.controller('AuthController', AuthController);
	
	function AuthController($rootScope, $state, auth, server, routerHelper) {
		var vm = this;
		
		vm.firstLogin = false;
		vm.login = login;
		vm.changePassword = changePassword;
		vm.forgotPassword = forgotPassword;
		
		activate();
		
		function activate() {
			resetForm();
		}
			
		function login() {
			server.login(vm.email, vm.password).then(
			function(res) {
				if (auth.loggedIn()) {
					if (!res.data.lastLogin.Valid) {
						$state.go('changepassword');
						vm.firstLogin = true;
					} else {
						$state.go('dashboard');
					}
					
					resetForm();
				}
				
			},
			function(res) {
				alert('Invalid email or password');
			});
		}
		
		function changePassword() {
			// need to validate input
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				server.changePassword(vm.newPassword);
				vm.newPassword = vm.confirmPassword = "";
				vm.firstLogin = false;
			} else {
				alert("Invalid password");
			}
		}
		
		function forgotPassword() {
			server.forgotPassword(vm.email);
		}
		
		function resetForm() {
			vm.email = "andrew@dyergroup.com.au"; // placeholder
			vm.password = "D9mEpnvx";
		}
	}
})();