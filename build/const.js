const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../')
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
    ROOT_PATH,
    APP_PATH,
    DIST_PATH
}
