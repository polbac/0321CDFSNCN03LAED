const { validationResult } = require('express-validator')
const planetsModel = require('../models/planetsModel')
const fs = require('fs')
const { Planet, Galaxy } = require('../database/models')
const { Op } = require('sequelize')

const planetsController = {
    list: (req, res) => {

        Planet.findAll({
            order: [
                ['name', 'ASC'],
            ],
        })
            .then(planetList => {
                res.render('planets/list', { planetList })
        
            })
    },
    detail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        Planet.findByPk(id)
            .then(planetDetail => {
                res.render('planets/detail', { planetDetail })
            })
        
        
    },
    formNew: (req, res) => {
        Galaxy.findAll()
            .then(galaxies => {
                res.render('planets/new', { galaxies })
            })
    },
    store: (req, res) => {
        const formValidation = validationResult(req)
        
        /* si encuentro un error devuelvo el formulario
        con los valores ya cargados y los errores */
        console.log('formValidation.mapped()',formValidation.mapped())
        
        if (!formValidation.isEmpty()) {
            // borrar imagen
            if (req.file) {
                // primero chequeamos que exista
                fs.unlinkSync(req.file.path)
            }
            

            // tenemos errores
            const oldValues = req.body
            res.render('planets/new', { oldValues, errors: formValidation.mapped() })
          return  
        } 
        // Crear el objeto planeta
        const { name, rings } = req.body;
        
        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        // nuestra ruta al archivo
        const image = file.filename
        
        const planet = {
            name: name,
            hasRings: hasRings,
            discovered: discovered,
            diameter: diameter,
            galaxy_id: galaxy,
            image: '/images/' + image,
        }
        return res.send(planet);
        
        // FIXME Modificar el método de creación
        const planetCreated = planetsModel.create(planet);

        res.redirect('/planets/detail/' + planetCreated.id);
    },
    edit: (req, res) => {
        // FIXME Modificar el método de búsqueda
        const planet = planetsModel.findByPk(req.params.id);

        res.render('planets/edit', {
            planet
        });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;
        // el planeta original
        // FIXME Modificar el método de búsqueda
        const planetOriginal = planetsModel.findByPk(id)
        // la imagen original: planetOriginal.image

        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        /* Si viene una imagen nueva, cargar la imagen nueva
        sino poner la original */
        let image

        if (file) {
            image = '/images/' + file.filename
        } else {
            image = planetOriginal.image
        }

        data.image = image

        // FIXME Modificar el método de modificación
        planetsModel.update(data, id);

        res.redirect('/planets/detail/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        // FIXME Modificar el método de eliminación
        planetsModel.destroy(id);

        res.redirect('/planets/list');
    }
}

module.exports = planetsController