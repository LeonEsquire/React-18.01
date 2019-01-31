const path = require("path");

module.exports = {
    entry: "./src/App.js",
    output: {
        path: path.resolve("dist"),
        filename: "main.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node-modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: "[name]_[local]", // +__[hash:base64:5]
                        },
                    }
                ],
            },    
        ]
    }
}