const WebpackDevServer = require('webpack-dev-server');

const devServer = (
  compiler,
  devServerConfig,
) => new WebpackDevServer(compiler, {
  compress: true,
  hot: true,
  hotOnly: true,
  historyApiFallback: true,
  publicPath: '/',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  stats: 'minimal',
  inline: true,
  ...devServerConfig,
});

module.exports = devServer;
