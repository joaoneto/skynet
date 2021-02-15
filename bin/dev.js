#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const webpackCommonConfig = require('../webpack/webpack.common');
const webpackDevConfig = merge(webpackCommonConfig, require('../webpack/webpack.dev'));

const params = process.argv.slice(2);
const ELECTRON_START_URL = params[params.indexOf('-o') + 1] || 'http://localhost:3000';

const compiler = webpack(webpackDevConfig);
const {
  CWD,
  SKYNET_DIST_DIRNAME,
  SKYNET_DEVSERVER_PORT,
  SKYNET_DEVSERVER_HOST,
} = require('../constants');
const devServer = require('../webpack/dev-server')(
  compiler,
  {
    contentBase: path.resolve(CWD, SKYNET_DIST_DIRNAME),
    port: SKYNET_DIST_DIRNAME,
    host: SKYNET_DEVSERVER_HOST,
  },
);

devServer.listen(SKYNET_DEVSERVER_PORT, SKYNET_DEVSERVER_HOST, () => {
  console.log(`DevServer listening on port ${SKYNET_DEVSERVER_PORT}`);
  spawn(
    path.resolve(CWD, './node_modules/.bin/electron'),
    ['.'],
    {
      stdio: 'inherit',
      cwd: CWD,
      env: {
        ...process.env,
        ELECTRON_START_URL,
      },
      shell: true,
    },
  );
});
