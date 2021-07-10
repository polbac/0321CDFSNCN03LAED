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
        const { name, hasRings, discovered, diameter, galaxy } = req.body;

        // Normalizo hasRings

        const hasRingsNormalized = hasRings == 'true' ? true : false;
        
        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        // nuestra ruta al archivo
        const image = file.filename
        
        const planet = {
            name: name,
            hasRings: hasRingsNormalized,
            discovered: discovered,
            diameter: diameter,
            galaxy_id: galaxy,
            image: '/images/' + image,
        }
        
        Planet.create(planet)
            .then((planetCreated) => {
                res.redirect('/planets/detail/' + planetCreated.id);
            })
    },
    edit: (req, res) => {
        Planet.findByPk(req.params.id)
            .then(planet => {
                res.render('planets/edit', {
                    planet
                });
            })

    },
    update: (req, res) => {
        const { id } = req.params;
        // el planeta original
        Planet.findByPk(id)
            .then(planetOriginal => {
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
        
                const { name, hasRings } = req.body;
        
                // Normalizo hasRings
        
                const hasRingsNormalized = hasRings == 'true' ? true : false;
        
                const propertiesToEdit = {
                    name: name,
                    hasRings: hasRingsNormalized,
                    image: image
                }
        
                Planet.update(propertiesToEdit, {
                    where: {
                        id
                    }
                })
                    .then(() => {
                        res.redirect('/planets/detail/' + id);
                    })
        
            })

        
    },
    destroy: (req, res) => {
        const id = req.params.id;
    
        Planet.destroy({
            where: {
                id
            }
        })
            .then(() => {
                res.redirect('/planets/list');
            })

    }
}

module.exports = planetsController