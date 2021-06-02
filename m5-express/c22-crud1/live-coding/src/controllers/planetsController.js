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

        const planet = {
            name: name,
            rings: rings
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

        planetsModel.update(data, id);

        res.redirect('/planets/detail/' + id);
    }
}

module.exports = planetsController