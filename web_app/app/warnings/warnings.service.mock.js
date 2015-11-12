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
    
    angular.module('mock.warnings', [])
        .factory('warnings', warnings);
    
    /**
        * @ngdoc service
        * @name mock.warnings
        * @description Mock of warnings service for testing
        * @requires $q
    **/
    function warnings($q) {
        
        /** The mock service methods to expose */
        return {
            refreshData: refreshData,
            getWarnings: getWarnings
        };
        
        /** Mocked refreshData function */
        function refreshData() {
            var defer = $q.defer();
            defer.resolve();
            return defer.promise;
        }
        
        /** Mocked getWarnings function */
        function getWarnings() {
            return [
                {
                  "readingValue": 273,
                  "readingTimestamp": 1424610360,
                  "warningTrigger": {
                    "id": 52,
                    "value": 100,
                    "operator": ">",
                    "message": "The water is very dirty!",
                    "buoyInstanceId": 118,
                    "sensorTypeId": 1
                  }
                },
                {
                  "readingValue": 100.31,
                  "readingTimestamp": 1445727603,
                  "warningTrigger": {
                    "id": 53,
                    "value": 100,
                    "operator": ">",
                    "message": "The water is very dirty!",
                    "buoyInstanceId": 119,
                    "sensorTypeId": 1
                  }
                }
            ];
        }
    }
})();