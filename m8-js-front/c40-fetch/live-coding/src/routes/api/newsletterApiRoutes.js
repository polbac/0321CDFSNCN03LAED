const express = require('express')
const newlsetterApiRoutes = express.Router()
const newsletterApiController = require('../../controllers/api/newsletterApiController')

// endpoints
newlsetterApiRoutes.post('/', newsletterApiController.register)

module.exports = newlsetterApiRoutes