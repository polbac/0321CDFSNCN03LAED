const path = require('path')

const planetsController = {
    list: (req, res) => {
        res.sendFile(path.resolve('views/planets-list.html'))
    },
    formNew: (req, res) => {
        res.sendFile(path.resolve('views/planets-new.html'))
    },
    detail: (req, res) => {
        res.sendFile(path.resolve('views/planets-detail.html'))
    },
}

module.exports = planetsController