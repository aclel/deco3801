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
    
    angular.module('app.nav')
        .factory('nav', nav);
    
    /**
        * @ngdoc service
        * @name app.nav.nav
        * @requires $rootScope
        * @requires $state
        * @requires $timeout
        * @requires $interval
        * @requires auth
        * @requires server
    **/
    function nav($rootScope, $state, $timeout, $interval, auth, server) {

        // Internal variables
        var loading = { show: false };
        var warnings = { num: 0 };
        var justRefreshedWarnings = false;
        var warningInterval;
        var refreshingWarnings = false;

        registerLoadingListener();
    
        /** The service methods to expose */
        return {
            getLoading: getLoading,
            getWarnings: getWarnings,
            stateActive: stateActive,
            checkShowNav: checkShowNav,
            logout: logout,
            changePassword: changePassword
        };

        /**
         * Get loading state
         * @return {object} object (contains true if loading, else false)
         */
        function getLoading() {
            return loading;
        }

        /**
         * Get number of current warnings
         * @return {object} object (contains number of warnings)
         */
        function getWarnings() {
            return warnings;
        }

        /** Register callback for loading event */
        function registerLoadingListener() {
            $rootScope.$on('loading', function(event, on) {
                if (on) {
                    // Don't show loader when refreshing warnings
                    if (!refreshingWarnings) {
                        loading.show = true;
                    }
                } else {
                    refreshWarnings();
                    // apply a short delay when hiding the loader
                    $timeout(function() {
                        loading.show = false;
                    }, 800);
                }
            });
        }

        /** Query the server for warnings and update badge */
        function refreshWarnings() {
            if (justRefreshedWarnings) return;
            if (!auth.checkUser($state.current.data.access)) return;

            // if warnings were queried within last 10 seconds, don't query again
            justRefreshedWarnings = true;
            $interval(function() {
                justRefreshedWarnings = false;
            }, 1000*10, 1);

            refreshingWarnings = true;
            server.getWarnings().then(function(res) {
                refreshingWarnings = false;
                warnings.num = res.data.warnings.length;
            });

            // automatically refresh warnings every 10 minutes
            if (warningInterval) {
                $interval.cancel(warningInterval);
            }
            warningInterval = $interval(refreshWarnings, 1000*60*10);
        }
        
        /** 
         * Check whether a state is active
         * @param  {string} name state name
         * @return {bool}      state is active
         */
        function stateActive(name) {
            return $state.includes(name);
        }
        
        /**
         * Check whether to show navigation link based on authentication
         * @param  {string} nav nav link element
         * @return {bool}     show nav element
         */
        function checkShowNav(nav) {
            switch(nav) {
                case 'account':
                    return auth.checkUser('authed');
                default:
                    return auth.checkUser($state.get(nav).data.access);
            }
        }
        
        /** Logout user and redirect to login page */
        function logout() {
            auth.logout();
            $state.go('login'); 
        }

        /** Redirect user to change password page */
        function changePassword() {
            $state.go('change_password');
        }
    }
})();