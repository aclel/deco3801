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
    
    /** Unit tests for nav controller */
    describe('Controller: NavController', function() {
        var $controller, ctrl, rootScope;
        var nav;
        
        beforeEach(module('app'));
        
        // Mock services and spy on methods
        beforeEach(inject(function($q, _nav_) {
            nav = _nav_;
            spyOn(nav, 'getLoading').and.callThrough();
            spyOn(nav, 'getWarnings').and.callThrough();
            spyOn(nav, 'stateActive').and.returnValue(true);
            spyOn(nav, 'checkShowNav').and.returnValue(true);
            spyOn(nav, 'logout').and.stub();
            spyOn(nav, 'changePassword').and.stub();
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope) {
            ctrl = $controller('NavController', {
                nav: nav
            });
            rootScope = $rootScope;
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });

            it('should expose stuff', function() {
                expect(angular.isArray(ctrl.accountMenu)).toBe(true);
                expect(ctrl.loading).toBeDefined();
                expect(ctrl.warnings).toBeDefined();
                expect(ctrl.checkShowNav).toBeDefined();
                expect(ctrl.stateActive).toBeDefined();
                expect(ctrl.logout).toBeDefined();
                expect(ctrl.changePassword).toBeDefined();
            });
        });

        describe('Calls nav', function() {
            it('should not be showing loading', function() {
                expect(nav.getLoading).toHaveBeenCalled();
                expect(ctrl.loading.show).toBe(false);
            });

            it ('should have 0 warnings by default', function() {
                expect(nav.getWarnings).toHaveBeenCalled();
                expect(ctrl.warnings.num).toEqual(0);
            });

            it ('should call stateActive', function() {
                var result = nav.stateActive();
                expect(nav.stateActive).toHaveBeenCalled();
                expect(result).toBe(true);
            });

            it ('should call checkShowNav', function() {
                var result = nav.checkShowNav();
                expect(nav.checkShowNav).toHaveBeenCalled();
                expect(result).toBe(true);
            });

            it ('should call logout', function() {
                nav.logout();
                expect(nav.logout).toHaveBeenCalled();
            });

            it ('should call change password', function() {
                nav.changePassword();
                expect(nav.changePassword).toHaveBeenCalled();
            });
        });

        describe('Respond to loading', function() {
            it('should update vm.loading', function() {
                expect(ctrl.loading.show).toBe(false);
                rootScope.$broadcast('loading', true);
                expect(ctrl.loading.show).toBe(true);
            });
        });
    });
})();