var path = require('path')
var webpack = require('webpack')
var combineLoaders = require('webpack-combine-loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')
//require('es6-promise').polyfill();

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src'),
      loaders: [
        'react-hot',
        'babel?presets[]=stage-1,presets[]=react,presets[]=es2015'
      ]
    },
    {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[local]___[hash:base64:5]'
          }
        },
        {
          loader: 'autoprefixer?browsers=last 3 versions'
        }
      ])
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
