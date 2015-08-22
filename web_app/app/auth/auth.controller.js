(function() {
	'use strict';
	
	angular.module('app.auth')
		.controller('AuthController', AuthController);
	
	function AuthController($rootScope, $state, auth, server) {
		var vm = this;
		
		vm.authed = auth.authed();
		vm.login = login;
		vm.logout = logout;
		
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
			server.login(vm.username, vm.password).then(
			function(res) {
				if (auth.authed()) {
					vm.authed = true;
					$state.go('dashboard');
					vm.username = "";
					vm.password = "";
				}
				
			},
			function(res) {
				alert('Invalid username or password');
			});
		}
		
		function logout() {
			server.logout();
			vm.authed = false;
			$state.go('login');			
		}
	}
})();