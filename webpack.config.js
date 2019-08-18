// All we want to do here is load the babel loader

// test, checks to make sure its a  js file, then runs it thru the babel loader
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
