(function() {
	'use strict';
	
	angular.module('app.core')
		.controller('HelloController', HelloController);
	
	function HelloController($state) {
		var vm = this;
		console.log('howdy');
		
		$state.go('dashboard');
		
		if ($state.includes('hello')) {
			$state.go('login');
		}
	}
})();