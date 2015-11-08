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
    
    /** Unit tests for changePassword controller */
    describe('Controller: ChangePasswordController', function() {
        var $controller, ctrl, deferred, scope, server, auth, gui;
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _auth_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'changePassword').and.returnValue(deferred.promise);
            auth = _auth_;
            spyOn(auth, 'setFirstLogin').and.callThrough();
            spyOn(auth, 'getFirstLogin').and.callThrough();
            spyOn(auth, 'setSavedPassword').and.callThrough();
            spyOn(auth, 'getSavedPassword').and.callThrough();
            gui = _gui_;
            spyOn(gui, 'alertError').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('ChangePasswordController');
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose vm stuff', function() {
                expect(ctrl.success).toEqual(-1);
                expect(ctrl.waiting).toEqual(false);
                expect(ctrl.firstLogin).toEqual(false);

                expect(ctrl.changePassword).toBeDefined();
                expect(ctrl.tryAgain).toBeDefined();
            });
        });

        describe('changePassword', function () {
            it('show success message if successful', function () {
                ctrl.changePassword();
                deferred.resolve();
                scope.$digest();
                expect(ctrl.success).toEqual(1);
            });

            it('show error message if unsuccessful', function () {
                ctrl.changePassword();
                deferred.reject();
                scope.$digest();
                expect(ctrl.success).toEqual(0);
            });

            it('alert error if passwords do not match', function () {
                ctrl.confirmPassword = 'asd';
                ctrl.changePassword();
                deferred.reject();
                scope.$digest();
                expect(gui.alertError).toHaveBeenCalled();
            });
        });

        describe('tryAgain', function () {
            it('should reset vm', function () {
                ctrl.success = 1;
                ctrl.currentPassword = 'asd';
                ctrl.newPassword = 'asd';
                ctrl.confirmPassword = 'asd';
                ctrl.tryAgain();
                expect(ctrl.success).toEqual(-1);
                expect(ctrl.currentPassword).toEqual('');
                expect(ctrl.newPassword).toEqual('');
                expect(ctrl.confirmPassword).toEqual('');
            });
        });
    });

    describe('Controller: ChangePasswordController', function() {
        var $controller, ctrl, deferred, scope, server, auth, gui;
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_, _auth_, _gui_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'changePassword').and.returnValue(deferred.promise);
            auth = _auth_;
            spyOn(auth, 'setFirstLogin').and.callThrough();
            spyOn(auth, 'getFirstLogin').and.callThrough();
            spyOn(auth, 'setSavedPassword').and.callThrough();
            spyOn(auth, 'getSavedPassword').and.returnValue('asdf');
            gui = _gui_;
            spyOn(gui, 'alertError').and.callThrough();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('ChangePasswordController');
        }));

        describe('activate', function () {
            it('set currentpassword if first login', function () {
                expect(ctrl.currentPassword).toEqual(auth.getSavedPassword());
            });
        });
    });
})();