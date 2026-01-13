
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i, type: 'asset', parser: { dataUrlCondition: { maxSize: 8 * 1024 } } }
    ]
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [ new HtmlWebpackPlugin({ template: 'public/index.html' }) ],
  optimization: { splitChunks: { chunks: 'all' }, runtimeChunk: 'single' },
  devServer: {
    static: './dist',
    historyApiFallback: true,
    port: 5173,
    hot: true,
  }
};
