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
    
    /** Unit tests for warnings service */
    describe('Service: warnings', function() {
        var warnings, server, deferred, scope, log;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));

        beforeEach(inject(function($q, $rootScope, $log, _warnings_, _server_) {
            scope = $rootScope.$new();
            deferred = $q.defer();
            log = $log;
            spyOn(log, 'error').and.callThrough();
            server = _server_;
            warnings = _warnings_;
        }));

        describe('Getting warnings', function() {
            // spy server methods
            beforeEach(function() {
                spyOn(server, 'getWarnings').and.callThrough();
                spyOn(server, 'getBuoyInstances').and.callThrough();
                spyOn(server, 'getSensorTypes').and.callThrough();
            });

            it('should query the server', function() {
                warnings.refreshData();
                expect(server.getWarnings).toHaveBeenCalled();
                expect(server.getWarnings.calls.count()).toEqual(1);
                expect(server.getBuoyInstances).toHaveBeenCalled();
                expect(server.getBuoyInstances.calls.count()).toEqual(1);
                expect(server.getSensorTypes).toHaveBeenCalled();
                expect(server.getSensorTypes.calls.count()).toEqual(1);
            });

            it('should update warnings', function() {
                warnings.refreshData();
                scope.$digest();
                expect(warnings.getWarnings().length).toEqual(2);
            });

            it('should format warnings', function() {
                warnings.refreshData();
                scope.$digest();
                var warning = warnings.getWarnings()[0];
                expect(warning.readingTime).toBeDefined();
                // expect(warning.readingTime).toEqual("22/02/15 23:06 PM");
                expect(warning.sensorName).toBeDefined();
                expect(warning.sensorName).toEqual('Turbidity');
                expect(warning.warning).toBeDefined();
                expect(warning.warning).toEqual('Turbidity > 100');
            });
        });

        describe('Failing to get warnings', function() {
            // spy server methods to return promise which will be rejected
            beforeEach(function() {
                spyOn(server, 'getWarnings').and.returnValue(deferred.promise);
                spyOn(server, 'getBuoyInstances').and.returnValue(deferred.promise);
                spyOn(server, 'getSensorTypes').and.returnValue(deferred.promise);
            });

            it('Should not have warnings', function() {
                warnings.refreshData();
                deferred.reject();
                scope.$digest();
                expect(warnings.getWarnings().length).toEqual(0);
            });

            it('Should log errors', function() {
                warnings.refreshData();
                deferred.reject();
                scope.$digest();
                expect(log.error).toHaveBeenCalled();
                expect(log.assertEmpty).toThrow();
                expect(log.error.logs.length).toEqual(3);                
            });
        });
    });
})();