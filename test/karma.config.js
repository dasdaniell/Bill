// Karma configuration
// Generated on Fri Feb 28 2014 13:23:58 GMT+0200 (GTB Standard Time)
/*jslint sloppy: true */
/*global module*/

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            //3rd Party Code
            'app/libs/angular/angular.js',
            'app/libs/angular/angular-route.min.js',

            //App-specific Code
            'app/scripts/*.js',
            'app/scripts/modules/*.js',
            'app/scripts/factories/*.js',
            'app/scripts/controllers/*.js',

            //test filesremove any loaders after the server call
            'test/unit/**/*.js'
        ],


        // list of files to exclude
        exclude: [],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        preprocessors: {
            'app/scripts/app.js': 'coverage',
            'app/scripts/modules/**/*.js': 'coverage',
            'app/scripts/factories/**/*.js': 'coverage',
            'app/scripts/controllers/**/*.js': 'coverage'
        },

        //plugins
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-phantomjs2-launcher',
            'karma-html-reporter',
            'karma-junit-reporter'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'coverage', 'progress', 'html', 'junit'],

        // tell karma how you want the coverage results
        coverageReporter: {
            reporters: [
                { type: 'html', dir: 'reports_js/coverage/html' },
                { type: 'lcovonly', dir: 'reports_js/coverage' },
                { type: 'cobertura', dir: 'reports_js/coverage' }
            ]
        },

        htmlReporter: {
            outputDir: 'reports_js/jasmine_report',
            templatePath: 'node_modules/karma-html-reporter/jasmine_template.html'
        },

        junitReporter: {
            outputDir: '/reports_js',
            outputFile: '/reports_js/jasmine-results.xml'
        }
    });
};
