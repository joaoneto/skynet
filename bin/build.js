#!/usr/bin / env node
const webpack = require('webpack');
const webpackCommonConfig = require('../webpack/webpack.common');

const compiler = webpack(webpackCommonConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err, stats.toString({
      colors: true,
      chunks: false,
    }));
    process.exit(1);
  }

  process.stdout.write(`${stats.toString({
    colors: true,
    chunks: false,
  })}\n`);
});
