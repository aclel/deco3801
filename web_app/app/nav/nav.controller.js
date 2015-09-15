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
	
	angular.module('app.nav')
		.controller('NavController', NavController);
	
	/**
		* @ngdoc object
		* @name app.nav.controller:NavController
		* @description Provides viewmodel for navigation template
		* @requires $rootScope
		* @requires $state
		* @requires routerHelper
		* @requires auth
	**/
	function NavController($rootScope, $state, routerHelper, auth) {
		var vm = this;
		
		/** Internal variables */
		var loggedIn = auth.loggedIn();
		
		/** Variables and methods bound to viewmodel */
		vm.checkShowNav = checkShowNav;
		vm.stateActive = stateActive;
		vm.logout = logout;
		
		activate();
		
		/** Called when controller is instantiated (navbar is loaded) */
		function activate() {
			// after navigating to a new panel, check still logged in
			$rootScope.$on('$stateChangeSuccess', function() {
				loggedIn = auth.loggedIn();
			});
		}
		
		/** 
		 * Check whether a state is active
		 * @param  {string} name state name
		 * @return {bool}      state is active
		 */
		function stateActive(name) {
			return routerHelper.stateActive(name);
		}
		
		/**
		 * Check whether to show navigation link based on authentication
		 * @param  {string} nav nav link element
		 * @return {bool}     show nav element
		 */
		function checkShowNav(nav) {
			switch(nav) {
				case 'dashboard':
					return loggedIn;
				case 'config':
					return auth.checkUser('power_user');
				case 'warnings':
					return loggedIn;
				case 'admin':
					return auth.checkUser('system_admin');
				case 'logout':
					return loggedIn;
				default:
					return false;
			}
		}
		
		/** Logout user and redirect to login page */
		function logout() {
			auth.logout();
			loggedIn = false;
			$state.go('login');	
		}
	}
})();