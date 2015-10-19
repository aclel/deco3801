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
	
	angular.module('app.admin')
		.controller('AdminController', AdminController);
	
	/**
		* @ngdoc object
		* @name app.admin.controller:AdminController
		* @description Provides viewmodel for admin view.
		*              Most functionaliy is delegated to tab subcontrollers.
		* @requires server
	**/
	function AdminController($scope, server, gui) {
		var vm = this;
		
	}
})();