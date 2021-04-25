const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "index.js",
        library: "Modal",
        libraryTarget: "umd",
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)/,
                use: "file-loader"
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader
                    // },
                    {
                        loader: "style-loader"

                    },
                    {
                        // Interprets CSS
                        loader: "css-loader",
                        // options: {
                        //   importLoaders: 2
                        // }
                    },
                    {
                        loader: 'sass-loader' // 将 Sass 编译成 CSS
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                path.resolve(__dirname, './src/styles/variables.scss'),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve("src/icons")],
                options: {
                    limit: 10000,
                    // name: this.utils.assetsPath('img/[name].[hash:7].[ext]'),
                    name: 'img/[name].[hash:7].[ext]',
                    esModule:false 
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500000,
                    // name: this.utils.assetsPath('media/[name].[hash:7].[ext]')
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500000,
                    // name: this.utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "css/[name]-[hash].css",//所有抽离出的样式文件，放进dist下的css目录
        //     //chunkFilename: "css/[name]-[hash].css"
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./index.html"
        // }),
        // new CSSSplitWebpackPlugin({ // css-split-webpack-plugin插件的作用是将大尺寸的css再分割成多个css文件
        //     size: 4000,
        //     filename: 'dist/css/[name]-[part].[ext]'
        // }),
    ]
}