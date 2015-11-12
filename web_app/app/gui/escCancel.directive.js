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
        .directive('escCancel', escCancel);
    
    /**
        * @ngdoc directive
        * @name app.gui.directive:escCancel
        * @description Adding this attribute allows a function to be called when esc is pressed
        * @element any
        * @example esc-cancel="vm.cancelEditing()"
    **/
    function escCancel() {
        return function(scope, elem, attrs) {
            elem.bind("keydown keypress", function (event) {
                if (event.which === 27) { // esc
                    scope.$apply(attrs.escCancel);
                    event.preventDefault();
                }
            });
        }
    }
})();