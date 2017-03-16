var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        apps: './src/main.js',
        common: [
            'vue',
            'animate.css',
            'whatwg-fetch',
            'lodash/assign',
            'babel-polyfill',
            'jquery'
        ]
    },
    output: {
        // path: path.resolve(__dirname, './dist'),
        path: path.resolve(__dirname, './dist'),
        publicPath: 'https://cdn.mizlicai.com/activity/38',
        filename: '[name].min.js' //最终打包生产的文件名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/
            }, {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            }
        ]
    },

    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.common.js',
    //         // vue:'vue/dist/vue.js'
    //     }
    // },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: true
    },
    // devtool: '#eval-source-map',
    devtool: 'hidden-source-map',
    // devtool: 'nosources-source-map',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            __DEV__: false,
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({names: ['common'], minChunks: Infinity}),
        new webpack.ProvidePlugin({'$': 'jquery', jQuery: 'jquery', _assign: 'lodash/assign'}),
        new webpack.BannerPlugin("Copyright Jindw inc.")
    ]
}
