(function() {
	'use strict';
	
	angular.module('app.config')
		.factory('config', config);
	
	function config(server) {
		
		var buoyGroups = [];
		var buoyInstances = [];
		
		return {
			queryBuoyGroups: queryBuoyGroups,
			queryBuoyInstances: queryBuoyInstances,
			getBuoyGroups: getBuoyGroups,
			getBuoyInstances: getBuoyInstances
		};
		
		function queryBuoyGroups() {
			var promise = server.getBuoyGroups();
			promise.then(function(res) {
				buoyGroups = res.data.buoyGroups;
			}, function(res) {
				console.log('error');
				console.log(res);
			});
			return promise;
		}
		
		function queryBuoyInstances() {
			var promise = server.getBuoyInstances();
			promise.then(function(res) {
				buoyInstances = res.data.buoyInstances;
			}, function(res) {
				console.log('error');
				console.log(res);
			});
			return promise;
		}
		
		function getBuoyGroups() {
			return buoyGroups;
		}
		
		function getBuoyInstances() {
			return buoyInstances;
		}
		
		// function updateBuoyInstanceGroup()
		
	}
})();