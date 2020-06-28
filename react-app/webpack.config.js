const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  inlineSource: '.(js|css)$'
});
const htmlWebpackInlineSourcePlugin = new HtmlWebpackInlineSourcePlugin();

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env',
                    '@babel/react',{
                    'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ],
  },
  plugins: [htmlWebpackPlugin, htmlWebpackInlineSourcePlugin]
};