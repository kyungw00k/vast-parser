let webpack = require('webpack')
let path = require('path')
let pkg = require('./package.json')
let dateFormat = require('dateformat')

module.exports = {
  target: 'web',
  entry: {
    'VAST': path.resolve(__dirname, 'src/index.js')
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },
  module: {
    rules: [
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules)/
      },
      {
        enforce: 'post',
        test: /\.js$/,
        loaders: ['es3ify-loader'],
        exclude: [
          /(node_modules)/
        ]
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    modules: false
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version} ${dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")}`)
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  }
}
