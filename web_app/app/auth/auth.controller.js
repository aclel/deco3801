(function() {
	'use strict';
	
	angular.module('app.auth')
		.controller('AuthController', AuthController);
	
	function AuthController($rootScope, $state, auth, server, routerHelper) {
		var vm = this;
		
		vm.authed = auth.authed();
		vm.firstLogin = false;
		vm.login = login;
		vm.logout = logout;
		vm.changePassword = changePassword;
		vm.checkShowNav = checkShowNav;
		vm.forgotPassword = forgotPassword;
		vm.stateActive = stateActive;
		
		activate();
		
		function activate() {
			resetForm();
		}
		
		// Redirect to login page if not logged in, otherwise redirect from login page
		$rootScope.$on('$stateChangeStart', function(event, toState) {
			if (auth.authed()) {
				if (toState.name == 'login' || toState.name == 'forgotpassword') {
					event.preventDefault();
					if ($state.is('login')) {
						$state.go('dashboard');
					}
				}
				
				// user role restrictions
				if (toState.name == 'config' && !configAllowed()) {
					event.preventDefault();
				}
				if (toState.name == 'admin' && !adminAllowed()) {
					event.preventDefault();
				}
			} else {
				if (toState.name != 'login' && toState.name != 'forgotpassword') {
					event.preventDefault();
					// $state.go('login');
				}
			}
		});
		
		function stateActive(name) {
			return routerHelper.stateActive(name);
		}
		
		function login() {
			server.login(vm.email, vm.password).then(
			function(res) {
				if (auth.authed()) {
					vm.authed = true;
					
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
				vm.firstLogin = false;
			} else {
				alert("Invalid password");
			}
		}
		
		function checkShowNav(nav) {
			switch(nav) {
				case "dashboard":
					return vm.authed;
				case "config":
					return configAllowed();
				case "warnings":
					return vm.authed;
				case "admin":
					return adminAllowed();
				case "logout":
					return vm.authed;
				default:
					return false;
			}
		}
		
		function forgotPassword() {
			server.forgotPassword(vm.email);
		}
		
		function resetForm() {
			vm.email = "andrew@dyergroup.com.au"; // placeholder
			vm.password = "D9mEpnvx";
		}
		
		function configAllowed() {
			if (!vm.authed) return false;
			
			var role = auth.currentUserRole();
			if (role != "power_user" && role != "system_admin") return false;
			
			return true;
		}
		
		function adminAllowed() {
			if (!vm.authed) return false;
			
			var role = auth.currentUserRole();
			if (role != "system_admin") return false;
			
			return true;
		}
	}
})();