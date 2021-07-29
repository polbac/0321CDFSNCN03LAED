const path = require('path')

function isFileImage(fileName) {
    const AVIABLE_EXTENSIONS = ['.jpg', '.jpeg', '.gif', '.png']
    const extension = path.extname(fileName)

    if (AVIABLE_EXTENSIONS.includes(extension)) {
        return true
    }

    return false
}

module.exports = {
    isFileImage,
}