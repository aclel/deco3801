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

    /** Unit tests for focusOn directive */
    describe('Directive: focusOn', function() {
        var element, scope;

        beforeEach(module('app'));

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            element = angular.element('<input type="text" esc-cancel="vm.editCancel()">');
            element = $compile(element)(scope);
            scope.$digest();
            element.triggerHandler('focus');
        }));

        it('should do something', function () {
            keyPress(27);
        });

        function keyPress(key) {
            var event = document.createEvent('Event');
            event.keyCode = key;
            event.initEvent('keydown');
            document.dispatchEvent(event);
        }
    });
})();