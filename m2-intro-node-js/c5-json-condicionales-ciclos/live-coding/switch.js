
const day = "lunes"

// va a evaluar si es día de semana o fin de semana
switch(day) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
        console.log('es día de semana')
        break
    case 'sábado':
    case 'domingo':
        console.log('es fin de semana')
        break
    default:
        console.log('no se que escribiste')
}