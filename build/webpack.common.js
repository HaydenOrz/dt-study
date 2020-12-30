const path = require('path')

const { APP_PATH, DIST_PATH, ROOT_PATH } = require('./const')

module.exports = function () {
    return {
        entry: {
            app: path.resolve(APP_PATH, 'app.js')
        },
        output: {
            path: path.resolve(DIST_PATH),
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [APP_PATH],
                    exclude: [path.resolve(ROOT_PATH, 'node_modules')],
                    use: [{ loader: 'babel-loader' }]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss']
        }
    }
}
