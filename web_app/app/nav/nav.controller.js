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
	function NavController($rootScope, $state, $timeout, routerHelper, auth, server) {
		var vm = this;

		// Internal variables
		var justRefreshedWarnings = false;
		
		/** Variables and methods bound to viewmodel */
		vm.loading = true;
		vm.accountMenu = [
			{ text: "Change password", click: "vm.changePassword()" },
			{ text: "Logout", click: "vm.logout()" }
		];
		vm.warningNum = 0;
		vm.checkShowNav = checkShowNav;
		vm.stateActive = stateActive;
		vm.logout = logout;
		vm.changePassword = changePassword;
		
		activate();
		
		/** Called when controller is instantiated (navbar is loaded) */
		function activate() {
			// register loading event listener
			$rootScope.$on('loading', function(event, on) {
				if (on) {
					// Don't show loader when refreshing warnings
					if (!justRefreshedWarnings) {
						vm.loading = true;
					}
				} else {
					// Prevent infinite querying of warnings
					if (!justRefreshedWarnings) {
						refreshWarnings();
					} else {
						justRefreshedWarnings = false;
					}
					// apply a short delay when hiding the loader
					$timeout(function() {
						vm.loading = false;
					}, 800);
				}
			});

		}

		// query the server for warnings and update badge
		function refreshWarnings() {
			server.getWarnings().then(function(res) {
				vm.warningNum = res.data.warnings.length;
			});
			justRefreshedWarnings = true;
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
				case 'account':
					return auth.checkUser('authed');
				default:
					return auth.checkUser($state.get(nav).data.access);
			}
		}
		
		/** Logout user and redirect to login page */
		function logout() {
			auth.logout();
			$state.go('login');	
		}

		/** Redirect user to change password page */
		function changePassword() {
			$state.go('change_password');
		}
	}
})();