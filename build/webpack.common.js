const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { SRC_PATH, DIST_PATH, ROOT_PATH, PUBLIC_PATH } = require('./const')

module.exports = function () {
    return {
        entry: {
            app: path.resolve(SRC_PATH, 'app.js')
        },
        output: {
            path: DIST_PATH,
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.[tj]sx?$/,
                    include: [SRC_PATH],
                    exclude: [path.resolve(ROOT_PATH, 'node_modules')],
                    use: [{ loader: 'babel-loader' }]
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

                style: path.resolve(SRC_PATH, 'style'),
                component: path.resolve(SRC_PATH, 'component'),
                image: path.resolve(PUBLIC_PATH, 'image')
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: `${PUBLIC_PATH}/index.html`
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(PUBLIC_PATH),
                    to: path.resolve(DIST_PATH, 'public'),
                    ignore: ['index.html']
                }
            ])
        ]
    }
}
