var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'atom',
  entry: {
    app: './app/app.js',
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf|\.png/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel!eslint'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  }
};
