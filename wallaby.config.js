'use strict';

var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {

    return {
        files: [
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'src/**/*.unit.ts', load: false, ignore: true },
            { pattern: 'test/**/*.e2e.ts', load: false, ignore: true },
        ],

        tests: [
            { pattern: 'src/**/*.unit.ts', load: false },
            { pattern: 'test/**/*.e2e.ts', load: false },
        ],

        postprocessor: webpackPostprocessor,

        setup: function () {
            window.__moduleBundler.loadTests();
        }
    };
};