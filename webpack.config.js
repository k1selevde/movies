const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const isDev =  process.env.NODE_ENV === 'development'
console.log('IS DEV? :', isDev)
const isProd = !isDev;


module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: 'bundle.js',  //isProd ?  '[name].[contentHash].bundle.js' : '[name].
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/'
  },
  optimization: {
    runtimeChunk: isProd
  },
  devtool: isDev ? 'source-map' : '',

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '@models': path.resolve(__dirname, 'src/img'),
      '@': path.resolve(__dirname, 'src'),
      '@dist': path.resolve(__dirname, 'dist')
    }
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    historyApiFallback: true,
    progress: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    // new BundleAnalyzerPlugin(),
/*    new Dotenv({
      path: path.resolve(__dirname, './.env')
    }),*/
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[contenthash].css' : '[name].css'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
        { patterns: [{
              from: path.resolve(__dirname, './src/assets'),
              to: path.resolve(__dirname, 'dist/assets')
          }]
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
        use: ['style-loader', MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      ]
    },
}