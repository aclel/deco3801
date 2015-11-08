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
    
    /** Unit tests for auth routes */
    describe('Routes: auth', function() {
        var state;

        beforeEach(module('app'));

        beforeEach(inject(function($state) {
            state = $state;
        }));

        describe('auth routes', function() {
            it('login route should be defined', function() {
                var expected = {
                    name: 'login',
                    url: '/login',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    templateUrl: 'auth/login.html',
                    data: {
                        access: 'unauthed'
                    }
                };
                expect(angular.equals(state.get('login'), expected)).toBe(true);
            });

            it('change_password route should be defined', function() {
                var expected = {
                    name: 'change_password',
                    url: '/change_password',
                    controller: 'ChangePasswordController',
                    controllerAs: 'vm',
                    templateUrl: 'auth/change_password.html',
                    data: {
                        access: 'authed'
                    }
                };
                expect(angular.equals(state.get('change_password'), expected)).toBe(true);
            });

            it('reset_password route should be defined', function() {
                var expected = {
                    name: 'reset_password',
                    url: '/reset_password?token',
                    controller: 'ResetPasswordController',
                    controllerAs: 'vm',
                    templateUrl: 'auth/reset_password.html',
                    data: {
                        access: 'unauthed'
                    }
                };
                expect(angular.equals(state.get('reset_password'), expected)).toBe(true);
            });

            it('forgot_password route should be defined', function() {
                var expected = {
                    name: 'forgot_password',
                    url: '/forgot_password',
                    controller: 'ForgotPasswordController',
                    controllerAs: 'vm',
                    templateUrl: 'auth/forgot_password.html',
                    data: {
                        access: 'unauthed'
                    }
                };
                expect(angular.equals(state.get('forgot_password'), expected)).toBe(true);
            });
        });
    });
})();