const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use:'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template:'./app/index.html'
        })
    ],
    mode:'development'

};

module.exports = config;