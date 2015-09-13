(function() {
	'use strict';
	
	angular.module('app.core')
		.run(setRoutes);
		
	var otherwisePath = '/hello';
		
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates(), otherwisePath);
	}
	
	function getStates() {
		return [
			{
				state: 'hello',
				config: {
					url: '/hello',
					controller: 'HelloController',
					data: {
						access: 'any'
					}
				}
			}
		];
	}
})();