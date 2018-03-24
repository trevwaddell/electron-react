const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./source/index.js",
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      { test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./source/index.html"
    })
  ]
};
