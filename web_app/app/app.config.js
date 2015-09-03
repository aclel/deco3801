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