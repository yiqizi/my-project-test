const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
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
                    {
                        loader: "style-loader"

                    },
                    {
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
                    symbolId: 'icon-[name]',
                    name: 'svg/[name].[hash:7].[ext]',
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: false,
                    name: 'img/[name].[hash:7].[ext]',
                    esModule:false 
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: false,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: false,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
}