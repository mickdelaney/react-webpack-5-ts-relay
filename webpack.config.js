const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    fallback: {
      fs: false,
      ...Object.fromEntries(Object.entries(require("node-libs-browser")).filter(e => e[1] !== null)),
      // process: require("node-libs-browser").process,
      // buffer: require("node-libs-browser").buffer,
    },
    alias: {
      process: 'process/browser'
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    contentBase: path.join(__dirname, "src"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ]
};
