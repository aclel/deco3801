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
    **/
    function buoyLogs($websocket, server, gui) {

        // Internal variables
        var webSocket;
        var logs = [];

        initialiseWebSocket();

        /** The service methods to expose */
        return {
            getLogs: getLogs
        };

        function initialiseWebSocket() {
            webSocket = $websocket(server.getBuoyLogsAddress());
            webSocket.onMessage(onMessage);
        }

        function getLogs() {
            return logs;
        }

        function onMessage(message) {
            logs.push(JSON.parse(message.data));
        }

        function onClose() {
            gui.alertInfo('Connection to server closed.');
        }
    }
})();