/* const [dia, mes, anio] = require('./module/fecha')

const { user1, user2 } = require('./module/user')

const { name: name1, email: email1 } = user1
const { name: name2, email: email2 } = user2 */

/* console.log('name1', name1)
console.log('email1', email1)

console.log('name2', name2)
console.log('email2', email2) */

const generateUser = () => ({
    name: 'Fernando Rodgriguez',
    email: 'fer@gmail.com',
})

const user = generateUser()

const user2 = {
    ...user,
    age: 20,
}

const numbers = [1, 2, 3, 4]

const numbers2 = [
    -2, -1, 0, ...numbers
]

function sumar(...numeros) {
    
}

sumar(1,2,3,4,5,6,7)

/* const user = {
    name: 'Fernando Rodgriguez',
    email: 'fer@gmail.com',
}

let { name, email } = user */
/* 
es lo mismo que esto:
let name = user.name
let email = user.email */

const numeros = [1,2,3,4]

const [ primerNumero, , tercerNumero ] = numeros



/* const fecha = "9/4/2021"
const [dia, mes, anio] = fecha.split("/") */
