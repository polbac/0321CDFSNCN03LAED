
function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function hacerAlgo(cb, a, b) {
    return cb(a, b)    
}


const resultado = hacerAlgo(restar, 1, 2)

console.log('resultado', resultado)

