const numeros = [2,3212,3213,114,3215,126]

// map -> transformar cada posición del array
const numerosMas2 = numeros.map(function(n) {
    return n + 2
})


const nombres = ['Nahir', 'Ruben']
const holaNombres = nombres.map(nombre => 'Hola ' + nombre)

// filter
const numeros2 = [1,2,3,4,5]
const numeros2ComoString = numeros2.map(n => String(n))

/* const numeros2Par = numeros2.filter(function(n) {
    return n % 2 === 0
}) */
const numeros2Par = numeros2.filter(n => n % 2 === 0)

// console.log(numeros2Par)


// forEach
numeros.forEach(function(n) {
    //console.log(n)
})

// reduce
const suma = numeros2.reduce(function(acc, el) {
    return acc += el
}, 0)

const sumaNumeros = numeros2.reduce((acc, el) => {
    return acc + el
})

// find
const elementoMayor2 = numeros2.find((elemento) => {
    return elemento > 2
})
/* 
hacer esto mismo con un filter sería así:
const elementoMayor2Filter = numeros2.filter((elemento) => {
    return elemento > 2
})
console.log(elementoMayor2Filter[0]) */

// some()

const hayAlgunPar = numeros2.some(function(elemento) {
    return elemento % 2 === 0
})

console.log('hayAlgunPar', hayAlgunPar)