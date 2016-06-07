var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?modules' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};