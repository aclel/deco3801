(function() {
	'use strict';
	
	angular.module('app.dashboard')
		.run(setRoutes);
		
	var otherwisePath = '/dashboard';
		
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates(), otherwisePath);
	}
	
	function getStates() {
		return [
			{
				state: 'dashboard',
				config: {
					url: '/dashboard',
					controller: 'DashboardController',
					controllerAs: 'vm',
					templateUrl: '/app/dashboard/dashboard.html',
					data: {
						access: 'authed'
					}
				}
			}
		];
	}
})();