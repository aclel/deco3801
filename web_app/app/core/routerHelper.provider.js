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
		.provider('routerHelper', routerHelperProvider);
	
	/**
		* @ngdoc provider
		* @name app.core.routerHelper
		* @requires $locationProvider
		* @requires $stateProvider
		* @requires $urlRouterProvider
		* @description Provides some helper functions for roting
	**/
	function routerHelperProvider($locationProvider, 
		$stateProvider, $urlRouterProvider) {
		
		this.$get = RouterHelper;
		
		function RouterHelper($state) {
			var hasOtherwise = false;
			
			/** The provider methods to expose */
			return {
				configureStates: configureStates
			};
			
			/** Allows the caller to add a new route (state) to the app */
			function configureStates(states, otherwisePath) {
				states.forEach(function(state) {
					$stateProvider.state(state.state, state.config);
				});
				/* otherwisePath is a fallback route */
				if (otherwisePath && !hasOtherwise) {
					hasOtherwise = true;
					$urlRouterProvider.otherwise(otherwisePath);
				}
			}
		}
	}
})();