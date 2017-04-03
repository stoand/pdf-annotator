let HtmlPlugin = require('webpack-html-plugin');
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './src/app',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'PDF Annotater',
            filename: './index.html',
        }),
        new webpack.ProvidePlugin({ React: 'react' }),
    ],
}