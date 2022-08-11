const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Production'),
      'process.env.api_key': JSON.stringify('9874kfkfkf')
    }),
  ],
}