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
    
    /** E2E tests for warnings page */

    describe('Warnings page', function() {

        // login
        beforeAll(function() {
            browser.get('/');
            element(by.model('vm.email')).sendKeys('andrew@dyergroup.com.au');
            element(by.model('vm.password')).sendKeys('waterwatcher', protractor.Key.ENTER);
            // wait for dashboard page to load, otherwise protractor redirects too fast
            browser.wait(element(by.id('dashboard')).isPresent()); 
            browser.get('/#/warnings');
        });

        it('should be on the warnings page', function() {
            expect(browser.getCurrentUrl()).toMatch("warnings");
        });

        it('should display 2 warnings', function() {
            var warnings = element.all(by.repeater('warning in vm.warnings'));
            expect(warnings.count()).toEqual(2);
        });
    });
})();