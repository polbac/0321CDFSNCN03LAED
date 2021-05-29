const fs = require('fs');

// lee el archivo
const file = fs.readFileSync(__dirname + '/planets-data.json')

// parsea el json
const jsonFile = JSON.parse(file)

module.exports = {
    // método que devuelve todos los planetas
    findAll() {
        return jsonFile.planets
    },
    
    // método que devuelve un planeta por id
    findByPk(id) {
        return jsonFile.planets.find(planet =>
            Number(planet.id) === Number(id)
        )
    }
}