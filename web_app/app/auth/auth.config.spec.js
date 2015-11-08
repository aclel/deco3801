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
    
    /** Unit tests for auth config */
    describe('Auth config', function() {
        var state, auth, rootScope;
        var canGo = false;

        beforeEach(module('app'));

        beforeEach(inject(function($rootScope, $state, _auth_) {
            rootScope = $rootScope;
            state = $state;
            spyOn(state, 'go').and.stub();
            auth = _auth_;
            spyOn(auth, 'checkUser').and.callFake(function() {
                if (!canGo) {
                    canGo = true;
                    return false;
                } 
                return true;
            });
            spyOn(auth, 'loggedIn').and.returnValue(false);
        }));

        describe('Route authentication restrictions', function () {
            it('should allow an authenticated user to proceed', function () {
                auth.checkUser.and.returnValue(true);
                state.transitionTo('dashboard');
                expect(auth.checkUser).toHaveBeenCalled();
            });

            it('should redirect an unauthenticated user to login', function () {
            canGo = false;
                state.transitionTo('dashboard');
                expect(auth.checkUser).toHaveBeenCalled();
                expect(state.go).toHaveBeenCalled();
                expect(state.go.calls.mostRecent().args[0]).toEqual('login');
            });

            it('should redirect an authenticated user to dashboard', function () {
                canGo = false;
                auth.loggedIn.and.returnValue(true);
                state.transitionTo('login');
                expect(auth.checkUser).toHaveBeenCalled();
                expect(state.go).toHaveBeenCalled();
                expect(state.go.calls.mostRecent().args[0]).toEqual('dashboard');
            });

            it('should not redirect if the page did not just load', function () {
                auth.checkUser.and.returnValue(true);
                state.transitionTo('dashboard');
                rootScope.$apply();
                auth.checkUser.and.returnValue(false);
                state.go.calls.reset();
                state.transitionTo('warnings');
                expect(state.go).not.toHaveBeenCalled();
            });
        });
    });
})();