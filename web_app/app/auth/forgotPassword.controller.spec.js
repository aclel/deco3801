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
    
    /** Unit tests for forgotPassword controller */
    describe('Controller: ForgotPasswordController', function() {
        var $controller, ctrl, deferred, scope, server;
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, _server_) {
            deferred = $q.defer();
            server = _server_;
            spyOn(server, 'forgotPassword').and.returnValue(deferred.promise);
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('ForgotPasswordController');
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose vm stuff', function() {
                expect(ctrl.success).toEqual(-1);
                expect(ctrl.waiting).toEqual(false);

                expect(ctrl.forgotPassword).toBeDefined();
            });
        });

        describe('forgotPassword', function () {
            it('show success message if successful', function () {
                ctrl.forgotPassword();
                deferred.resolve();
                scope.$digest();
                expect(ctrl.success).toEqual(1);
            });

            it('show error message if unsuccessful', function () {
                ctrl.forgotPassword();
                deferred.reject();
                scope.$digest();
                expect(ctrl.success).toEqual(0);
            });
        });
    });
})();