const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: './index.web.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts','.js'],
    alias: {
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react', //<-here
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { loose: true }], '@babel/preset-react'],
          },
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
}