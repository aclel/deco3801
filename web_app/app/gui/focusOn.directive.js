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
        .directive('focusOn', focusOn);
    
    /**
        * @ngdoc directive
        * @name app.gui.directive:focusOn
        * @description Adding this attribute to an input allows it to be focused 
        *              when an event with the specified name is broadcast
        * @element any
        * @example focus-on="editNew"
    **/
    function focusOn() {
        return function(scope, elem, attrs) {
            scope.$on('focusOn', function(e, name) {
                if (name === attrs.focusOn) {
                    elem[0].focus();
                }
            });
        }
    }
})();