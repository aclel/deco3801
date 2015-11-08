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
    
    /** Unit tests for auth service */
    describe('Service: auth', function() {
        var auth, $window;

        // update this if tests are failing
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NDcwNzI1NjUsImlhdCI6MTQ0Njk4NjE2NSwicm9sZSI6InN5c3RlbV9hZG1pbiIsInN1YiI6ImFuZHJld0BkeWVyZ3JvdXAuY29tLmF1In0.hQ2cbitTLyPlu-7YoUrRN3PwdMiL1ez79m2OA-bZcqc';

        beforeEach(module('app'));

        beforeEach(inject(function(_$window_, _auth_) {
            auth = _auth_;
            spyOn(auth, 'loggedIn').and.returnValue(true);
            $window = _$window_;
        }));

        describe('logout', function () {
            it('should remove token from localStorage', function () {
                $window.localStorage['token'] = 'asdf';
                auth.logout();
                expect($window.localStorage.token).not.toBeDefined();
            });
        });

        describe('saveToken', function () {
            it('should save token to localStorage', function () {
                auth.saveToken('asdf');
                expect($window.localStorage.token).toEqual('asdf');
            });
        });

        describe('getToken', function () {
            it('should get the token from localStorage', function () {
                $window.localStorage['token'] = 'asd';
                expect(auth.getToken()).toEqual('asd');
            });
        });

        describe('saveUser', function () {
            it('should save userId to localStorage', function () {
                auth.saveUser({ id: 1 });
                expect($window.localStorage['user_id']).toEqual('1');
            });
        });

        describe('currentUserId', function () {
            it('should get the current userId from localStorage', function () {
                $window.localStorage['user_id'] = 2;
                expect(auth.currentUserId()).toEqual('2');
            });
        });

        describe('loggedIn', function () {
            beforeEach(function() {
                auth.loggedIn.and.callThrough();
            });

            it('should return true if user is logged in', function () {
                $window.localStorage['token'] = token;
                auth.loggedIn();
            });

            it('should return false if user is not logged in', function () {
                $window.localStorage.removeItem('token');
                expect(auth.loggedIn()).toBe(false);
            });
        });

        describe('currentUser', function () {
            it('should return the currently logged in user email', function () {
                $window.localStorage['token'] = token;
                expect(auth.currentUser()).toEqual('andrew@dyergroup.com.au');
            });
        });

        describe('checkUser', function () {
            beforeEach(function() {
                $window.localStorage['token'] = token;
            });

            it('should return true for any', function () {
                expect(auth.checkUser('any')).toBe(true);
            });

            it('should handle unauthed', function () {
                expect(auth.checkUser('unauthed')).toBe(false);
            });

            it('should handle authed', function () {
                expect(auth.checkUser('authed')).toBe(true);
            });

            it('should handle roles', function () {
                expect(auth.checkUser('system_admin')).toBe(true);
            });

            it('should reject invalid role', function () {
                expect(auth.checkUser('loser')).toBe(false);
            });

            it('should handle not logged in', function () {
                $window.localStorage.removeItem('token');
                expect(auth.checkUser('authed')).toBe(false);
            });
        });
    });
})();