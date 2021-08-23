const { Planet } = require('../database/models')

module.exports = async (req, res, next) => {
    res.locals.planets = await Planet.findAll()
    next()
}