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
		.run(authRoute)
		
	/** Setup route authentication restrictions */
	function authRoute($rootScope, $state, auth) {
		$rootScope.$on('$stateChangeStart', stateChange);
		
		function stateChange(event, toState, toParams,
				fromState, fromParams) {
				
			if (!auth.checkUser(toState.data.access)) {
				event.preventDefault();
				
				// only redirect if page was just loaded
				if (fromState.url === '^') {
					if (auth.loggedIn()) {
						$state.go('dashboard');
					} else {
						$state.go('login');
					}
				}
			}			
		}
	}
})();