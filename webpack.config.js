const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve('build'),
        filename: 'index_bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js|.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,"index.html")
        })
    ]
}
