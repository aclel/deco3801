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
	
	angular.module('app.core')
		.run(setRoutes);
		
	/** Define routes for core module */
	function setRoutes(routerHelper) {
		var otherwisePath = '/hello';
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