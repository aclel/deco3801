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
    
    angular.module('app', [
        'ui.router',
        'mgcrea.ngStrap',
        'mgcrea.ngStrap.helpers.dimensions',
        'mgcrea.ngStrap.helpers.dateParser',
        'mgcrea.ngStrap.helpers.parseOptions',
        'mgcrea.ngStrap.tooltip',
        'mgcrea.ngStrap.datepicker',
        'mgcrea.ngStrap.timepicker',
        'mgcrea.ngStrap.button',
        'mgcrea.ngStrap.select',
        'chart.js',
        
        'app.auth',
        'app.dashboard',
        'app.config'
    ]);
})();