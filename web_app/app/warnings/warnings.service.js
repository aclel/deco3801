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
    
    angular.module('app.warnings')
        .factory('warnings', warningsService);
        
    /**
        * @ngdoc service
        * @name app.warnings.warnings
        * @description Handles logic for warnings page
        * @requires $log
        * @requires server
        * @requires moment
    **/
    function warningsService($log, server, moment) {
        /** Internal variables. These are preserved until page refresh. */
        var warnings = [];
        var buoyInstances = [];
        var sensorTypes = [];

        /** The service methods to expose */
        return {
            refreshData: refreshData,
            getWarnings: getWarnings
        };

        /** Refresh data from the server */
        function refreshData() {
            querySensorTypes();
            queryBuoyInstances();
            return queryWarnings(); // returns a promise
        }

        /**
         * Get warnings
         * @return {object} warnings
         */
        function getWarnings() {
            return warnings;
        }

        /** Query warnings from server */
        function queryWarnings() {
            var promise = server.getWarnings();
            promise.then(function(res) {
                warnings = res.data.warnings;
                formatWarnings();
            }, function(res) {
                $log.error(res);
            });
            return promise;
        }
        
        /** Query buoy instances from server */
        function queryBuoyInstances() {
            server.getBuoyInstances().then(function(res) {
                buoyInstances = res.data.buoyInstances;
                formatWarnings();
            }, function(res) {
                $log.error(res);
            });
        }

        /** Query sensor types from server */
        function querySensorTypes() {
            server.getSensorTypes().then(function(res) {
                sensorTypes = res.data.sensorTypes;
                formatWarnings();
            }, function(res) {
                $log.error(res);
            });
        }
        
        /** Associate buoy, sensor and time info with warnings */
        function formatWarnings() {
            if (!warnings.length ||
                !buoyInstances.length ||
                !sensorTypes.length) return;

            warnings.forEach(function(warning) {
                // parse time
                warning.readingTime = moment(warning.readingTimestamp,
                    'X').format("DD/MM/YY HH:mm A");
                // get buoy name
                for (var i = 0; i < buoyInstances.length; i++) {
                    var buoyInstance = buoyInstances[i];
                    if (buoyInstance.id == warning.warningTrigger.buoyInstanceId) {
                        warning.buoyName = buoyInstance.name;
                        break;
                    }
                }
                // get sensor name
                for (var i = 0; i < sensorTypes.length; i++) {
                    var sensorType = sensorTypes[i];
                    if (sensorType.id == warning.warningTrigger.sensorTypeId) {
                        warning.sensorName = sensorType.name;
                        break;
                    }
                }
                // format sensor, operator and value
                warning.warning = warning.sensorName + " " +
                    warning.warningTrigger.operator + " " +
                    warning.warningTrigger.value;
            });
        }
    }
})();
