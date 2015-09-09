(function() {
	'use strict';
	
	angular.module('app.warnings')
		.run(setRoutes);
		
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
			{
				state: 'warnings',
				config: {
					url: '/warnings',
					// controller: 'WarningsController',
					// controllerAs: 'vm',
					// templateUrl: '/app/warnings/warnings.html',
					data: {
						access: 'authed'
					}
				}
			}
		];
	}
})();