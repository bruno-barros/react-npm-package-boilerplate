import path from 'path';
import webpack from 'webpack'; //eslint-disable-line
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default () => ({
  mode: 'production',
  entry: {
    index: path.join(__dirname, './index.tsx')
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,

        use: 'ts-loader'
      },
      {
        test: /\.(scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.tsx', '.scss']
  },

  plugins: [
    // Clean dist folder
    new CleanWebpackPlugin(['./dist/build.js'])
  ]
});
