const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
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
                //   {
                //     loader: MiniCssExtractPlugin.loader
                //   },
                  {
                    // Interprets CSS
                    loader: "css-loader",
                    options: {
                      importLoaders: 2
                    }
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
        // new HtmlWebpackPlugin({
        //     template: "./index.html"
        // })
    ]
}