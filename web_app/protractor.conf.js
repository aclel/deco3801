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
// Protractor configuration
// Generated on Fri Aug 28 2015 23:58:02 GMT+1000 (E. Australia Standard Time)

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine2',

    // URL of web application
    baseUrl: 'http://localhost:9000',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['tests/e2e/**/*.spec.js'],

    jasmineNodeOpts: {
        showColors: true
    },

    onPrepare: function() {
      jasmine.getEnv().addReporter(
        new HtmlScreenshotReporter({
          dest: 'coverage/e2e',
          filename: 'report.html'
        })
      );
   }
}