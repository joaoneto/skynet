const path = require('path');

const CWD = process.cwd();
const SKYNET_SRC_DIRNAME = 'src';
const SKYNET_DIST_DIRNAME = 'dist';
const SKYNET_DEVSERVER_PORT = 3000;
const SKYNET_DEVSERVER_HOST = '0.0.0.0';
const SKYNET_CONFIG_PATH = path.resolve(CWD, './config.json');

module.exports = {
  CWD,
  SKYNET_SRC_DIRNAME,
  SKYNET_DIST_DIRNAME,
  SKYNET_DEVSERVER_PORT,
  SKYNET_DEVSERVER_HOST,
  SKYNET_CONFIG_PATH,
};
