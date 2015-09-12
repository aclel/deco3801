(function() {
	'use strict';
	
	angular.module('app.admin')
		.run(setRoutes);
		
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
			{
				state: 'admin',
				config: {
					url: '/admin',
					controller: 'AdminController',
					controllerAs: 'vm',
					templateUrl: '/app/admin/admin.html',
					data: {
						access: 'system_admin'
					}
				}
			}
		];
	}
})();