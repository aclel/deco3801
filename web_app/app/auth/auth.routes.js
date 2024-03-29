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
	
	angular.module('app.auth')
		.run(setRoutes);
		
	/** Define routes for auth module */
	function setRoutes(routerHelper) {
		routerHelper.configureStates(getStates());
	}
	
	function getStates() {
		return [
			{
				state: 'login',
				config: {
					url: '/login',
					controller: 'LoginController',
					controllerAs: 'vm',
					templateUrl: 'auth/login.html',
					data: {
						access: 'unauthed'
					}
				}
			},
			{
				state: 'change_password',
				config: {
					url: '/change_password',
					controller: 'ChangePasswordController',
					controllerAs: 'vm',
					templateUrl: 'auth/change_password.html',
					data: {
						access: 'authed'
					}
				}
			},
			{
				state: 'reset_password',
				config: {
					url: '/reset_password?token',
					controller: 'ResetPasswordController',
					controllerAs: 'vm',
					templateUrl: 'auth/reset_password.html',
					data: {
						access: 'unauthed'
					}
				}
			},
			{
				state: 'forgot_password',
				config: {
					url: '/forgot_password',
					controller: 'ForgotPasswordController',
					controllerAs: 'vm',
					templateUrl: 'auth/forgot_password.html',
					data: {
						access: 'unauthed'
					}
				}
			}
		];
	}
})();