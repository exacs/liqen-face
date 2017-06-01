const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'client'),

  entry: {
    dashboard: './dashboard',
    annotate: './annotate'
  },

  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            use: [
              'css-loader',
              'sass-loader'
            ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
