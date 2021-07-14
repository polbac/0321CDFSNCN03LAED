const { validationResult } = require('express-validator')
const fs = require('fs')
const { Planet, Galaxy, Color } = require('../database/models')
const { Op } = require('sequelize')

const planetsController = {
    list: async (req, res) => {

        const planetList = await Planet.findAll({
            order: [
                ['name', 'ASC'],
            ],
        })
        
        res.render('planets/list', { planetList })
    },
    detail: async (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params

        const planetDetail = await Planet.findByPk(id, {
            include: [{
                association: 'galaxy',
            },
            {
                association: 'colors',
            }]
            /* include: ['galaxy'] */
        })
        const galaxies = await Galaxy.findAll()
        res.render('planets/detail', { planetDetail, galaxies })
        
        
    },
    formNew: async (req, res) => {
        const galaxies = await Galaxy.findAll()
        res.render('planets/new', { galaxies })
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
    edit: async (req, res) => {
        const { id } = req.params

        const planet = await Planet.findByPk(id)
        const galaxies = await Galaxy.findAll()
        const colors = await Color.findAll()

        res.render('planets/edit', {
            planet,
            galaxies,
            colors
        });

    },
    update: async (req, res) => {
        const { id } = req.params;
        
        // el planeta original
        const planetOriginal = await Planet.findByPk(id)

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

        const { name, hasRings, galaxy, colors } = req.body;

        // Normalizo colores
        // Array.isArray() -> boolean si es array
        /* const colorsId = Array.isArray(colors) ? colors : [colors]

        const colorInstances = await Color.findAll({
            where: {
                id: {
                    [Op.in]: colorsId, 
                }
            }
        }) */

        planetOriginal.setColors(colors)

        const hasRingsNormalized = hasRings == 'true' ? true : false;

        const propertiesToEdit = {
            name: name,
            hasRings: hasRingsNormalized,
            image: image,
            galaxy_id: galaxy
        }

        await Planet.update(propertiesToEdit, {
            where: {
                id
            }
        })
        
        res.redirect('/planets/detail/' + id);
        
            

        
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