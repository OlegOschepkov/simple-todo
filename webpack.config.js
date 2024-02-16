const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/main.js',
  },
  devtool: !isProd ? 'source-map' : false,
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build/js'),
  },
  optimization: {
    minimize: !isProd,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DuplicatePackageCheckerPlugin(),
    new CircularDependencyPlugin(),
  ],
};
