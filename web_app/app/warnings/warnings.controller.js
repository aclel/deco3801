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
	
	angular.module('app.warnings')
		.controller('WarningsController', WarningsController);
	
	/**
		* @ngdoc object
		* @name app.warnings.controller:WarningsController
		* @description Provides viewmodel for warnings view
		* @requires warnings
	**/
	function WarningsController(warnings) {
		var vm = this;

		/** Variables and methods bound to viewmodel */
		vm.warnings = [];
		
		activate();
		
		/** Called when controller is instantiated (warnings page is loaded) */
		function activate() {
			warnings.refreshData().then(function() {
				vm.warnings = warnings.getWarnings();
			});
		}
	}
})();