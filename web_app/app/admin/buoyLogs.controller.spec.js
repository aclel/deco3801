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

    /** Unit tests for buoyLogs controller */
    describe('Controller: BuoyLogsController', function() {
        var $controller, ctrl;

        // mock buoyLogs service
        var mockLogs = [];
        var mockClosed = { closed: false };
        var buoyLogs = {
            getLogs: function() { return mockLogs; },
            getClosed: function() { return mockClosed; }
        };

        beforeEach(module('app'));

        // Inject buoyLogs mock
        beforeEach(module(function($provide) {
            $provide.value('buoyLogs', buoyLogs);
            spyOn(buoyLogs, 'getLogs').and.callThrough();
            spyOn(buoyLogs, 'getClosed').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller) {
            ctrl = $controller('BuoyLogsController');
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose stuff', function() {
                expect(angular.isArray(ctrl.logs)).toBe(true);
                expect(angular.isObject(ctrl.closed)).toBe(true);
            });

            it('should bind to buoyLogs service', function () {
                expect(buoyLogs.getLogs).toHaveBeenCalled();
                expect(buoyLogs.getClosed).toHaveBeenCalled();
                
                expect(ctrl.logs).toBe(buoyLogs.getLogs());
                expect(ctrl.closed).toBe(buoyLogs.getClosed());
            });
        });
    });
})();