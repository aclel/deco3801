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
    
    /** E2E tests for change_password page */

    describe('change_password page', function() {

        it('should not redirect on fail to change_password', function () {
            browser.get('/#/change_password');
            browser.sleep(1000);
            element(by.model('vm.currentPassword')).sendKeys('password');
            element(by.model('vm.newPassword')).sendKeys('newpass');
            element(by.model('vm.confirmPassword')).sendKeys('newpass', protractor.Key.ENTER);
            browser.sleep(1000);
            expect(element(by.id('fail')).isPresent()).toBe(true);
        });

        it('should change_password and redirect', function() {
            element(by.model('vm.currentPassword')).clear();
            element(by.model('vm.confirmPassword')).sendKeys('waterwatcher', protractor.Key.ENTER);
            browser.sleep(1000);
            expect(element(by.id('fail')).isPresent()).toBe(false);
        });
    });
})();