const { validationResult } = require('express-validator')
const fs = require('fs')
const { Planet, Galaxy, Color } = require('../database/models')
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

        
        Promise.all([Planet.findByPk(id), Galaxy.findAll()])
            .then(([planetDetail, galaxies]) => {
                res.render('planets/detail', { planetDetail, galaxies })
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
        const { id } = req.params

        Promise.all([
            Planet.findByPk(id), 
            Galaxy.findAll(),
            Color.findAll(),
        ])
            .then(([planet, galaxies, colors]) => {
                res.render('planets/edit', {
                    planet,
                    galaxies,
                    colors
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
        
                const { name, hasRings, galaxy } = req.body;
        
                // Normalizo hasRings
        
                const hasRingsNormalized = hasRings == 'true' ? true : false;
        
                const propertiesToEdit = {
                    name: name,
                    hasRings: hasRingsNormalized,
                    image: image,
                    galaxy_id: galaxy
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