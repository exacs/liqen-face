const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

module.exports = {
  devtool: 'inline-source-map',

  context: config.context,

  entry: {
    dashboard: ['webpack-hot-middleware/client', './dashboard'],
    annotate: ['webpack-hot-middleware/client', './annotate']
  },

  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].js',
    publicPath: '/static/dist'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
