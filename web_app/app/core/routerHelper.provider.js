(function() {
	'use strict';
	
	angular.module('app.core')
		.provider('routerHelper', routerHelperProvider);
		
	function routerHelperProvider($locationProvider, 
		$stateProvider, $urlRouterProvider) {
		
		this.$get = RouterHelper;
		
		function RouterHelper($state) {
			var hasOtherwise = false;
			
			return {
				configureStates: configureStates,
				getStates: getStates,
				stateActive: stateActive
			};
			
			function configureStates(states, otherwisePath) {
				states.forEach(function(state) {
					$stateProvider.state(state.state, state.config);
				});
				
				if (otherwisePath && !hasOtherwise) {
					hasOtherwise = true;
					$urlRouterProvider.otherwise(otherwisePath);
				}
			}
			
			function getStates() {
				return $state.get();
			}
			
			function stateActive(name) {
				return $state.includes(name);
			}
		}
	}
})();