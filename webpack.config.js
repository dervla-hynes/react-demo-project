const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    },
    // watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components/')
          },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        })
    ]
}