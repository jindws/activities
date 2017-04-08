var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
      apps:'./js.js',
      common:[
        'vue',
        'animate.css',
        'whatwg-fetch',
        'swiper',
        './node_modules/swiper/dist/css/swiper.css',
        'echarts/lib/echarts',
        'echarts/lib/chart/bar',
        'echarts/lib/chart/map',
        'echarts/map/js/china',
        'babel-polyfill'
      ]
  },
    output: {
        // path: path.resolve(__dirname, './dist'),
        path: path.resolve(__dirname, './dist'),
        // publicPath: 'https://cdn.mizlicai.com/activity/yuebao/',
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
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
            }
        ]
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
        inline: true
    },
    devtool:'hidden-source-map',
    // devtool: 'eval',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.DefinePlugin({
            __DEV__:false,
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
        new webpack.optimize.CommonsChunkPlugin({names: ['common'], minChunks: Infinity}),
        new webpack.ProvidePlugin({
          Swiper: "swiper",
          '$':'jquery',
          jQuery:'jquery',
          echarts:'echarts/lib/echarts'
        }),
        new webpack.BannerPlugin("Copyright Jindw inc."),
    ]
}
