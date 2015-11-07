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
    
    /** Unit tests for buoyLogs service */
    describe('Service: buoyLogs', function() {
        var buoyLogs, deferred, scope, log;
        var websocketBackend;

        beforeEach(module('app'));

        beforeEach(inject(function($q, $rootScope, $log, _buoyLogs_) {
            scope = $rootScope.$new();
            deferred = $q.defer();
            log = $log;
            spyOn(log, 'debug').and.callThrough();
            buoyLogs = _buoyLogs_;
            spyOn(buoyLogs, 'getLogs').and.callThrough();
            spyOn(buoyLogs, 'getClosed').and.callThrough();
        }));

        describe('getter methods', function () {
            it('getLogs should return logs', function () {
                expect(buoyLogs.getLogs()).toEqual([]);
                expect(buoyLogs.getLogs).toHaveBeenCalled();
            });

            it('getClosed should return closed', function () {
                expect(buoyLogs.getClosed()).toEqual({ closed: false });
                expect(buoyLogs.getClosed).toHaveBeenCalled();
            });
        });
    });
})();