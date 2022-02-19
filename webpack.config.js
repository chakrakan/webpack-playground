const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions
  plugins: [new ESLintPlugin({ extensions: ['.js', '.jsx'] })], // ESLintPlugin takes in an eslint options object
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // https://webpack.js.org/configuration/output/#outputpublicpath
    filename: 'bundle.js',
  },
  devServer: {
    static: './dist',
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
