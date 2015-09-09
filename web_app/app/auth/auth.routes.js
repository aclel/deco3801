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
					templateUrl: '/app/auth/login.html',
					data: {
						access: 'unauthed'
					}
				}
			},
			{
				state: 'changepassword',
				config: {
					url: '/changepassword',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/changepassword.html',
					data: {
						access: 'authed'
					}
				}
			},
			{
				state: 'forgotpassword',
				config: {
					url: '/forgotpassword',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/forgotpassword.html',
					data: {
						access: 'unauthed'
					}
				}
			}
		];
	}
})();