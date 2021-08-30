const express = require('express')
const planetsApiRoutes = express.Router()
const planetsApiController = require('../../controllers/api/planetsApiController')

// endpoints
planetsApiRoutes.get('/search', planetsApiController.searchPlanets)
planetsApiRoutes.get('/', planetsApiController.listPlanets)
planetsApiRoutes.get('/:id', planetsApiController.detailPlanet)
planetsApiRoutes.post('/', planetsApiController.createPlanet)
planetsApiRoutes.put('/:id', planetsApiController.updatePlanet)
planetsApiRoutes.delete('/:id', planetsApiController.destroyPlanet)

module.exports = planetsApiRoutes