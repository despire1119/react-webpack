var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname,"app/main.js"),
  output: {
	  path: path.resolve(__dirname,"build"),
	  filename: "[name].[hash].js"
  },
  module: {
	  loaders: [
		  { test: /\.json$/, loader: "json" },
		  { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
		  { test: /\.css$/, loader: 'style!css?modules!postcss' },
		  { test: /\.scss$/, loaders:['style','css?sourceMap','postcss','sass?sourceMap']},
          {
              test: /\.(png|jpg|gif)$/,
              loader: 'url',
              query: {
                  limit: 10000,
                  name: 'img/[name].[hash:7].[ext]'
              }
          },
          {
              test: /\.(woff|ttf|eot|svg)/,
              loader: 'file',
              query: {
                  name: 'fonts/[name].[ext]?[hash:7]'
              }
          }
	  ]
  },
  postcss: [
	  autoprefixer({
				browsers: ['last 2 versions']
		})
  ],
  plugins: [
	  new HtmlWebpackPlugin({
		  template: __dirname + "/app/index.html"
	  }),
	  new webpack.HotModuleReplacementPlugin(), //热加载插件
  ]
}
