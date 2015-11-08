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
    
    /** Unit tests for config controller */
    describe('Controller: ConfigController', function() {
        var $controller, ctrl, deferred, scope;
        var config;
        
        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        // Mock services and spy on methods
        beforeEach(inject(function($q, _config_) {
            deferred = $q.defer();
            config = _config_;
            spyOn(config, 'refreshData').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('ConfigController');
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose variables', function() {
                expect(angular.isArray(ctrl.buoyGroups)).toBe(true);
                expect(angular.isArray(ctrl.buoyInstances)).toBe(true);
                expect(angular.isArray(ctrl.groupBuoys)).toBe(true);
                expect(angular.isArray(ctrl.buoyInstanceSensors)).toBe(true);
                expect(angular.isArray(ctrl.sensorTypes)).toBe(true);
                expect(angular.isObject(ctrl.selected)).toBe(true);
                expect(angular.isObject(ctrl.editName)).toBe(true);
                expect(angular.isObject(ctrl.editGroup)).toBe(true);
                expect(angular.isObject(ctrl.treeOptions)).toBe(true);
                expect(angular.isObject(ctrl.redeploy)).toBe(true);
            });

            it('should bind to config service', function () {
                expect(ctrl.buoyGroups).toBe(config.buoyGroups);
                expect(ctrl.buoyInstances).toBe(config.buoyInstances);
                expect(ctrl.groupBuoys).toBe(config.groupBuoys);
                expect(ctrl.buoyInstanceSensors).toBe(config.buoyInstanceSensors);
                expect(ctrl.sensorTypes).toBe(config.sensorTypes);
                expect(ctrl.selected).toBe(config.selected);
                expect(ctrl.editName).toBe(config.editName);
                expect(ctrl.editGroup).toBe(config.editGroup);
                expect(ctrl.treeOptions).toBe(config.treeOptions);
                expect(ctrl.redeploy).toBe(config.redeploy);
            });

            it('should expose methods', function () {
                expect(ctrl.selectAll).toBeDefined();
                expect(ctrl.selectBuoyGroup).toBeDefined();
                expect(ctrl.selectBuoyInstance).toBeDefined();
                expect(ctrl.startEditingName).toBeDefined();
                expect(ctrl.finishEditingName).toBeDefined();
                expect(ctrl.finishEditingBuoyGroup).toBeDefined();
                expect(ctrl.selectNewBuoyGroup).toBeDefined();
                expect(ctrl.saveNewBuoyGroup).toBeDefined();
                expect(ctrl.buoyGroupFilter).toBeDefined();
                expect(ctrl.showBuoyConfig).toBeDefined();
                expect(ctrl.editing).toBeDefined();
                expect(ctrl.cancelEditName).toBeDefined();
                expect(ctrl.toggleBuoyGroup).toBeDefined();
                expect(ctrl.sensorFilter).toBeDefined();
                expect(ctrl.redeployBuoy).toBeDefined();
                expect(ctrl.redeployShow).toBeDefined();
            });
        });

        describe('Activate', function() {
            it('should refresh config data', function () {
                expect(config.refreshData).toHaveBeenCalled();
                scope.$digest();
                expect(ctrl.buoyGroups.length).not.toEqual(0);
                expect(ctrl.buoyInstances.length).not.toEqual(0);
                expect(ctrl.buoyInstanceSensors.length).not.toEqual(0);
                expect(ctrl.sensorTypes.length).not.toEqual(0);
            });
        });
    });
})();