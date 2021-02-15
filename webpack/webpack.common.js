const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const {
  CWD,
  SKYNET_SRC_DIRNAME,
  SKYNET_DIST_DIRNAME,
} = require('../constants');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'electron-renderer',
  entry: {
    main: [
      path.resolve(CWD, SKYNET_SRC_DIRNAME, 'index.tsx'),
    ],
  },
  output: {
    path: path.resolve(CWD, SKYNET_DIST_DIRNAME),
    filename: '[name].[fullhash:8].js',
    chunkFilename: '[name].[fullhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    descriptionFiles: ['package.json'],
    modules: [
      path.resolve(CWD, SKYNET_SRC_DIRNAME),
      'node_modules',
    ],
    plugins: [
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' }),
    ],
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(CWD, SKYNET_SRC_DIRNAME)],
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.tsx?$/,
        include: [path.resolve(CWD, SKYNET_SRC_DIRNAME)],
        use: [
          { loader: 'ts-loader' },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|woff2?)$/i,
        include: [path.resolve(CWD, SKYNET_SRC_DIRNAME)],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[fullhash:8].[ext]',
              context: path.resolve(CWD, SKYNET_SRC_DIRNAME),
              publicPath: './',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(CWD, SKYNET_SRC_DIRNAME, 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};
