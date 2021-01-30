const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common')()
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

common.mode = 'development'

module.exports = merge(common, {
    devServer: {
        hot: true, // 开启模块热替换
        open: true, // 自动在浏览器打开
        port: 3000, // 端口号
        quiet: true,
        // noInfo: true,
        stats: {
            colors: true,
            "errors-only": true,
            // cached: true
        },
        proxy: { // 设置代理
            '/api/v1':{
                target: 'http://192.168.106.151:5000'
            }
        },
        contentBase: common.output.path,
    },
    plugins: [
        // css代码单独提取
        new MiniCssExtractPlugin({
            filename: '[name].css', // 合并的文件名
            chunkFilename: '[id].css' // 分块的文件名
        }),
        // new DashboardPlugin(dashboard.setData) // 控制台信息
        new FriendlyErrorsWebpackPlugin() //控制台信息
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
            },
            {
                test: /\.less$/,
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
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    }
})
