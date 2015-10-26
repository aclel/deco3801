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
	
	/** Set timepicker and datepicker defaults */
	angular.module('app.gui')
		.config(function($datepickerProvider, $timepickerProvider,
						$httpProvider, $alertProvider,
						$animateProvider) {
		
			// intercept all requests to check for token	
			$httpProvider.interceptors.push('authInterceptor');

			// intercept all requests to handle loading
			$httpProvider.interceptors.push('loadingInterceptor');
			
			// default settings for datepicker
			angular.extend($datepickerProvider.defaults, {
				autoclose: true,
				dateFormat: 'dd/MM/yy',
				modelDateFormat: 'dd/MM/yy',
				dateType: 'string',
				startWeek: 1
			});
			
			// default settings for timepicker
			angular.extend($timepickerProvider.defaults, {
				autoclose: false,
				timeFormat: 'h:mm a',
				modelTimeFormat: 'h:mm a',
				timeType: 'string'
			});

			// default settings for alerts
			angular.extend($alertProvider.defaults, {
				placement: 'alert-placement',
				duration: 3,
				container: '#page',
				show: true
			});

			// Display animations only on these classes
			// ngAnimate causes delays on ngIf elements
			$animateProvider.classNameFilter(/^(alert|modal)/);
		});
})();