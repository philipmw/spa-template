const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  output: {
    path: path.resolve(__dirname, 'built'),
    filename: 'app.bundle.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {test: /\.(ts|tsx)$/, use: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  }
};