const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
     entry: './src/renderer.js',
     output: {
         path: './main/public',
         filename: 'bundle.js',
     },
     module: {
         loaders: [
           { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader?presets[]=env' },
           { test: /\.css$/, loader: 'css-loader' },

           { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
             loader: 'file-loader',
             query: { name: 'static/media/[name].[hash:8].[ext]' }
           },
         ]
     },
     plugins: [
        new webpack.IgnorePlugin(/fs/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
      ]
 }


/*
webpack 2 attempt

module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader?presets[]=env' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },

      { test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: { name: 'static/media/[name].[hash:8].[ext]' }
      },
    ]
},
plugins: [
   new webpack.IgnorePlugin(/fs/),
   new ExtractTextPlugin("styles.css")
 ]

*/
