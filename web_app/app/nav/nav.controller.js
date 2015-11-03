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
		* @requires nav
	**/
	function NavController(nav) {
		var vm = this;

		/** Variables and methods bound to viewmodel */
		vm.accountMenu = [
			{ text: "Change password", click: "vm.changePassword()" },
			{ text: "Logout", click: "vm.logout()" }
		];
		vm.loading = nav.getLoading();
		vm.warnings = nav.getWarnings();
		vm.checkShowNav = nav.checkShowNav;
		vm.stateActive = nav.stateActive;
		vm.logout = nav.logout;
		vm.changePassword = nav.changePassword;
	}
})();