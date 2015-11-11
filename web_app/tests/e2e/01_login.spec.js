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
    
    /** E2E tests for login page */

    describe('Login page', function() {

        it('should not redirect on fail to login', function () {
            browser.get('/');
            element(by.model('vm.email')).sendKeys('andrew@dyergroup.com.au');
            element(by.model('vm.password')).sendKeys('password', protractor.Key.ENTER);
            browser.sleep(1000);
            expect(browser.getCurrentUrl()).not.toMatch('dashboard');
        });

        it('should login and redirect', function() {
            element(by.model('vm.email')).clear();
            element(by.model('vm.email')).sendKeys('andrew@dyergroup.com.au');
            element(by.model('vm.password')).clear();
            element(by.model('vm.password')).sendKeys('waterwatcher', protractor.Key.ENTER);
            browser.sleep(1000);
            expect(browser.getCurrentUrl()).toMatch('dashboard');
        });
    });
})();