<<<<<<< HEAD
var path = require('path');
=======
var path = require("path");
>>>>>>> bc1b848be9d8265c695a9dd89f5987e45a5be16c

module.exports = {
  context: __dirname,
  entry: "./frontend/spottieottiedopalisciousify.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
