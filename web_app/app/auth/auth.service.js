(function() {
	'use strict';
	
	angular.module('app.auth')
		.factory('auth', auth);
	
	function auth($window, moment) {
		
		
		return {
			logout: logout,
			authed: authed,
			getToken: getToken,
			saveToken: saveToken,
			currentUser: currentUser,
			currentUserRole: currentUserRole,
			checkUser: checkUser
		};
		
		function logout() {
			$window.localStorage.removeItem('token');
		}
		
		function authed() {
			var token = getToken();
			if(token) {
				var params = parseJwt(token);
				return (moment.call().unix() <= params.exp);
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
			var token = getToken();
			if (token == null) {
				return 'unauthed';
			}
			return parseJwt(token).role;
		}
		
		function checkUser(role) {
			var roles = {
				'unauthed': 0,
				'authed': 1,
				'user': 1,
				'power_user': 2,
				'system_admin': 3,
				'sick cunt': 99999
			};
			
			if (role == 'unauthed' && authed()) {
				return false;
			}
			return (roles[currentUserRole()] >= roles[role]);
		}
		
		function parseJwt(token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse($window.atob(base64));
		}
	}
})();