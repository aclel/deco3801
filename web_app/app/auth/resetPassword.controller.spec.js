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
    
    /** Unit tests for resetPassword controller */
    describe('Controller: ResetPasswordController', function() {
        var $controller, ctrl, deferred, scope, server, gui, state;
        var stateParams = { token: 'asd' };
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, $state, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'resetPassword').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertError').and.callThrough();
            state = $state;
            spyOn(state, 'go').and.stub();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('ResetPasswordController', {
                $stateParams: stateParams,
            });
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose vm stuff', function() {
                expect(ctrl.success).toEqual(-1);
                expect(ctrl.waiting).toEqual(false);

                expect(ctrl.resetPassword).toBeDefined();
            });
        });

        describe('activate', function () {
            it('should not redirect if there is a token present', function () {
                expect(state.go).not.toHaveBeenCalled();
            });
        });

        describe('resetPassword', function () {
            it('show success message if successful', function () {
                ctrl.resetPassword();
                deferred.resolve();
                scope.$digest();
                expect(ctrl.success).toEqual(1);
            });

            it('show error message if unsuccessful', function () {
                ctrl.resetPassword();
                deferred.reject();
                scope.$digest();
                expect(ctrl.success).toEqual(0);
            });

            it('alert error if passwords do not match', function () {
                ctrl.confirmPassword = 'asd';
                ctrl.resetPassword();
                deferred.reject();
                scope.$digest();
                expect(gui.alertError).toHaveBeenCalled();
            });
        });
    });

    describe('Controller: ResetPasswordController', function() {
        var $controller, ctrl, deferred, scope, server, gui, state;
        var stateParams = {};
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, $state, _server_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'resetPassword').and.returnValue(deferred.promise);
            gui = _gui_;
            spyOn(gui, 'alertError').and.callThrough();
            state = $state;
            spyOn(state, 'go').and.stub();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('ResetPasswordController', {
                $stateParams: stateParams,
            });
        }));

        describe('activate', function () {
            it('should redirect if there is no token present', function () {
                expect(state.go).toHaveBeenCalled();
            });
        });
    });
})();