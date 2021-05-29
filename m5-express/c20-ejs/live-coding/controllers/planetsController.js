const planetsModel = require('../models/planetsModel')

const planetsController = {
    list: (req, res) => {
        const planetList = planetsModel.findAll()

        // aca leo el json y se lo paso al template
        // res.render('planets/list', { planetList: planetList })
        res.render('planets/list', { planetList })
    },
    formNew: (req, res) => {
        res.render('planets/new')
    },
    detail: (req, res) => {
        // levantamos el id desde la url (parámetro)
        
        //const id = req.params.id
        const { id } = req.params
        
        const planetDetail = planetsModel.findByPk(id)

        res.render('planets/detail', { planetDetail })
    },
}

module.exports = planetsController