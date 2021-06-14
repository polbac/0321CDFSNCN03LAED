const planetsModel = require('../models/planetsModel')


const planetsController = {
    list: (req, res) => {
        const planetList = planetsModel.findAll()

        // aca leo el json y se lo paso al template
        // res.render('planets/list', { planetList: planetList })
        res.render('planets/list', { planetList })
    },
    detail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const planetDetail = planetsModel.findByPk(id)
        
        res.render('planets/detail', { planetDetail })
    },
    formNew: (req, res) => {
        res.render('planets/new')
    },
    store: (req, res) => {
        // Crear el objeto planeta
        const { name, rings } = req.body;

        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        // nuestra ruta al archivo
        const image = file.filename

        const planet = {
            name: name,
            rings: rings,
            image: '/images/' + image,
        }

        const planetCreated = planetsModel.create(planet);

        res.redirect('/planets/detail/' + planetCreated.id);
    },
    edit: (req, res) => {
        const planet = planetsModel.findByPk(req.params.id);

        res.render('planets/edit', {
            planet
        });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;
        // el planeta original
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

        planetsModel.update(data, id);

        res.redirect('/planets/detail/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        planetsModel.destroy(id);

        res.redirect('/planets/list');
    }
}

module.exports = planetsController