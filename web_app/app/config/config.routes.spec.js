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
    
    /** Unit tests for config routes */
    describe('Routes: config', function() {
        var state;

        beforeEach(module('app'));

        beforeEach(inject(function($state) {
            state = $state;
        }));

        describe('Warnings route', function() {
            it('should be defined', function() {
                var expected = {
                    name: 'config',
                    url: '/config',
                    controller: 'ConfigController',
                    controllerAs: 'vm',
                    templateUrl: 'config/config.html',
                    data: {
                        access: 'power_user'
                    }
                };
                expect(angular.equals(state.get('config'), expected)).toBe(true);
            });
        });
    });
})();