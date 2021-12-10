const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"/app/index.js",
    mode: "development",
    output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, "dist")},
    devServer: {
        static:{
        directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3013,

    },
    performance:{
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {

                 loader:"babel-loader",
                 options: {
                     presets: ["@babel/preset-env", "@babel/preset-react"],
                 },
            },
        },
        {
            test: /\.css$/i,
            use: ["style-loader","css-loader"],
        }
    ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:"./app/index.html",
        }),
    ],
};