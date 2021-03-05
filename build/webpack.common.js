const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 本机性能原因不开启happypack
// issues： 在babel.config.js里面设置dynamic-import不生效

const { SRC_PATH, DIST_PATH, ROOT_PATH, PUBLIC_PATH } = require('./const')

module.exports = function () {
    return {
        entry: { // 入口
            app: path.resolve(SRC_PATH, 'app.tsx')
        },
        output: { // 出口
            path: DIST_PATH,
            filename: 'bundle.js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                automaticNameDelimiter: '~',
                minSize: 20000,
                maxSize: 0,
                minChunks: 1
            },
            // runtimeChunk: {
            //     name: 'runtime'
            // }
        },
        module: {
            rules: [
                {
                    test: /\.[tj]sx?$/,
                    include: [SRC_PATH],
                    exclude: [path.resolve(ROOT_PATH, 'node_modules')],
                    use: [{ 
                        loader: 'babel-loader',
                        options: {
                            "plugins": ["dynamic-import-webpack"]
                        }
                    }],
                },
                {
                    test: /\.(jpg|jpeg|png|gif)$/,
                    use: ['file-loader', 'url-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'], // 扩展名自动补全
            alias: {
                // 路径别名
                '@': SRC_PATH,
                'style': path.resolve(SRC_PATH, 'style'),
                'components': path.resolve(SRC_PATH, 'components'),
                'utils': path.resolve(SRC_PATH, 'utils'),
                'consts': path.resolve(SRC_PATH, 'consts'),
                'public': path.resolve(SRC_PATH, 'public'),
                'views': path.resolve(SRC_PATH, 'views'),
                'api': path.resolve(SRC_PATH, 'api')
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${PUBLIC_PATH}/index.html`
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(PUBLIC_PATH),
                    to: path.resolve(DIST_PATH, 'public'),
                    ignore: ['index.html']
                }
            ]),
            new MiniCssExtractPlugin({
                filename: '[name].css', // 合并的文件名
                chunkFilename: '[id].css' // 分块的文件名
            })
        ]
    }
}
