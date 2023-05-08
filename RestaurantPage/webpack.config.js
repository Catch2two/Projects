const path = require('path');

module.exports = {
    entry: "./src/index.js",
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ["html-loader"]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "imgs"
            }
          }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "fonts"
            }
          }  
        }      
      ]
    }
  };