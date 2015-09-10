/* global google */
/* global moment */
(function() {
	'use strict';
	
	angular.module('app')
		.constant('moment', moment)
		.constant('google', google);
})();