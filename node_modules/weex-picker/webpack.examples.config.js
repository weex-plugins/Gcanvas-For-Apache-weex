var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  entry: './examples/index.we',
  output : {
    path: './examples/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loader: 'weex'
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        loader: 'weex-vue-loader'
      }
    ]
  }
}
