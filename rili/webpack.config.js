var path = require('path')
var webpack = require('webpack')
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './js.js',
    entry:{
        js:'./js.js',
        // share:'./mizshare.js'
    },
    output: {
        // path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/',
        filename: 'rili-activity-1.1.min.js'
        // filename: 'mizshare.min.js'
    },
    module: {
        rules: [
        // {
        //     test: /\.vue$/,
        //     loader: 'vue-loader',
        //     options: {
        //         // vue-loader options go here
        //     }
        // }, 
        {
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

    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.common.js',
    //         // vue:'vue/dist/vue.js'
    //     }
    // },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: true,
    },
    // devtool: '#eval-source-map',
    devtool:'hidden-source-map',
    // watch: true,
    plugins:[
        // new webpack.DefinePlugin({
        //     // minimize: true,
        //     __aaa__:true,
        // }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
    ]
}