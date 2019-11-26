var path = require('path'); //Core module
//var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'main.bundle.css'
});
module.exports = {
    entry: {
        app: ['@babel/polyfill', './src/app.js']
    },
    //entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }]
        },
        {
            test: /\.scss$/,
            use: [
                {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/build',
                  hmr: process.env.NODE_ENV === 'development',
                },
              },
              'css-loader',
              'sass-loader'
            ]
        }]
    },
    plugins: [
        miniCssExtractPlugin
    ]
}