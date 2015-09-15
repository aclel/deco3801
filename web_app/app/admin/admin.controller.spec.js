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
	
	/** Unit tests for admin controller */
	describe('Controller: AdminController', function() {
		var $controller, ctrl;
		
		beforeEach(module('app.admin'));
		beforeEach(module('mock.server'));
		
		beforeEach(inject(function($controller, _server_) {
			ctrl = $controller('AdminController', {
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