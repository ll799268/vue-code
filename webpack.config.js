const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 输出错误源码
  devtool: 'source-map',
  resolve: {
    // 定义引入模块路径(按顺序执行)
    modules: [
      // 先找根目录
      path.resolve(__dirname, ''), 
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}