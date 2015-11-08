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
    
    /** Unit tests for admin routes */
    describe('Routes: admin', function() {
        var state;

        beforeEach(module('app'));

        beforeEach(inject(function($state) {
            state = $state;
        }));

        describe('Admin route', function() {
            it('should be defined', function() {
                var expected = {
                    name: 'admin',
                    url: '/admin',
                    templateUrl: 'admin/admin.html',
                    data: {
                        access: 'system_admin'
                    }
                };
                expect(angular.equals(state.get('admin'), expected)).toBe(true);
            });
        });
    });
})();