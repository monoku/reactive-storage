module.exports = {
  output: {
    library: 'ReactiveStorage',
    libraryTarget: 'umd',
  },
  node: {
    process: false,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [],
};
