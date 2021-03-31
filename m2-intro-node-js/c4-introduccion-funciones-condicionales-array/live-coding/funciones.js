const firma = require('./utils/firma')

function suma(a, b) {
    return a + b
}

const resta = function(a, b) {
    return a - b
}


const suma1 = suma(1,2)
const suma2 = suma(10,20)

const firmaCosme = firma.firma('Cosme', 'Fulanito')

console.log(firmaCosme)