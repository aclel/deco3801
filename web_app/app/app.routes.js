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
	
	angular.module('app')
		.run(function($rootScope, $state, $stateParams) {
			// allow access to state from any scopes, useful for css on navigation
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		})
		
		.config(function($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/dashboard');
			
			$stateProvider
				.state('login', {
					url: '/login',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/login.html'
				})
				.state('changepassword', {
					url: '/changepassword',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/changepassword.html'
				})
				.state('forgotpassword', {
					url: '/forgotpassword',
					// controller: 'AuthController', now uses parent controller
					// controllerAs: 'vm',
					templateUrl: '/app/auth/forgotpassword.html'
				})
				.state('dashboard', {
					url: '/dashboard',
					controller: 'DashboardController',
					controllerAs: 'vm',
					templateUrl: '/app/dashboard/dashboard.html'
				})
				.state('config', {
					url: '/config',
					controller: 'ConfigController',
					controllerAs: 'vm',
					templateUrl: '/app/config/config.html'
				})
				.state('warnings', {
					url: '/warnings'
					// controller: 'WarningsController',
					// controllerAs: 'vm',
					// templateUrl: '/app/warnings/warnings.html'
				});
		});
})();