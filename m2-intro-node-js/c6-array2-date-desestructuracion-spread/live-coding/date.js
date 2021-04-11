
const date = new Date()

// lectura
// año
//console.log(date.getFullYear())
// mes
//console.log(date.getMonth())
// dia
//console.log(date.getDate())
// dia semana
//console.log(date.getDay())


// escritura
// año
//date.setFullYear(2022)
// mes
//date.setMonth(4)
// dia
//date.setDate(1)

const hoy = new Date()
const ayer = new Date()
ayer.setDate(8)

console.log(hoy.getTime() > ayer.getTime())

