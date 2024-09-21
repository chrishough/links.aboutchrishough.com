const path = require('path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const outputPath = path.join(__dirname, 'build/assets');

{{insert-webpack-plugins}}

const siteConfig = {
  entry: {
    vendor: [
      path.join(__dirname, '/source/assets/javascripts/vendor.js'),
    ],
    site: [
      path.join(__dirname, '/source/assets/stylesheets/site.scss'),
      path.join(__dirname, '/source/assets/javascripts/site.js'),
    ],
  },

  output: {
    path: outputPath,
    filename: '[name]-[fullhash].js',
  },

  resolve: {
    modules: [
      'node_modules',
      'source/assets/javascripts/vendor',
    ],
    alias: {
      jquery: 'jquery/src/jquery.js',
      popper: 'popper.js/dist/popper.js',
      bootstrap: 'bootstrap/dist/js/bootstrap.js',
      breakpoints: 'breakpoints-js/dist/breakpoints.min.js',
    },
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /(assets)/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              name: '[name]-[fullhash].[ext]',
              publicPath: '/assets/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico|jpg|jpeg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: '[name]-[fullhash].[ext]',
              publicPath: '/assets/',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /.scss/,
        enforce: 'pre',
        loader: 'import-glob-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[fullhash].css',
              publicPath: '/assets/',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules'),
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/assets/',
      generate: (seed, files) => files.reduce((manifest, { name, filePath }) => ({
        ...manifest,
        [name]: filePath,
      }), seed),
    }),
    new CleanWebpackPlugin(){{insert-webpack-plugin-merges}}
  ],
};

module.exports = [siteConfig]
