const express = require('express')
const apiRoutes = express.Router()

const planetsApiRoutes = require('./planetsApiRoutes')

apiRoutes.use('/planets', planetsApiRoutes)

module.exports = apiRoutes