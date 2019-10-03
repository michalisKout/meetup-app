const DEFAULT_ENTRY_PATH = '../src/index.js';

module.exports = {
  entry: DEFAULT_ENTRY_PATH,
  output: { path: __dirname + '/dist', publicPath: '/', filename: 'bundle.js' },
  devServer: { contentBase: './dist' },
  module: { rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }] },
};
