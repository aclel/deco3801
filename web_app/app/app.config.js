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
	
	angular.module('app')
		.config(function($datepickerProvider, $timepickerProvider, $httpProvider) {
			
			$httpProvider.interceptors.push('authInterceptor');
			
			angular.extend($datepickerProvider.defaults, {
				autoclose: true,
				dateFormat: 'd/M/yy',
				modelDateFormat: 'd/M/yy',
				dateType: 'string',
				startWeek: 1
			});
			
			angular.extend($timepickerProvider.defaults, {
				autoclose: false,
				timeFormat: 'h:mm a',
				modelTimeFormat: 'h:mm a',
				timeType: 'string'
			});
		});
})();