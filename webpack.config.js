const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, 'client'),

  entry: {
    dashboard: './dashboard',
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
      }
    ]
  }
}
