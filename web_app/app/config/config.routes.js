(function() {
	'use strict';
	
	angular.module('app.config')
		.run(setRoutes);
		
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
			{
				state: 'config',
				config: {
					url: '/config',
					controller: 'ConfigController',
					controllerAs: 'vm',
					templateUrl: '/app/config/config.html'
				}
			}
		];
	}
})();