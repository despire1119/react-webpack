var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer')

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
		  { test: /\.scss$/, loaders:['style','css','autoprefixer','postcss','sass']}
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
