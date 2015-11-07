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
    
    /** Unit tests for dashboard routes */
    describe('Routes: dashboard', function() {
        var state;

        beforeEach(module('app'));

        beforeEach(inject(function($state) {
            state = $state;
        }));

        describe('Dashboard route', function() {
            it('should be defined', function() {
                var expected = {
                    name: 'dashboard',
                    url: '/dashboard',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    templateUrl: 'dashboard/dashboard.html',
                    data: {
                        access: 'authed'
                    }
                };
                expect(angular.equals(state.get('dashboard'), expected)).toBe(true);
            });
        });
    });
})();