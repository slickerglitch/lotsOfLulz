const path = require('path');
const srcDir = path.resolve(__dirname, 'client', 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  watch: true /* Rerun on save; watch for changes */,
  devtool: 'eval',
  stats: {
    excludeModules: /node_modules/,
  },
  entry: path.resolve(srcDir, 'index.jsx') /* Root file */,
  output: {
    path: distDir /* directory to output */,
    filename: 'bundle.js' /* Output filename*/,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/ /* What file extensions to include (*.js & *.jsx) */,
        exclude: /node_modules/ /* Don't transpile modules */,
        use: {
          loader: 'babel-loader' /* We want to use babel to transpile */,
          options: {
            /* Premade configurations that we installed above */
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
