const merge = require('webpack-merge')
const common = require('./webpack.common')()
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

common.mode = 'production'

module.exports = merge(common, {
    plugins: [
        // css代码单独提取
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/' // css中引入资源的公共路径
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/dist/' // css中引入资源的公共路径
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                        }
                    }
                ]
            }
        ]
    }
})
