import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import miniCssExtractPlugin from "mini-css-extract-plugin";
export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "[name].[chunkhash].js",
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      trackJSToken: "INSERT YOUR TOKEN HERE",
    }),
  ],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [miniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
