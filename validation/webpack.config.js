const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'batch.js',
    path: path.resolve(__dirname, 'dist'),
  },
};