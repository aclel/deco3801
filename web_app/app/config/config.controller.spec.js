(function() {
	'use strict';
	
	describe('Controller: ConfigController', function() {
		var $controller, ctrl;
		
		beforeEach(module('app.config'));
		beforeEach(module('mock.server'));
		
		beforeEach(inject(function($controller, _server_) {
			ctrl = $controller('ConfigController', {
				server: _server_
			});
		}));
		
		describe('State', function() {
			it('should exist', function() {
				expect(ctrl).toBeDefined();
			});
			
			it('should expose sensors and sensor edit value', function() {
				expect(angular.isArray(ctrl.sensors)).toBe(true);
				expect(angular.isArray(ctrl.sensorsEdit)).toBe(true);
			});
			
			it('should expose a method to edit sensors', function() {
				expect(ctrl.toggleEdit).toBeDefined();
				expect(angular.isFunction(ctrl.toggleEdit)).toBe(true);
			});
			
			it('should expose sensor validation', function() {
				expect(ctrl.sensorValid).toBeDefined();
				expect(angular.isFunction(ctrl.sensorValid)).toBe(true);
			});
			
			it('sensor edit array should be same length as sensor array', function() {
				expect(ctrl.sensors.length).toBe(ctrl.sensorsEdit.length);
			})
		});
		
	});
})();