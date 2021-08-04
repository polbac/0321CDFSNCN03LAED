const { Op } = require('sequelize')
const { Planet } = require('../../database/models')

module.exports = {
    async searchPlanets(req, res) {
        const { name } = req.params
        const planets = await Planet.findAndCountAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })

        res.status(200).json({
            meta: {
                status: "success",
                total: planets.count
            },
            data: {
                planets: planets.rows
            }
        })
    },
    async listPlanets(req, res) {
        try {
            const planets = await Planet.findAndCountAll()

            res.status(200).json({
                meta: {
                    status: "success",
                    total: planets.count
                },
                data: {
                    planets: planets.rows
                }
            })
        } catch(err) {
            res.status(500).json({
                meta: {
                    status: "error"
                },
                error: {
                    msg: "Cant connect to database",
                    err
                }
            })
        }
    },

    async detailPlanet(req, res) {
        const planet = await Planet.findByPk(req.params.id)   
        
        if (!planet) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        res.status(200).json({
            meta: {
                status: "success",
            },
            data: {
                planet,
            }
        })
    },

    async createPlanet(req, res) {
        const { name, discovered, hasRings } = req.body

        const planet = await Planet.create({
            name, 
            discovered, 
            hasRings
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                planet,
            }
        })
    },

    async updatePlanet(req, res) {
        const planet = await Planet.findByPk(req.params.id)

        if (!planet) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        const { name, discovered, hasRings } = req.body

        const planetUpdated = await planet.update({
            name, 
            discovered, 
            hasRings,
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                planet: planetUpdated,
            }
        })
    },

    async destroyPlanet(req, res) {
        const planet = await Planet.findByPk(req.params.id)

        if (!planet) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        await planet.destroy()

        res.status(200).json({
            meta: {
                status: "success",
            },
        })
    }
}