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
    
    /** Unit tests for login controller */
    describe('Controller: LoginController', function() {
        var $controller, ctrl, deferred, scope, server, auth, gui, state;
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, $state, _server_, _auth_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'login').and.returnValue(deferred.promise);
            auth = _auth_;
            spyOn(auth, 'loggedIn').and.returnValue(true);
            gui = _gui_;
            spyOn(gui, 'alertError').and.callThrough();
            state = $state;
            spyOn(state, 'go').and.stub();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('LoginController');
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose login', function() {
                expect(ctrl.login).toBeDefined();
            });
        });

        describe('login', function () {
            it('should redirect to dashboard on successful login', function () {
                ctrl.login();
                deferred.resolve({ data: { lastLogin: { Valid: true }}});
                scope.$digest();
                expect(state.go).toHaveBeenCalled();
                expect(state.go.calls.mostRecent().args[0]).toEqual('dashboard');
            });

            it('should redirect to change_password if first time login', function () {
                ctrl.login();
                deferred.resolve({ data: { lastLogin: { Valid: false }}});
                scope.$digest();
                expect(state.go).toHaveBeenCalled();
                expect(state.go.calls.mostRecent().args[0]).toEqual('change_password');
            });

            it('should alert errors', function () {
                ctrl.login();
                deferred.reject();
                scope.$digest();
                expect(gui.alertError).toHaveBeenCalled();
            });
        });
    });

    /** Unit tests for login controller */
    describe('Controller: LoginController', function() {
        var $controller, ctrl, deferred, scope, server, auth, gui, state;
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, $state, _server_, _auth_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'login').and.returnValue(deferred.promise);
            auth = _auth_;
            spyOn(auth, 'loggedIn').and.returnValue(false);
            gui = _gui_;
            spyOn(gui, 'alertError').and.callThrough();
            state = $state;
            spyOn(state, 'go').and.stub();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('LoginController');
        }));

        describe('login', function () {
            it('should do nothing if not logged in', function () {
                ctrl.login();
                deferred.resolve();
                scope.$digest();
                expect(state.go).not.toHaveBeenCalled();
            });
        });
    });
})();