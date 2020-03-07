const path = require('path')

module.exports = {
  entry: {
    server: path.resolve(__dirname, 'src/server.js')
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  mode: 'development',
  target: 'node'
}
