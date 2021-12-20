const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: "development",
    output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, "dist")},
    devServer: {
        static:{
        directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3023,

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
                     presets: ["@babel/preset-env", "@babel/preset-react","@babel/preset-typescript"],
                 },
            },
        },
        {
            test: /\.css$/i,
            use: ["style-loader","css-loader"],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/

          }
    ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js',],

    },
    plugins: [
        new HtmlWebPackPlugin({
            template:"./src/index.html",
        }),
    ],
};