(function() {
	'use strict';
	
	angular.module('app')
		.run(function($rootScope, $state, $stateParams) {
			// allow access to state from any scopes, useful for css on navigation
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		})
		
		.config(function($stateProvider, $urlRouterProvider) {
			
			$urlRouterProvider.otherwise('/dashboard');
			
			$stateProvider
				.state('dashboard', {
					url: '/dashboard',
					controller: 'DashboardController',
					controllerAs: 'vm',
					templateUrl: '/app/dashboard/dashboard.html'
				})
				.state('config', {
					url: '/config',
					controller: 'ConfigController',
					controllerAs: 'vm',
					templateUrl: '/app/config/config.html'
				})
				.state('warnings', {
					url: '/warnings'
					// controller: 'WarningsController',
					// controllerAs: 'vm',
					// templateUrl: '/app/warnings/warnings.html'
				});
		});
})();