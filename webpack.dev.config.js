var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: __dirname + "/app/main.js",
  output: {
	  path: __dirname + "/build",
	  filename: "bundle.js"
  },
  module: {
	  loaders: [
		  { test: /\.json$/, loader: "json" },
		  { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
		  { test: /\.css$/, loader: 'style!css?modules!postcss' },
		  { test: /\.scss$/, loaders:['style','css?sourceMap','autoprefixer','postcss','sass?sourceMap']}
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
	  new webpack.HotModuleReplacementPlugin(), //热加载插件\
      new OpenBrowserPlugin({ url: 'http://localhost:8989' }),
  ]
}
