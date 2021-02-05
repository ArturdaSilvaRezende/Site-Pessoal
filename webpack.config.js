const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: {} },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("autoprefixer")({
                  browsers: ["> 1%", "last 2 versions"],
                }),
              ],
            },
          },
          { loader: "sass-loader", options: {} },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: { name: "assets/img/[name].[ext]" },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/icofont/fonts/[name]-[hash:8].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};
