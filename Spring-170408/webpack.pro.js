var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        redBagFirst: './js.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].min.js',
        publicPath:'//cdn.mizlicai.com/activity/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'babel-loader!vue-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader'
            },{
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
    devtool:'hidden-source-map',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.DefinePlugin({__DEV__: false}),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true
            },
            beautify:false,
            comments:false
        }),
    ]
}
