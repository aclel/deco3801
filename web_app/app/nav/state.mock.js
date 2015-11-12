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
    
    angular.module('mock.state', [])
        .factory('$state', state);
    
    /**
        * @ngdoc service
        * @name mock.state
        * @description Mock of $state service for testing
    **/
    function state() {

        var current = { data: { access: 'authed' }};
        
        /** The mock $state to expose */
        return {
            current: current,
            go: function() {},
            includes: function() { return true; },
            get: get
        };

        /** Mock get method */
        function get(name) {
            if (name == 'dashboard') return { data: { access: 'user' }};
            if (name == 'admin') return { data: { access: 'system_admin' }};
            return current;
        }
    }
})();