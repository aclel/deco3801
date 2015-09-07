/* global moment */
(function() {
	'use strict';
	
	angular.module('app.auth')
		.factory('auth', auth);
	
	function auth($window) {
		
		
		return {
			logout: logout,
			authed: authed,
			getToken: getToken,
			saveToken: saveToken,
			currentUser: currentUser,
			currentUserRole: currentUserRole
		};
		
		function logout() {
			$window.localStorage.removeItem('token');
		}
		
		function authed() {
			var token = getToken();
			if(token) {
				var params = parseJwt(token);
				return (moment().unix() <= params.exp);
			} else {
				return false;
			}
		}
			
		function saveToken(token) {
			$window.localStorage['token'] = token;
		}
		
		function getToken(token) {
			return $window.localStorage['token'];
		}
		
		function currentUser() {
			return parseJwt(getToken()).sub;
		}
		
		function currentUserRole() {
			return parseJwt(getToken()).role;
		}
		
		function parseJwt(token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse($window.atob(base64));
		}
	}
})();