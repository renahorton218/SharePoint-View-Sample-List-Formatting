const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const { createConfig } = require("./config/webpackHelpers");

const configOverrides = {
  entry: {
    main: ["./src/index.tsx"],
  },
  output: {
    filename: `htm2fmt.[name].[contenthash:9].js`,
    path: path.resolve(process.cwd(), "../../docs/tools/html-formatter-generator/"),
  },
  devServer: {
    contentBase: path.join(__dirname, "assets"),
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunksSortMode: "none",
      template: "./assets/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./src/components/AppStyles.css",
    }),
    new MonacoWebpackPlugin({
      languages: ["html", "css"],
    }),
  ],
};

module.exports = [
  createConfig(configOverrides, {
    bundleName: "htmtofmt",
    isProduction: true,
  }),
];
