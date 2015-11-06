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
    
    /** Unit tests for dashboard service */
    describe('Service: dashboard', function() {
        var dashboard, rootScope, scope, log, server, gui, deferred, map;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        beforeEach(inject(function($q, $log, _server_, _gui_, _map_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'exportData').and.stub();
            log = $log;
            spyOn(log, 'error').and.callThrough();
            gui = _gui_;
            spyOn(gui, 'alertInfo').and.callThrough();
            map = _map_;
            spyOn(map, 'hideDisabledMarkers').and.callThrough();
            spyOn(map, 'showMarker').and.callThrough();
        }));

        beforeEach(inject(function(_dashboard_, $rootScope) {
            dashboard = _dashboard_;
            rootScope = $rootScope;
            scope = rootScope.$new();
        }));

        describe('getBuoys', function () {
            it('should return buoys', function() {
                expect(dashboard.buoys()).toEqual([]);
                dashboard.queryReadings();
                scope.$digest();
                expect(dashboard.buoys()).not.toEqual([]);
                expect(dashboard.buoys().length).toEqual(2);
            });
        });

        describe('getTimes', function () {
            it('should return times', function() {
                expect(dashboard.times()).not.toEqual({});
                expect(dashboard.times().type).toEqual('since');
            });
        });

        describe('getSensors', function () {
            it('should return sensors', function() {
                expect(dashboard.sensors()).toEqual([]);
                dashboard.querySensors();
                scope.$digest();
                expect(dashboard.sensors()).not.toEqual([]);
                expect(dashboard.sensors().length).toEqual(3);
            });
        });

        describe('queryReadings', function () {
            it('should use from and to', function () {
                dashboard.queryReadings(100, 1000);
                scope.$digest();
                expect(dashboard.buoys()).not.toEqual([]);
            });

            it('should alert no readings', function () {
                spyOn(server, 'getReadings').and.returnValue(deferred.promise);
                dashboard.queryReadings();
                deferred.resolve({ data: { buoyGroups: [] }});
                scope.$digest();
                expect(gui.alertInfo).toHaveBeenCalled();
                expect(dashboard.buoys()).toEqual([]);
            });

            it('should log error', function () {
                spyOn(server, 'getReadings').and.returnValue(deferred.promise);
                dashboard.queryReadings();
                deferred.reject();
                scope.$digest();
                expect(log.error).toHaveBeenCalled();
                expect(log.assertEmpty).toThrow();
            });

            it('should update map', function () {
                dashboard.querySensors();
                scope.$digest();
                expect(map.hideDisabledMarkers).toHaveBeenCalled();
            });
        });

        describe('querySensors', function () {
            it('should log error', function () {
                spyOn(server, 'getSensorTypes').and.returnValue(deferred.promise);
                dashboard.querySensors();
                deferred.reject();
                scope.$digest();
                expect(log.error).toHaveBeenCalled();
                expect(log.assertEmpty).toThrow();
            });

            it('should update map', function () {
                dashboard.queryReadings();
                scope.$digest();
                expect(map.hideDisabledMarkers).toHaveBeenCalled();
            });
        });

        describe('populateSensors', function () {
            it('should not override input state of existing sensors', function () {
                dashboard.querySensors();
                scope.$digest();
                dashboard.sensors()[0].inputs.enabled = true;
                dashboard.querySensors();
                scope.$digest();
                expect(dashboard.sensors()[0].inputs.enabled).toBe(true);
            });

            it('should remove old sensors', function () {
                dashboard.querySensors();
                scope.$digest();
                expect(dashboard.sensors().length).toEqual(3);
                spyOn(server, 'getSensorTypes').and.returnValue(deferred.promise);
                dashboard.querySensors();
                deferred.resolve({ data: { 'sensorTypes': [
                    {
                      'id': 1,
                      'description': 'Amount of light that can pass through the water',
                      'unit': 'NTU',
                      'name': 'Turbidity',
                      'lowerBound': 0,
                      'upperBound': 200,
                      'archived': false
                    }] } }
                );
                scope.$digest();
                expect(dashboard.sensors().length).toEqual(1);
            });
        });

        describe('populateBuoys', function () {
            it('should not overwrite existing buoy groups input state', function () {
                dashboard.queryReadings();
                scope.$digest();
                dashboard.buoys()[0].enabled = false;
                dashboard.queryReadings();
                scope.$digest();
                expect(dashboard.buoys()[0].enabled).toBe(false);
            });

            it('should not overwrite existing buoy instances input state', function () {
                dashboard.queryReadings();
                scope.$digest();
                dashboard.buoys()[0].buoyInstances[0].enabled = false;
                dashboard.queryReadings();
                scope.$digest();
                expect(dashboard.buoys()[0].buoyInstances[0].enabled).toBe(false);
            });

            var readings = {data: { 'buoyGroups': [
                {
                  'id': 10,
                  'name': 'Brisbane River',
                  'buoyInstances': [
                    {
                      'id': 120,
                      'name': 'BNE4 - Drifting',
                      'readings': []
                    } ] } ] }
                };

            it('should remove old buoy groups', function () {
                dashboard.queryReadings();
                scope.$digest();
                expect(dashboard.buoys().length).toEqual(2);
                spyOn(server, 'getReadings').and.returnValue(deferred.promise);
                dashboard.queryReadings();
                deferred.resolve(readings);
                scope.$digest();
                expect(dashboard.buoys().length).toEqual(1);
            });

            it('should remove old buoy instances', function () {
                dashboard.queryReadings();
                scope.$digest();
                expect(dashboard.buoys()[0].buoyInstances.length).toEqual(2);
                spyOn(server, 'getReadings').and.returnValue(deferred.promise);
                dashboard.queryReadings();
                deferred.resolve(readings);
                scope.$digest();
                expect(dashboard.buoys()[0].buoyInstances.length).toEqual(1);
            });
        });

        describe('selecting buoys', function () {
            beforeEach(function() {
                dashboard.queryReadings();
                dashboard.querySensors();
                scope.$digest();
            });

            it('should disable buoy group', function () {
                var group = dashboard.buoys()[0];
                expect(group.enabled).toBe(true);
                group.buoyInstances.forEach(function(instance) {
                    expect(instance.enabled).toBe(true);
                });
                group.enabled = false;
                map.showMarker.calls.reset();
                dashboard.selectBuoyGroup(group);
                group.buoyInstances.forEach(function(instance) {
                    expect(instance.enabled).toBe(false);
                });
                expect(map.showMarker.calls.count()).toEqual(1);
            });

            it('should disable buoy instance', function () {
                var group = dashboard.buoys()[0];
                var instance = group.buoyInstances[0];
                expect(instance.enabled).toBe(true);
                instance.enabled = false;
                map.showMarker.calls.reset();
                dashboard.selectBuoyInstance(group);
                expect(instance.enabled).toBe(false);
                expect(map.showMarker.calls.count()).toEqual(2);
            });

            it('should affect group enabled and indeterminate', function () {
                var group = dashboard.buoys()[0];
                expect(group.enabled).toBe(true);
                group.buoyInstances[0].enabled = false;
                dashboard.selectBuoyInstance(group);
                expect(group.enabled).toBe(true);
                expect(group.indeterminate).toBe(true);
                group.buoyInstances[1].enabled = false;
                dashboard.selectBuoyInstance(group);
                expect(group.enabled).toBe(false);
                expect(group.indeterminate).toBe(false);
            });

            it('should update map', function () {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.selectBuoyInstance(dashboard.buoys()[0]);
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count+1);
            });
        });

        describe('updating time filters', function () {
            beforeEach(function() {
                dashboard.queryReadings();
                dashboard.querySensors();
                scope.$digest();
            });

            it('should handle since filters', function () {
                var count = map.hideDisabledMarkers.calls.count();
                assertFiltersUpdated();
            });

            it('should handle range filters', function () {
                var times = dashboard.times();
                expect(times.range.from).toBeNull();
                expect(times.range.to).toBeNull();
                times.type = 'range';
                times.inputs.range.from.date = '01/10/15';
                times.inputs.range.to.date = '31/10/15';
                assertFiltersUpdated();
                expect(times.range.from).not.toBeNull();
                expect(times.range.to).not.toBeNull();
            });

            it('should handle all times', function () {
                var times = dashboard.times();
                times.type = 'all';
                assertFiltersUpdated();
            });

            /** Assert filters have updated */
            function assertFiltersUpdated() {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateTimes();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count + 1);
            }
        });

        describe('selecting marker', function () {
            beforeEach(function() {
                dashboard.queryReadings();
                dashboard.querySensors();
                // get readings
                var readings;
                server.getReadings().then(function(res) {
                    readings = res.data.buoyGroups;
                });
                scope.$digest();
                var selected = readings[0].buoyInstances[0];
                selected.colour = '#FFFFFF';
                rootScope.$broadcast('mapMarkerSelected', selected);
            });

            it('should update map', function () {
                var count = map.hideDisabledMarkers.calls.count();
                map.showMarker.calls.reset();
                assertFiltersUpdated();
                expect(map.showMarker.calls.count()).toEqual(3);
            });

            /** Assert filters have updated */
            function assertFiltersUpdated() {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateTimes();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count + 1);
            }
        });

        describe('validating time filters', function () {
            it('should reject invalid type', function () {
                var times = dashboard.times();
                times.type = 'blah';
                assertFiltersNotUpdated() ;
            });

            it('should reject invalid since format', function () {
                var times = dashboard.times();
                times.inputs.since.value = 'blah';
                assertFiltersNotUpdated() ;
            });

            it('should reject invalid range', function () {
                var times = dashboard.times();
                times.type = 'range';
                times.inputs.range.to.date = '01/10/15';
                times.inputs.range.from.date = '31/10/15';
                assertFiltersNotUpdated() ;
            });

            it('should reject invalid range date format', function () {
                var times = dashboard.times();
                times.type = 'range';
                times.inputs.range.from.date = 'blah';
                assertFiltersNotUpdated();
                times.inputs.range.from.date = '31/10/15';
                times.inputs.range.to.date = 'blah';
                assertFiltersNotUpdated() ;
            });

            it('should reject invalid range time format', function () {
                var times = dashboard.times();
                times.type = 'range';
                times.inputs.range.from.time = 'blah';
                assertFiltersNotUpdated();
                times.inputs.range.from.time = '12:00 AM';
                times.inputs.range.to.time = 'blah';
                assertFiltersNotUpdated();
                times.inputs.range.to.time = '11:00 PM';
                assertFiltersUpdated();
            });

            it('should not update filters if times are invalid', function () {
                var times = dashboard.times();
                times.inputs.since.value = 'blah';
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateSensors();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count);
            });

            /** Assert filters haven't updated */
            function assertFiltersNotUpdated() {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateTimes();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count);
            }

            /** Assert filters have updated */
            function assertFiltersUpdated() {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateTimes();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count + 1);
            }
        });

        describe('update sensor filters', function () {
            beforeEach(function() {
                dashboard.queryReadings();
                dashboard.querySensors();
                scope.$digest();
            });

            it('should update map', function () {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateSensors();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count+1);
            });

            it('should validate sensor inputs', function () {
                var sensors = dashboard.sensors();
                sensors[0].inputs.value = 'asd';
                assertFiltersUpdated();
                sensors[0].inputs.enabled = true;
                assertFiltersNotUpdated();
            });

            it('should filter based on sensors', function () {
                var sensors = dashboard.sensors();
                sensors[0].inputs.enabled = true;
                sensors[0].inputs.value = 31;
                sensors[0].inputs.selected = '>';
                map.showMarker.calls.reset();
                assertFiltersUpdated();
                expect(map.showMarker.calls.count()).toEqual(2);
                sensors[0].inputs.selected = '<';
                map.showMarker.calls.reset();
                assertFiltersUpdated();
                expect(map.showMarker.calls.count()).toEqual(3);
                sensors[0].inputs.selected = '=';
                map.showMarker.calls.reset();
                assertFiltersUpdated();
                expect(map.showMarker.calls.count()).toEqual(1);
            });

            /** Assert filters haven't updated */
            function assertFiltersNotUpdated() {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateSensors();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count);
            }

            /** Assert filters have updated */
            function assertFiltersUpdated() {
                var count = map.hideDisabledMarkers.calls.count();
                dashboard.updateSensors();
                scope.$digest();
                expect(map.hideDisabledMarkers.calls.count()).toEqual(count + 1);
            }
        });

        describe('export data', function () {
            it('should export data', function () {
                dashboard.queryReadings();
                dashboard.querySensors();
                scope.$digest();
                dashboard.exportData();
                expect(server.exportData).toHaveBeenCalled();
                var arg0 = [21, 22, 116, 117, 118, 275, 276,
                277, 278, 279, 280, 281, 282, 283, 284, 285,
                286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296];
                expect(server.exportData.calls.mostRecent().args).toEqual([arg0]);
            });
        });

        describe('calculate chart data', function () {
            beforeEach(function() {
                dashboard.queryReadings();
                dashboard.querySensors();
                scope.$digest();
            });

            it('should do nothing for an empty buoy', function () {
                expect(dashboard.calculateChartData(null)).toEqual({});
            });

            it('should calculate data', function () {
                var instance = dashboard.buoys()[0].buoyInstances[0];
                var data = dashboard.calculateChartData(instance);
                expect(angular.isArray(data)).toBe(true);
                expect(data.length).toEqual(1);
            });

            it('should average readings', function () {
                var instance = dashboard.buoys()[1].buoyInstances[0];
                var data = dashboard.calculateChartData(instance);
                expect(angular.isArray(data)).toBe(true);
                expect(data.length).toEqual(2);
            });

            it('should not calculate data for an old buoy', function () {
                var instance = { id: 999 };
                expect(dashboard.calculateChartData(instance)).toEqual({});
            });
        });
    });
})();