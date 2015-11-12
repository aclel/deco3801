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
    
    angular.module('app.admin')
        .factory('buoyLogs', buoyLogs);
    
    /**
        * @ngdoc service
        * @name app.admin.buoyLogs
        * @requires $websocket
        * @requires $log
        * @requires server
    **/
    function buoyLogs($websocket, $log, server) {

        // Internal variables
        var webSocket;
        var logs = [];
        var closed = { closed: false };

        initialiseWebSocket();

        /** The service methods to expose */
        return {
            getLogs: getLogs,
            getClosed: getClosed
        };

        /** Open the websocket and bind callbacks */
        function initialiseWebSocket() {
            logs.length = 0;
            webSocket = $websocket(server.getBuoyLogsAddress());
            webSocket.onMessage(onMessage);
            webSocket.onClose(onClose);
            closed.closed = false;
            $log.debug('websocket opened');
        }

        /**
         * Get logs
         * @return {[string]} array of logs
         */
        function getLogs() {
            return logs;
        }

        /**
         * Get closed state
         * @return {object} whether the socket is open or closed
         */
        function getClosed() {
            return closed;
        }

        /**
         * websocket onMessage callback
         * log the message
         * @param  {object} message incoming data
         */
        function onMessage(message) {
            logMessage(JSON.parse(message.data));
        }

        /**
         * websocket onClose callback
         * try and reopen the websocket immediately
         */
        function onClose() {
            closed.closed = true;
            $log.debug('websocket closed');
            initialiseWebSocket(); // try and reopen the socket immediately
        }

        /**
         * format and append a string to logs array
         * @param  {object} message message data object
         */
        function logMessage(message) {
            message = message.body;
            var lines = message.split('\n');
            lines.forEach(function(line) {
                logs.push(line);
            });
            logs.push('----------------------------------');
        }
    }
})();