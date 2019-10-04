'use-strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEFAULT_ENTRY = {
  HTML_PATH: './src/index.html',
  JS_PATH: './src/index.js',
};
const PRODUCTION_DIR = 'dist/';

module.exports = {
  entry: DEFAULT_ENTRY.JS_PATH,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, PRODUCTION_DIR),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
  },
  devtool: 'inline-source-map',
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: DEFAULT_ENTRY.HTML_PATH }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['css/*.*', 'js/*.*', 'fonts/*.*', 'images/*.*'],
    }),
  ],
};
