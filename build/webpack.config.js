const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cwd = path.join(__dirname, '../');
const args = process.argv.splice(2);
const configPath = args.find(str => /--configPath/g.test(str)).split('=')[1];
const config = require(path.join(cwd, configPath));
const {entry, output} = config;


module.exports = {
  entry: entry,
  output: {
    path: output.path,
    chunkFilename: 'static/js/[name].[chunkhash:12].js',
    filename: '[name].[chunkhash:12].js'
  },
  optimization: {
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            vendor: {
                name: 'vendors',
                chunks: 'all',
                test: /react|core-js/,
                priority: 10,
                enforce: true
            },
            dependencies: {
                name: 'dependencies',
                chunks: 'all',
                test: /^((?!react|core-js).)*node_modules((?!react|core-js).)*$/,
                priority: 10,
                enforce: true
            },
            commons: {
                name: 'commons',
                chunks: 'all',
                test: /app\//,
                priority: 10,
                enforce: true
            }
        }
    },
    runtimeChunk: { name: 'manifest' }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'static/css/[name].[chunkhash:12].css'
    }),
    new HtmlWebpackPlugin({
      template: 'build/index.html',
      favicon: path.join(cwd, 'favicon.ico')
    })
  ].concat(process.env.TRAVIS_CI ? [] : [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, './'),
          path.join(__dirname, '../site'),
          path.join(__dirname, '../components'),
          path.join(__dirname, '../libs')
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'postcss-loader'],
          publicPath: '../../'
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader'],
          publicPath: '../../'
        })
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=static/media/[name].[hash:12].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader: 'url-loader?name=static/media/[name].[hash:12].[ext]&limit=25000'
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  }
};
