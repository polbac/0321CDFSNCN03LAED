const fs = require('fs')

// Leemos el archivo (string)
const gonzaJSON = fs.readFileSync(__dirname + '/gonza.json', 'utf-8')

const gonzaObject = JSON.parse(gonzaJSON)

// agregamos una nueva propiedad
gonzaObject.clubFutbol = 'Boca'

// lo pasamos nuevamente a JSON
const gonzaModifiedJSON = JSON.stringify(gonzaObject)

// escribimos el archivo
fs.writeFileSync(__dirname + '/gonza.json', gonzaModifiedJSON)