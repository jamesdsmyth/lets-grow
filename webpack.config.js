module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass?sourceMap']
      }
    ]
  }
}
