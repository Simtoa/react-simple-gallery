const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: false,
    modules: {
      localIdentName: '[local]__[hash:base64:5]',
    },
  },
};

const CSSLoader = {
  loader: 'css-loader',
};

module.exports = {
  entry: "src/index.js",

  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/data', to: 'data' },
      ],
    }),
  ],

  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          CSSLoader,
          'postcss-loader'
        ],
      },
      {
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          CSSModuleLoader,
          'postcss-loader'
        ],
      },
    ],
  },
}