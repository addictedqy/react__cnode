const PATH_SRC = __dirname + '/src';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: PATH_SRC + '/App.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: '8080',
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'Code: Node.js专业中文社区',
      template: PATH_SRC + '/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'},
        ],
      },
      {
        test: /\.(svg|git|png|jpg)$/,
        loader: 'url-loader',
      }
    ],
  }
}