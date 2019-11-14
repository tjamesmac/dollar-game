const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/client/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/client/assets/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
        }),
    ],
    output: {
        filename: "bundle.[chunkhash:8].js",
        path: path.resolve(__dirname, "../public"),
        publicPath: "/",
    },
}
