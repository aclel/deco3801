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
		.controller('HelloController', HelloController);
	
	/**
		* @ngdoc object
		* @name app.core.controller:HelloController
		* @description Provides a landing page which doesn't have any
		*              authentication requirements, to prevent routing loop
		* @requires $state
		* @requires $log
	**/
	function HelloController($state, $log) {
		var vm = this;
		
		activate();
		
		/** Called when controller is instantiated (hello page is loaded)
		 *  Immediately redirects user to dashboard, and if that fails
		 *  (because user isn't logged in), redirects to login page.
		 */
		function activate() {
			$log.debug('howdy');
		
			// go to dashboard
			$state.go('dashboard');
			
			// if that didn't work, go to login
			if ($state.includes('hello')) {
				$state.go('login');
			}
		}
	}
})();