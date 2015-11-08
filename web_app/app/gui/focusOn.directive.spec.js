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
        var element, scope, rootScope;

        beforeEach(module('app'));

        beforeEach(inject(function($rootScope, $compile) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            element = angular.element('<input type="text" focus-on="editNew">');
            element = $compile(element)(scope);
            scope.$digest();
        }));

        it('should focus', function () {
            rootScope.$broadcast('focusOn', 'editNew');
            // console.log(document.activeElement);
        });

        it('should not focus', function () {
            rootScope.$broadcast('focusOn', 'blah');
            // console.log(document.activeElement);
        });
    });
})();