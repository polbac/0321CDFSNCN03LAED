function firma(nombre, apellido) {
    return apellido + ', ' + nombre
}

function firmaInversa(nombre, apellido) {
    return nombre + ', ' + apellido
}


module.exports = {
    firma: firma,
    firmaInversa: firmaInversa
}