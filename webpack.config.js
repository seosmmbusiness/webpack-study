const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // basic entry file
  entry: "./src/index.js",
  // output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    // Plugin for HTML file generation
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
    }),
    // Plugin for CSS file generation
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  // To automatically resolve ts files
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      // Loaders css, less, sass
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // Babel loader to use Babel
      {
        test: /\.(m?js|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      // CSS Minification
      new CssMinimizerPlugin(),
    ],
  },
  // Dev server
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 4400,
  },
};
