const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  name: 'client',
  mode: 'production',
  entry: path.join(__dirname, 'src', 'client.jsx'),
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [ {
      test: /\.css$/,
      use: [ {
        loader: MiniCssExtractPlugin.loader,
      }, "css-loader" ]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    } ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
};