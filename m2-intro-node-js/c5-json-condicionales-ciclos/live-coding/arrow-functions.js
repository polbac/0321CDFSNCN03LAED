/* 
function sum(a, b) {
    return a + b
}

const sum = (a, b) => a + b

const sum = (a, b) => {
    return a + b
}

const toUpperCase = words => 
    words.toUpperCase() 

const esPar = numero => numero % 2 === 0

function esPar(numero) {
    return numero % 2 === 0
} */

const age = 15

const ageMax = (age > 18) ? true : false

if (age > 18) {
    ageMax = true
} else {
    ageMax = false
}

const ageMax = age > 18

const ageMax = age > 18 ? 'si' : 'no'