const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "./front/index.js"),
  output: {
    path: path.join(__dirname, "./front/bundle"),
    filename: "bundle.js",
  },
  module: {
   loaders: [
     { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
     { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
   ] 
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
};
