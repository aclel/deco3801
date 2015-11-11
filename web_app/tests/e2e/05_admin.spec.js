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
    
    /** E2E tests for admin page */

    describe('admin page', function() {

        it('should be on the admin page', function() {
            browser.get('/#/admin');
            expect(browser.getCurrentUrl()).toMatch('admin');
        });

        it('users are listed', function() {
            expect(element.all(by.repeater('user in vm.users')).count() > 0).toBe(true);
        });
    });
})();