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