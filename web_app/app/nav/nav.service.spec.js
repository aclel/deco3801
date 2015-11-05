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
    
    /** Unit tests for nav service */
    describe('Service: nav', function() {
        var nav, rootScope, auth, server, state, scope, timeout, interval;

        beforeEach(module('app'));
        beforeEach(module('mock.server'));
        beforeEach(module('mock.state'))

        beforeEach(inject(function(_auth_, _server_, _$state_, _$timeout_, _$interval_) {
            auth = _auth_;
            spyOn(auth, 'checkUser').and.callFake(function(user) {
                if (user == 'authed') return true;
                return false;
            });
            spyOn(auth, 'logout').and.stub();
            server = _server_;
            spyOn(server, 'getWarnings').and.callThrough();
            state = _$state_;
            spyOn(state, 'includes').and.returnValue(true);
            spyOn(state, 'go').and.stub();
            timeout = _$timeout_;
            interval = _$interval_;
        }))

        beforeEach(inject(function(_nav_, $rootScope) {
            nav = _nav_;
            rootScope = $rootScope;
            scope = rootScope.$new();
        }));

        describe('getLoading', function() {
            it('should return loading', function() {
                expect(nav.getLoading().show).toBe(false);
                rootScope.$broadcast('loading', true);
                expect(nav.getLoading().show).toBe(true);
                rootScope.$broadcast('loading', false);
                timeout.flush();
                expect(nav.getLoading().show).toBe(false);
            });
        });

        describe('getWarnings', function() {
            it('should return warnings', function() {
                expect(nav.getWarnings().num).toEqual(0);
            });
        });

        describe('refreshWarnings', function() {
            it('should update warnings', function() {
                rootScope.$broadcast('loading', false);
                expect(server.getWarnings).toHaveBeenCalled();
                scope.$digest(); // resolve promises
                expect(nav.getWarnings().num).toEqual(2);
            });

            it('should not update warnings too often', function() {
                rootScope.$broadcast('loading', false);
                expect(server.getWarnings).toHaveBeenCalled();
                expect(server.getWarnings.calls.count()).toEqual(1);
                scope.$digest(); // resolve promises
                rootScope.$broadcast('loading', false);
                expect(server.getWarnings.calls.count()).toEqual(1);
                interval.flush(1000*10);
                rootScope.$broadcast('loading', false);
                expect(server.getWarnings.calls.count()).toEqual(2);
            });
        });

        describe('stateActive', function() {
            it ('should call state.includes', function() {
                expect(nav.stateActive()).toBe(true);
                expect(state.includes).toHaveBeenCalled();
            });
        });

        describe('checkShowNav', function() {
            it('should call auth.checkUser', function() {
                expect(nav.checkShowNav('account')).toBe(true);
                expect(auth.checkUser).toHaveBeenCalled();
                expect(nav.checkShowNav('admin')).toBe(false);
            })
        });

        describe('logout', function() {
            it ('should call state.go', function() {
                nav.logout();
                expect(state.go).toHaveBeenCalled();
            });
            it ('should call auth.logout', function() {
                nav.logout();
                expect(auth.logout).toHaveBeenCalled();
            });
        });

        describe('changePassword', function() {
            it ('should call state.go', function() {
                nav.changePassword();
                expect(state.go).toHaveBeenCalled();
            });
        });
    });
})();