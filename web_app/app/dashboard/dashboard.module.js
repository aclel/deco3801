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
	
	/**
        * @ngdoc overview
        * @name app.module:dashboard
        * @description Module for dashboard page
    **/
	angular.module('app.dashboard', [
		// Shared modules
		'app.core',
		'app.gui',
		
		// 3rd-party modules
		'chart.js',
		'ui.indeterminate'
	]);
})();