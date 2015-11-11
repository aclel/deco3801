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

        it('should be on the warnings page', function() {
            browser.get('/#/warnings');
            expect(browser.getCurrentUrl()).toMatch('warnings');
        });

        it('should display 2 warnings', function() {
            var warnings = element.all(by.repeater('warning in vm.warnings'));
            expect(warnings.count()).toEqual(3);
        });
    });
})();