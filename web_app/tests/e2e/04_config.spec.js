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
    
    /** E2E tests for config page */

    describe('config page', function() {

        it('should be on the config page', function() {
            browser.get('/#/config');
            expect(browser.getCurrentUrl()).toMatch('config');
        });

        it('buoys are listed', function() {
            expect(element.all(by.repeater('buoyGroup in vm.buoyGroups | filter: { archived: false }')).count() > 0).toBe(true);
        });
    });
})();