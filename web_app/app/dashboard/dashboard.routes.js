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
	
	angular.module('app.dashboard')
		.run(setRoutes);
		
	/** Define routes for dashboard module */
	function setRoutes(routerHelper) {
		var otherwisePath = '/dashboard';
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