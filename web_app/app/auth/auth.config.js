// (function() {
// 	'use strict';
	
// 	angular.module('app.auth')
// 		.run(authRoute)
		
// 	function authRoute($rootScope, $state, auth) {
// 		$rootScope.$on('$stateChangeStart', stateChange);
		
// 		function stateChange(event, toState, toParams,
// 				fromState, fromParams) {
				
// 			if (!auth.checkUser(toState.data.access)) {
// 				event.preventDefault();
				
// 				// only redirect if page was just loaded
// 				if (fromState.url === '^') {
// 					if (auth.loggedIn()) {
// 						$state.go('dashboard');
// 					} else {
// 						$state.go('login');
// 					}
// 				}
// 			}			
// 		}
// 	}
// })();