/**
 * Flood Monitoring System
 * Version 0.0.1 (Duyung)
 *
 * Copyright (C) Team Neptune
 * All rights reserved.
 *
 * @author     Andrew Dyer <andrew@dyergroup.com.au>
 * @version    0.0.1
 * @copyright  Team Neptune (2015)
 * @link       https://github.com/aclel/deco3801
 */
(function() {
	'use strict';
	
	angular.module('app.warnings')
		.run(setRoutes);
	
	/** Define routes for warnings page */
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
			{
				state: 'warnings',
				config: {
					url: '/warnings',
					controller: 'WarningsController',
					controllerAs: 'vm',
					templateUrl: 'warnings/warnings.html',
					data: {
						access: 'power_user'
					}
				}
			}
		];
	}
})();