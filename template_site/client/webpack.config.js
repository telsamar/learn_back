const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
    output: {
        publicPath: "http://localhost:3001/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        alias: {
            path_main: path.resolve(__dirname, 'src/'),
            path_components: path.resolve(__dirname, 'src/components/'),
            path_store: path.resolve(__dirname, 'src/store/'),
            path_services: path.resolve(__dirname, 'src/services/'),
          },
    },

    devServer: {
        port: 3001,
        historyApiFallback: true,
    },

    externals: ['ws'],

    module: {

        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                    loader: "sass-loader",
                    options: {
                        // Prefer `dart-sass`
                        implementation: require.resolve("sass"),
                    },
                    },
                ],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
        // noParse: ['ws'],

    },

    plugins: [
        new ModuleFederationPlugin({
        name: "mainsite",
        filename: "remoteEntry.js",
        remotes: {
            sidesite: 'sidesite@http://localhost:3102/remoteEntry.js'
        },
        exposes: {},
        shared: {
            ...deps,
            react: {
                singleton: true,
                requiredVersion: deps.react,
            },
            "react-dom": {
            singleton: true,
                requiredVersion: deps["react-dom"],
            },
        },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
        new Dotenv()
    ],
});
