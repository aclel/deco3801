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
    
    /** Unit tests for hello controller */
    describe('Controller: HelloController', function() {
        var $controller, ctrl, state, server;
        
        beforeEach(module('app'));
        beforeEach(module('mock.state'));

        beforeEach(inject(function($state, _server_) {
            state = $state;
            spyOn(state, 'go').and.stub();
            spyOn(state, 'includes').and.returnValue(true);
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $log) {
            ctrl = $controller('HelloController', {
                $state: state
            });
            $rootScope.$apply(); // needed to resolve activate
        }));

        describe('State', function() {
            it('should exist', function() {
                expect(ctrl).toBeDefined();
            });
        });

        describe('Activate', function() {
            it('should redirect', function() {
                expect(state.go).toHaveBeenCalled();
                expect(state.includes).toHaveBeenCalled();
            });
        });
    });

    /** 2nd set of unit tests for hello controller
        injects a different state spy */
    describe('Controller: HelloController', function() {
        var $controller, ctrl, state, server;
        
        beforeEach(module('app'));
        beforeEach(module('mock.state'));

        beforeEach(inject(function($state, _server_) {
            state = $state;
            spyOn(state, 'go').and.stub();
            spyOn(state, 'includes').and.returnValue(false); // this is the difference
        }));

        // Initialise the controller
        beforeEach(inject(function($controller, $rootScope, $log) {
            ctrl = $controller('HelloController', {
                $state: state
            });
            $rootScope.$apply(); // needed to resolve activate
        }));

        describe('Activate', function() {
            it('should redirect', function() {
                expect(state.go).toHaveBeenCalled();
                expect(state.includes).toHaveBeenCalled();
            });
        });
    });
})();