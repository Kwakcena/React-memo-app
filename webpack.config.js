const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // 프로젝트의 루트디렉토리를 설정하여, 나중에 ./components 혹은 ../components
    // 이렇게 접근해야 되는 디렉토리를 바로 components 로 접근 할 수 있게 해줍니다.
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    proxy: {
      '/web-api': 'http://localhost:3001', // 프록시
    },
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
