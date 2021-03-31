
let numero1 = 10
let numero2 = 20

// aritméticos
const suma = numero1 + numero2
const resta = numero1 - numero2
const multiplicar = numero1 * numero2
const division = numero1 / numero2
const modulo = numero1 % numero2

numero1++ // suma 1 -- numero += 1
numero1-- // resta 1 -- numero -= 1

// concatenación
const pais = 'Uruguay'
const ciudad = 'Montevideo'

/* console.log(pais + ' ' + ciudad) 
console.log(pais, ' ', ciudad) 
console.log(`${pais} y ${ciudad}`)
 */
// comparación simples
/* console.log(10 == 10)
console.log(10 != 10) */

// comparación estricto
/* console.log(10 === "10") */

// operadores relacionales
/* console.log(10 > 10) // mayor
console.log(10 >= 10) // mayor o igual */

/* console.log(1 < 10) // menor */
/* console.log(10 <= 10) // menor o igual */

// operadores lógicos

const n1 = 1
const n2 = 10
const n3 = 20

/*
Las dos condiciones se tienen que cumplir
*/
/* console.log(n1 < 10 && n2 > 20)  */

/*
Alguna de las dos condiciones se tiene que cumplir
*/
console.log(
    (n1 < 10 || n2 > 20 && n1 === 1) || (n2 < 100)
) 

