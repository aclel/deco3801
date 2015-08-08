/// <reference path="../typings/angularjs/angular.d.ts"/>
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
        
        'app.dashboard'
    ]);
})();