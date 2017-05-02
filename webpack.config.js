var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['webpack-hot-middleware/client', 'babel-polyfill', './src/app.jsx'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "eslint-loader",
                ]
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                        ]
                }),
                include: path.join(__dirname, 'src')
            }
        ],
        loaders: [
            {
                test: /.jsx?$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'react-hot-loader'
                }, {
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css/,
                use: [ 'style-loader', 'css-loader' ],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true })
    ]
};