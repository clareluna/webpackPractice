const path = require('path');
const webpack = require('webpack');

const DEV = process.env.NODE_ENV === 'dev';
const PROD = process.env.NODE_ENV === 'prod'

const entry = PROD 
    ? ['./src/index.js']
    : [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

const plugins = PROD 
    ? []
    : [ new webpack.HotModuleReplacementPlugin()];

module.exports = {
    entry,
    plugins,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
}