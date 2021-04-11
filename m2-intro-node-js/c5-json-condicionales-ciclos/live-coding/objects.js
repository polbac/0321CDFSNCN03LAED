
function Persona(name, lastName) {
    this.name = name
    this.lastName = lastName
    
    this.sayHello = function() {
        console.log("Hola soy " + this.name + " " + this.lastName + " y tengo " + this.age + " años")
    }

    this.setAge = function(age) {
        this.age = age
    }
}

const gonza = new Persona('Gonza', 'Zevallos')
const matias = new Persona('Matías', 'Zevallos')

/* const gonza = {
    name: 'Gonza',
    lastName: 'Zevallos',
    age: 24,
    sayHello() {
        console.log("Hola soy " + this.name + " " + this.lastName + " y tengo " + this.age + " años")
    }
}
 */
