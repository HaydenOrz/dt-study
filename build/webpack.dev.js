const path = require('path')
const merge = require('webpack-merge')

const {} = require('./const')
const common = require('./webpack.common')()
common.mode = 'development'

module.exports = merge(common, {
    devServer: {
        port: 3000
    }
})
