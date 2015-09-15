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
    
    /**
        * @ngdoc overview
        * @name app.module
        * @description App module, ties together all submodules
    **/
    angular.module('app', [
        // Shared modules
        'app.core',
        'app.gui',
        'app.auth',
        'app.nav',
        
        // Feature modules        
        'app.dashboard',
        'app.config',
        'app.warnings',
        'app.admin'
    ]);
})();