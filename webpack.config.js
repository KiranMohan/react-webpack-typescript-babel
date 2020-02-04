const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
    devtool: 'source-map',
    entry: [APP_PATH],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/dist'),
        publicPath: '/',
    },
    devServer: {
        contentBase: 'build/dist',
        hot: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            cache: true,
                            enforce: 'pre',
                            configFile: '.eslintrc.js',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
        new ForkTsCheckerWebpackPlugin(),
    ],
};
