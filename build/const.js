const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '../')
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')
const PUBLIC_PATH = path.resolve(SRC_PATH, 'public')

module.exports = {
    ROOT_PATH,
    SRC_PATH,
    DIST_PATH,
    PUBLIC_PATH
}
