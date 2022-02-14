const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

module.exports = {
    mode,

    entry: './src/main.js',

    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[contenthash:8].js',
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    // according to the docs, sass-loader should be at the bottom, which
                    // loads it first to avoid prefixes in your sourcemaps and other issues.
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/i,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|svg|jpg|jpe?g|gif|ico|webp|webm|mp4)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                    esModule: false,
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name][contenthash:8].[ext]',
                },
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[name].[contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: 'public', 
                    to: '.',
                    globOptions: {
                        // We exclude index.html to avoid conflict with HtmlWebpackPlugin
                        ignore: ['**/index.html', '**/psd'],
                    },
                },
            ],
        }),
    ],

    target,

    devtool: 'source-map',

    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -10,
                    chunks: 'all',
                },
            },
        },
    },

    devServer: {
        historyApiFallback: true,
    },
};