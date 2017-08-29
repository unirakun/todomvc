/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const dev = (process.env.NODE_ENV !== 'production')

const cssLoaders = [
  'css-loader?modules&localIdentName=[path]_[local]__[hash:base64:5]',
  'postcss-loader',
  'sass-loader',
]

function getEntrySources() {
  const entries = []

  if (dev) {
    entries.push('react-hot-loader/patch')
    entries.push('./src/index-hmr.jsx')
  } else {
    entries.push('./src')
  }

  return entries
}

function getPlugins(plugins) {
  plugins.push(new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    hash: true,
  }))

  if (!dev) {
    plugins.push(new ExtractTextPlugin('todomvc.css'))
  } else {
    plugins.push(new webpack.NamedModulesPlugin())
  }

  return plugins
}

module.exports = {
  entry: { todomvc: getEntrySources() },
  output: {
    path: path.resolve('public'),
    filename: '[name].js',
    publicPath: dev ? '/' : '/todomvc/',
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('./src'),
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: getPlugins([]),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['babel-loader'],
      },
    ],
  },
}
