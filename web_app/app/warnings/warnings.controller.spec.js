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
    
    /** Unit tests for warnings controller */
    describe('Controller: WarningsController', function() {
        var $controller, ctrl, deferred, scope;
        var warnings;
        
        beforeEach(module('app'));
        beforeEach(module('mock.warnings'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, _warnings_) {
            deferred = $q.defer();
            warnings = _warnings_;
            spyOn(warnings, 'refreshData').and.returnValue(deferred.promise);
            spyOn(warnings, 'getWarnings').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('WarningsController', {
                warnings: warnings
            });
            // $rootScope.$apply(); // needed to resolve promises?
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose warnings', function() {
                expect(angular.isArray(ctrl.warnings)).toBe(true);
            });
        });

        describe('Activate', function() {
            it('should update warnings', function() {
                expect(warnings.refreshData).toHaveBeenCalled();
                expect(warnings.refreshData.calls.count()).toBe(1);
                deferred.resolve();
                scope.$digest();
                expect(warnings.getWarnings).toHaveBeenCalled();
                expect(warnings.getWarnings.calls.count()).toBe(1);
                expect(ctrl.warnings.length).toBe(2);
            });
        });
    });
})();