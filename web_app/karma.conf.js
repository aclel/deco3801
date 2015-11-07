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
// Karma configuration
// Generated on Fri Aug 28 2015 23:58:02 GMT+1000 (E. Australia Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // testing dependencies
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      // 3rd-party libraries
      'https://maps.googleapis.com/maps/api/js',
      'assets/js/infobox.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-strap/dist/angular-strap.min.js',
      'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
      'bower_components/angular-ui-tree/dist/angular-ui-tree.min.js',
      'bower_components/Chart.js/Chart.min.js',
      'bower_components/Chart.Scatter.js/Chart.Scatter.min.js',
      'bower_components/angular-chart.js/dist/angular-chart.min.js',
      'bower_components/angular-websocket/angular-websocket.min.js',
      'bower_components/moment/moment.js',
      'bower_components/angular-ui-indeterminate/dist/indeterminate.js',
      'bower_components/file-saver.js/FileSaver.js',
      // app
      'app/**/*.module.js',
      'app/**/*.js',
      'assets/js/templates.js',
      // tests
      'app/**/*.mock.js',
      'app/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/!(*.mock|*.spec).js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    
    coverageReporter: {
      type : 'html',
      // output coverage reports
      dir : 'coverage/'
    },



    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
