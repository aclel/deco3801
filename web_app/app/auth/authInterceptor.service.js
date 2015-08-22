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