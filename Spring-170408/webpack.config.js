var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        js: './js.js',
        // share:'./share.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/',
        filename: '[name].js'
        // filename: 'mizshare.min.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: true
    },
    devtool: '#eval-source-map',
    // devtool:'hidden-source-map',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.DefinePlugin({__DEV__: true}),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
    ]
}
