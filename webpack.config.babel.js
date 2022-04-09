import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const packageJson = require('./package.json');

export default () => ({
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'src/index.tsx')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: packageJson.name,
    libraryTarget: 'umd',
    globalObject: 'this'
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: 'ts-loader'
      },
      {
        test: /\.(scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.scss']
  },

  externals: {
    react: 'react',
    reactDOM: 'react-dom'
  },

  plugins: [new CleanWebpackPlugin(['dist/*.*'])],
  optimization: {
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
});
