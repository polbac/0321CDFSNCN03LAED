// modulo nativo
const fs = require('fs')
const contenidoArchivo = fs.readFileSync(__dirname + '/texto.txt', 'utf-8')
console.log(contenidoArchivo)
// modulo de terceros
const moment = require('moment')
console.log(moment().format('dddd'))

// módulo propio
const diasSemana = require('./modulo')
console.log(diasSemana)

/* 
ContenidoArchivo >> PascalCase
contenido_archivo >> snake_case
contenidoArchivo >> camelCase
*/
