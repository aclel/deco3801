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