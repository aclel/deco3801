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
    
    /** E2E tests for dashboard page */

    describe('dashboard page', function() {

        it('should be on the dashboard page', function() {
            browser.get('/#/dashboard');
            expect(browser.getCurrentUrl()).toMatch('dashboard');
        });

        it('updating time filters works', function() {
            element(by.model('vm.times.inputs.since.value')).sendKeys('50');
            browser.sleep(1000);
            expect(element.all(by.repeater('buoyGroup in vm.buoys')).count() > 0).toBe(true);
        });
    });
})();