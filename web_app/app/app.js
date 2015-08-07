/// <reference path="../typings/angularjs/angular.d.ts"/>
(function() {
    'use strict';
    
    angular.module('app', [
        'ui.router',
        'mgcrea.ngStrap',
        'mgcrea.ngStrap.helpers.dimensions',
        'mgcrea.ngStrap.helpers.dateParser',
        'mgcrea.ngStrap.tooltip',
        'mgcrea.ngStrap.datepicker',
        'mgcrea.ngStrap.timepicker',
        
        'app.dashboard'
    ]);
})();