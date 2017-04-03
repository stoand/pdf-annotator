let webpack = require('webpack');
var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
    plugins: [
        new webpack.ProvidePlugin({ React: 'react' }),
    ]
});

module.exports = function (wallaby) {

    return {
        files: [
            'test/integration/integration-setup.ts',
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'src/**/*.tsx', load: false },
            { pattern: 'src/**/*.unit.ts', load: false, ignore: true },
            { pattern: 'src/**/*.unit.tsx', load: false, ignore: true },
            { pattern: 'test/**/*.e2e.ts', load: false, ignore: true },
            { pattern: 'test/**/*.e2e.tsx', load: false, ignore: true },
            { pattern: 'test/**/*.int.ts', load: false, ignore: true },
            { pattern: 'test/**/*.int.tsx', load: false, ignore: true },
        ],

        tests: [
            { pattern: 'src/**/*.unit.ts', load: false },
            { pattern: 'src/**/*.unit.tsx', load: false },
            { pattern: 'test/**/*.e2e.ts', load: false },
            { pattern: 'test/**/*.e2e.tsx', load: false },
            { pattern: 'test/**/*.int.ts', load: false },
            { pattern: 'test/**/*.int.tsx', load: false },
        ],

        postprocessor: webpackPostprocessor,

        setup: function () {
            window.__moduleBundler.loadTests();
        }
    };
};