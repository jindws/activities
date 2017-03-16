var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './js.js',
    entry:{
        js:'./js.js',
        // share:'./mizshare.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './',
        filename: 'dist.js'
        // filename: 'mizshare.min.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                // vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.(css|scss)$/,
            loader: "style-loader!css-loader!postcss-loader!sass-loader"
        }],
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            // vue:'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: true,
    },
    // devtool:'hidden-source-map',
    devtool:'nosources-source-map',
    watch: true,
    plugins:[
        new HtmlWebpackPlugin({
          template: './index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
    ]
}