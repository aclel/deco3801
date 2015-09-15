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
		.factory('authInterceptor', authInterceptor);
	
	/**
		* @ngdoc service
		* @name module.authInterceptor
		* @requires auth
		* @description intercepts all requests and responses,
		*              saves incoming authentication tokens
	**/
	function authInterceptor(auth) {
		
		/** The service methods to expose */
		return {
			request: request,
			response: response
		};
		
		/** Requests are not modified */
		function request(config) {
			return config;
		}
		
		/** If a response contains a token, save it */
		function response(res) {
			if (res.data.token) {
				auth.saveToken(res.data.token);
			}
			return res;
		}
	}
})();