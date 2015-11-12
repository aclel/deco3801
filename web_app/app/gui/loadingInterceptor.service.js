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
    
    angular.module('app.gui')
        .factory('loadingInterceptor', loadingInterceptor);
    
    /**
        * @ngdoc service
        * @name module.loadingInterceptor
        * @requires gui
        * @description intercepts all requests and responses, sets loading state
    **/
    function loadingInterceptor($rootScope) {
        
        /** The service methods to expose */
        return {
            request: request,
            response: response
        };
        
        /** Start loading */
        function request(config) {
            $rootScope.$broadcast('loading', true);
            return config;
        }
        
        /** Finish loading */
        function response(res) {
            $rootScope.$broadcast('loading', false);
            return res;
        }
    }
})();