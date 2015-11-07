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
        .controller('BuoyLogsController', BuoyLogsController);
    
    /**
        * @ngdoc object
        * @name app.admin.controller:BuoyLogsController
        * @description Provides viewmodel for admin view.
        *              Most functionaliy is delegated to tab subcontrollers.
        * @requires server
    **/
    function BuoyLogsController(buoyLogs) {
        var vm = this;
        
        vm.logs = buoyLogs.getLogs();
        vm.closed = buoyLogs.getClosed();
    }
})();