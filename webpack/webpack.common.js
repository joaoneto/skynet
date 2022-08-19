const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { CWD, SKYNET_SRC_DIRNAME, SKYNET_DIST_DIRNAME } = require('../constants');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  entry: {
    main: [path.resolve(CWD, SKYNET_SRC_DIRNAME, 'index.tsx')],
  },
  output: {
    path: path.resolve(CWD, SKYNET_DIST_DIRNAME),
    filename: '[name].[fullhash:8].js',
    chunkFilename: '[name].[fullhash:8].chunk.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    descriptionFiles: ['package.json'],
    modules: [path.resolve(CWD, SKYNET_SRC_DIRNAME), 'node_modules'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.t|jsx?$/,
        include: [path.resolve(CWD, SKYNET_SRC_DIRNAME)],
        use: {
          // `.swcrc` can be used to configure swc
          loader: 'swc-loader',
        },
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(CWD, SKYNET_SRC_DIRNAME, 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
    }),
  ],
};
