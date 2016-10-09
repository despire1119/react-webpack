var webpack = require('webpack')
var config = require('./webpack.base.config.js')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

config.devtool = '#source-map'

config.output.publicPath='/'

config.plugins = (config.plugins||[]).concat([
	new webpack.NoErrorsPlugin(),
	new ExtractTextPlugin('css/[name].[hash].css')
]);

module.exports = config;
