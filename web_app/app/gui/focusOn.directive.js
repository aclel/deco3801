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