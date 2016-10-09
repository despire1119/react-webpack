var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,"app/main.js"),
  // output: {
  //  path: path.resolve(__dirname,"build"),
  //  filename: "[name].[hash].js"
  // },
  output: {
      path: path.resolve(__dirname, 'dist/app/assets'),
      filename: '[name].[hash].js',
  },
  resolve: {
      //自动扩展文件后缀名，require时可以不再写后缀名
      extensions: ['', '.js', '.scss', '.css'],
      //模块定义别名，方便后续直接引用，无需多写路径
      alias: {
          'src': path.resolve(__dirname, './src'),
          'components': path.resolve(__dirname, './components'),
          'sass': path.resolve(__dirname, './src/assets/sass'),
      }
  },
  module: {
	  loaders: [
		  {
              test: /\.json$/,
              loader: "json"
          },
		  {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              exclude: './node_modules/'
          },
		  {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
          },
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
