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
		.factory('auth', auth);
	
	/**
		* @ngdoc service
		* @name app.auth.auth
		* @requires $window
		* @requires moment
	**/
	function auth($window, moment) {
		
		/** The service methods to expose */
		return {
			logout: logout,
			loggedIn: loggedIn,
			getToken: getToken,
			saveToken: saveToken,
			currentUser: currentUser,
			checkUser: checkUser,
			saveUser: saveUser,
			currentUserId: currentUserId
		};
		
		/** Logout by removing user token from localStorage */
		function logout() {
			$window.localStorage.removeItem('token');
		}
		
		/**
		 * Returns whether currently logged in or not
		 * @return {bool} loggedIn
		 */
		function loggedIn() {
			var token = getToken();
			if(token) {
				var params = parseJwt(token);
				return (moment().unix() <= params.exp);
			} else {
				return false;
			}
		}
		
		/**
		 * Save JWT token to localStorage, to preserve session
		 * @param  {string} token JWT token
		 */
		function saveToken(token) {
			$window.localStorage['token'] = token;
		}
		
		/**
		 * Get JWT Token from localStorage
		 * @return {string}       JWT token
		 */
		function getToken() {
			return $window.localStorage['token'];
		}

		/**
		 * Save User ID to localStorage
		 * @param  {object} user user who just logged in
		 */
		function saveUser(user) {
			$window.localStorage['user_id'] = user.id;
		}

		/**
		 * Returns ID of the currently logged in user
		 * @return {int} user id
		 */
		function currentUserId() {
			return $window.localStorage['user_id'];
		}
		
		/**
		 * Returns current user
		 * User details are contained in JWT token
		 * @return {string} email
		 */
		function currentUser() {
			return parseJwt(getToken()).sub;
		}
		
		/**
		 * Returns current user role
		 * User details are contained in JWT token
		 * @return {string} role
		 */
		function currentUserRole() {
			var token = getToken();
			if (token == null) {
				return 'unauthed';
			}
			return parseJwt(token).role;
		}
		
		/**
		 * Returns whether a user is is authorised based on their role
		 * @param  {string} role role
		 * @return {bool}      authorised
		 */
		function checkUser(role) {
			var roles = {
				'unauthed': 0,
				'authed': 1,
				'user': 1,
				'power_user': 2,
				'system_admin': 3,
				'andrew': 99999
			};
			
			if (role == 'any') return true;
			
			if (role == 'unauthed') {
				if (loggedIn()) {
					return false;
				}
			} else {
				if (!loggedIn()) {
					return false;
				}
			}
			
			return (roles[currentUserRole()] >= roles[role]);
		}
		
		/**
		 * Parses a JWT token
		 * @param  {string} token JWT token
		 * @return {object}       parsed token
		 */
		function parseJwt(token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			return JSON.parse($window.atob(base64));
		}
	}
})();