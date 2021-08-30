const express = require('express')
const satelliteRoutes = express.Router()
const satelliteController = require('../controllers/satelliteController')

satelliteRoutes.get('/photos', satelliteController.listPhotos);

module.exports = satelliteRoutes