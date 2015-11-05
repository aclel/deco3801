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
    
    /** Unit tests for dashboard controller */
    describe('Controller: DashboardController', function() {
        var $controller, ctrl, rootScope, scope, google, map, deferred;
        var dashboard;
        
        beforeEach(module('app'));
        beforeEach(module('mock.google'));
        beforeEach(module('mock.server'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, _dashboard_, _google_, _map_) {
            deferred = $q.defer();
            dashboard = _dashboard_;
            spyOn(dashboard, 'buoys').and.callThrough();
            spyOn(dashboard, 'times').and.callThrough();
            spyOn(dashboard, 'sensors').and.callThrough();
            spyOn(dashboard, 'readingMetadata').and.callThrough();
            spyOn(dashboard, 'selectBuoyGroup').and.stub();
            spyOn(dashboard, 'selectBuoyInstance').and.stub();
            spyOn(dashboard, 'updateSensors').and.stub();
            spyOn(dashboard, 'updateTimes').and.returnValue(deferred.promise);
            spyOn(dashboard, 'exportData').and.stub();
            spyOn(dashboard, 'calculateChartData').and.returnValue(5);

            map = _map_;
            spyOn(map, 'initialiseMap').and.stub();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('DashboardController', {
                $scope: scope,
            });
            rootScope = $rootScope;
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose stuff', function() {
                expect(ctrl.showGraphs).toBe(false);
                expect(ctrl.showCharts).toBe(false);

                expect(angular.isArray(ctrl.buoys)).toBe(true);
                expect(angular.isObject(ctrl.times)).toBe(true);
                expect(angular.isObject(ctrl.sensors)).toBe(true);
                expect(angular.isObject(ctrl.charts)).toBe(true);
                expect(angular.isObject(ctrl.readingMetadata)).toBe(true);

                expect(dashboard.buoys).toHaveBeenCalled();
                expect(dashboard.times).toHaveBeenCalled();
                expect(dashboard.sensors).toHaveBeenCalled();
                expect(dashboard.readingMetadata).toHaveBeenCalled();

                expect(ctrl.selectBuoyGroup).toBeDefined();
                expect(ctrl.selectBuoyInstance).toBeDefined();
                expect(ctrl.updateSensors).toBeDefined();
                expect(ctrl.updateTimes).toBeDefined();
                expect(ctrl.exportData).toBeDefined();
                expect(ctrl.toggleGraphs).toBeDefined();
            });

            it('should bind to dashboard service', function () {
                expect(ctrl.buoys).toBe(dashboard.buoys());
                expect(ctrl.times).toBe(dashboard.times());
                expect(ctrl.readingMetadata).toBe(dashboard.readingMetadata());
            });
        });

        describe('activate', function () {
            it('should have updated vm', function () {
                expect(ctrl.buoys).toEqual([]);
                expect(ctrl.sensors).toEqual([]);
                expect(ctrl.readingMetadata).toEqual({});
                rootScope.$apply();
                expect(ctrl.buoys).not.toEqual([]);
                expect(ctrl.sensors).not.toEqual([]);
                expect(ctrl.readingMetadata).not.toEqual({});
            });
        });

        describe('selectBuoyGroup', function () {
            it('should call dashboard.selectBuoyGroup', function () {
                ctrl.selectBuoyGroup();
                expect(dashboard.selectBuoyGroup).toHaveBeenCalled();
            });
        });

        describe('selectBuoyInstance', function () {
            it('should call dashboard.selectBuoyInstance', function () {
                ctrl.selectBuoyInstance();
                expect(dashboard.selectBuoyInstance).toHaveBeenCalled();
            });
        });

        describe('updateSensors', function () {
            it('should call dashboard.updateSensors', function () {
                ctrl.updateSensors();
                expect(dashboard.updateSensors).toHaveBeenCalled();
            });
        });

        describe('updateTimes', function () {
            it('should call dashboard.updateTimes', function () {
                ctrl.updateTimes();
                expect(dashboard.updateTimes).toHaveBeenCalled();
            });

            it('should update charts', function () {
                ctrl.updateTimes();
                expect(dashboard.updateTimes).toHaveBeenCalled();
                deferred.resolve();
                scope.$digest();
                expect(dashboard.calculateChartData).toHaveBeenCalled();
                expect(ctrl.charts).toEqual(dashboard.calculateChartData());
            });
        });

        describe('exportData', function () {
            it('should call dashboard.exportData', function () {
                ctrl.exportData();
                expect(dashboard.exportData).toHaveBeenCalled();
            });
        });

        describe('toggleGraphs', function () {
            it('update vm', function () {
                var original = ctrl.showGraphs;
                ctrl.toggleGraphs();
                expect(ctrl.showGraphs).not.toBe(original);
                original = ctrl.showGraphs;
                ctrl.showCharts = original;
                ctrl.toggleGraphs();
                expect(ctrl.showGraphs).not.toBe(original);
            });
        });

        describe('mapMarkerSelected event', function () {
            it('should update charts', function () {
                rootScope.$broadcast('mapMarkerSelected');
                expect(dashboard.calculateChartData).toHaveBeenCalled();
            });
        });
    });
})();