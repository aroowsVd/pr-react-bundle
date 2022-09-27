const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'app.bundle.js',
    clean: true,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dev'),
    },
    host: 'localhost',
    port: port,
    open: true, // open page when start
  },
});