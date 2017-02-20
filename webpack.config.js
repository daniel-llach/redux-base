const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: "./public/app/client.js"
  },
  output: {
    filename: "public/build/bundle.js",
    sourceMapFilename: "public/build/bundle.map"
  },
  devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  debug: true
}
