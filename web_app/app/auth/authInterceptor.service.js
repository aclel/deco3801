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
	
	function authInterceptor(auth) {
		
		
		return {
			request: request,
			response: response
		};
		
		function request(config) {
			return config;
		}
		
		function response(res) {
			if (res.data.token) {
				auth.saveToken(res.data.token);
			}
			return res;
		}
		
	}
})();