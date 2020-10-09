const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const isDev =  process.env.NODE_ENV === 'development'
console.log('IS DEV? :', isDev)
const isProd = !isDev;



module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    historyApiFallback: true,
    progress: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    // new BundleAnalyzerPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css'
    }),

  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader" 
      },
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|ttf|eot)$/i,
        use: ["file-loader"]
      }
    ]
  }
};