/* eslint-disable eol-last */
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src/components')],
  },
};
