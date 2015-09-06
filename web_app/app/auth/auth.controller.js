(function() {
	'use strict';
	
	angular.module('app.auth')
		.controller('AuthController', AuthController);
	
	function AuthController($rootScope, $state, auth, server) {
		var vm = this;
		
		vm.authed = auth.authed();
		vm.firstLogin = false;
		vm.login = login;
		vm.logout = logout;
		vm.changePassword = changePassword;
		
		resetForm();
		
		// Redirect to login page if not logged in, otherwise redirect from login page
		$rootScope.$on('$stateChangeStart', function(event, toState) {
			if (auth.authed()) {
				if (toState.name == 'login') {
					event.preventDefault();
					if ($state.is('login')) {
						$state.go('dashboard');
					}
				}
			} else {
				if (toState.name != 'login') {
					event.preventDefault();
					$state.go('login');
				}
			}
		});
		
		function login() {
			server.login(vm.email, vm.password).then(
			function(res) {
				if (auth.authed()) {
					vm.authed = true;
					
					if (!res.data.lastLogin.Valid) {
						$state.go('changepassword');
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
		
		function logout() {
			server.logout();
			vm.authed = false;
			$state.go('login');			
		}
		
		function changePassword() {
			// need to validate input
			if (vm.newPassword != "" && vm.newPassword == vm.confirmPassword) {
				server.changePassword(vm.newPassword);
				vm.newPassword = vm.confirmPassword = "";
			} else {
				alert("Invalid password");
			}
		}
		
		function resetForm() {
			vm.email = "andrew@dyergroup.com.au"; // placeholder
			vm.password = "4UKbD953";
		}
	}
})();