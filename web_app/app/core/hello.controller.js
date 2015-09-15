(function() {
	'use strict';
	
	angular.module('app.core')
		.controller('HelloController', HelloController);
	
	function HelloController($state, $log) {
		var vm = this;
		
		activate();
		
		function activate() {
			$log.debug('howdy');
		
			// go to dashboard
			$state.go('dashboard');
			
			// if that didn't work, go to login
			if ($state.includes('hello')) {
				$state.go('login');
			}
		}
	}
})();