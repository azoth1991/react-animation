var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var fetchPath = path.resolve(__dirname, 'src/lib/fetch-jsonp');

var staticUrl = '.';

if (process.env.SELF_ENV == 'stg') {
  staticUrl = 'http://image.yihaodianimg.com/mobile-ued/luban';
}

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    detail:path.resolve(__dirname, 'src/detail.js')
  },
  devtool: 'false',
  output: {
    publicPath: staticUrl + '/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      'fetchJsonp': fetchPath
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'mobx': 'mobx'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      chunks:['index'],
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS:true,
        minifyCSS:true
      },
      template: 'src/index.ejs',
      dev: false
    }),
    new HtmlWebpackPlugin({
      chunks:['index','detail'],
      filename: 'detail.html',
      template: 'src/detail.ejs',
      minify: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS:true,
        minifyCSS:true
      },
      dev: false
    }),
    new webpack.ProvidePlugin({
      "FetchJsonp": 'fetchJsonp'
    })
  ],
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css-loader!' + 'less-loader'),
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['url-loader?limit=8000&name=image/[name].[ext]', 'image-webpack'],
        exclude: /node_modules/
      }
    ],
    noParse: ['react'],
    imageWebpackLoader: {
      mozjpeg: {
        quality: 65
      },
      pngquant: {
        quality: '65-90',
        speed: 4
      }
    }
  }
};
