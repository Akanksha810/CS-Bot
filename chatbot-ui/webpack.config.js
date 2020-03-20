const path = require( 'path' );
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    module: {
      rules: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {   test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
          }
        // ...
      ]
    }
  };