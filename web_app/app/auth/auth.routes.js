(function() {
	'use strict';
	
	angular.module('app.auth')
		.run(setRoutes);
		
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
			{
				state: 'login',
				config: {
					url: '/login',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/login.html'
				}
			},
			{
				state: 'changepassword',
				config: {
					url: '/changepassword',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/changepassword.html'
				}
			},
			{
				state: 'forgotpassword',
				config: {
					url: '/forgotpassword',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/forgotpassword.html'
				}
			}
		];
	}
})();