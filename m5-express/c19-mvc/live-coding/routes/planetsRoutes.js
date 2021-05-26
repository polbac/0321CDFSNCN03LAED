const express = require('express')
const planetsRoutes = express.Router()

const planetsController = require('../controllers/planetsController')

planetsRoutes.get('/list', planetsController.list)
planetsRoutes.get('/new', planetsController.formNew)
planetsRoutes.get('/detail/:id', planetsController.detail)

module.exports = planetsRoutes