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
					template: '<h3>Welcome to Dugong Territory</h3>',
					data: {
						access: 'any'
					}
				}
			}
		];
	}
})();