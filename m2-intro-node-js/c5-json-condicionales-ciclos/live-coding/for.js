
const data = {
    days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Osvaldo']
}

/* for (i = 0; i < data.days.length; i++) {
    console.log(data.days[i])
} */


const sumaDeLosNumeros = numeros => {
    let suma = 0
    let promedio = 0
    
    for (let i = 0; i <= numeros; i++) {
        suma = suma + i
    }

    promedio = suma / numeros

    return {
        suma,
        promedio,
    } 
}

console.log( sumaDeLosNumeros(10000000) )

/* for (let i = 1; i <= 1000; i++) {
    console.log(i)
} */