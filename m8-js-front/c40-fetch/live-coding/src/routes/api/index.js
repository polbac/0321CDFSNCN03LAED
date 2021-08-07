const express = require('express')
const apiRoutes = express.Router()

const planetsApiRoutes = require('./planetsApiRoutes')
const newsletterApiRoutes = require('./newsletterApiRoutes')

apiRoutes.use('/planets', planetsApiRoutes)
apiRoutes.use('/newsletter', newsletterApiRoutes)

module.exports = apiRoutes