(function() {
	'use strict';
	
	angular.module('app.nav')
		.controller('NavController', NavController);
	
	function NavController($rootScope, routerHelper, $state, auth) {
		var vm = this;
		
		var loggedIn = auth.loggedIn();
		
		vm.checkShowNav = checkShowNav;
		vm.stateActive = stateActive;
		vm.logout = logout;
		
		activate();
		
		function activate() {
			// after navigating to a new panel, check still logged in
			$rootScope.$on('$stateChangeSuccess', function() {
				loggedIn = auth.loggedIn();
			});
		}
		
		function stateActive(name) {
			return routerHelper.stateActive(name);
		}
		
		function checkShowNav(nav) {
			switch(nav) {
				case 'dashboard':
					return loggedIn;
				case 'config':
					return auth.checkUser('power_user');
				case 'warnings':
					return loggedIn;
				case 'admin':
					return auth.checkUser('system_admin');
				case 'logout':
					return loggedIn;
				default:
					return false;
			}
		}
		
		function logout() {
			auth.logout();
			loggedIn = false;
			$state.go('login');	
		}
	}
})();