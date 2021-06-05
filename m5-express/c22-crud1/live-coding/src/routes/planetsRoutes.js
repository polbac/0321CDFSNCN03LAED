const express = require('express')
const planetsRoutes = express.Router()

const planetsController = require('../controllers/planetsController')

planetsRoutes.get('/list', planetsController.list)
planetsRoutes.get('/detail/:id', planetsController.detail)

// Create
planetsRoutes.get('/create', planetsController.formNew);
planetsRoutes.post('/create', planetsController.store);

// Update
planetsRoutes.get('/:id/edit', planetsController.edit);
planetsRoutes.put('/:id', planetsController.update);

// Delete
planetsRoutes.delete('/:id', planetsController.destroy);

module.exports = planetsRoutes