const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"/app/index.js",
    mode: "development",
    output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, "dist")},
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: true,
        port: 3010,

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: {

                 loader:"babel-loader",
                 options: {
                     presets: ["@babel/preset-env", "@babel/preset-react"],
                 },
            }
        }
    ]
    },
    Plugins: [
        new HtmlWebpackPlugin({
            template:"./app/index.html",
            filename:'index.html',
        }),
    ],
};