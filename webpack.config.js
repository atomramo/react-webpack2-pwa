var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'src');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
const OfflinePlugin = require('offline-plugin');


const DEVELOPMENT = process.env.NODE_ENV == 'development';
const PRODUCTION = process.env.NODE_ENV == 'production';


module.exports = {
  devtool: 'source-map',
  entry : PRODUCTION ? {
      app: ['./src/index.js'],
      vendor: ['react','react-dom','./m/js/materialize.min.js']
    } : ['./src/index.js', 'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080'],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'app.[hash:10].min.js' : 'app.js'
    },
  module: {
    rules: [
      {
        //tell webpack to use jsx-loader for all *.jsx files - 'react-hot-loader'
        // test: /\.(jsx|js)?$/,
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: ['/node_modules/']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=&1000name=images/[hash:7].[ext]'],
        exclude: ['/node_modules/'],
        //include: [path.join(__dirname, 'public/sprites/')]
      },
      {
        test: /\.css$/,
        use: PRODUCTION ? ExtractTextPlugin.extract({
          use: 'css-loader'
        }) : ['style-loader', 'css-loader'],
        exclude: ['/node_modules/'],
        //include: [path.join(__dirname, 'public/sprites/')]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader?name=public/fonts/[name].[ext]'],
        exclude: ['/node_modules/']
      }
    ]
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: PRODUCTION ?
  [
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true
    // }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[contenthash:7].css'),
    new HTMLWebpackPlugin({title: 'React',template: 'template.html' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      'DEVELOPMENT': JSON.stringify(DEVELOPMENT),
      'PRODUCTION': JSON.stringify(PRODUCTION)
    }),
    new OfflinePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash:3].min.js'
    })
  ]
  : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    },
    'DEVELOPMENT': JSON.stringify(DEVELOPMENT),
    'PRODUCTION': JSON.stringify(PRODUCTION)
    }),
    new DashboardPlugin()
  ]
}
