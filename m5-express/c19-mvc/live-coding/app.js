const express = require('express')
const app = express()
const path = require('path')


// definimos la carpeta que devuelve archivos estáticos
app.use(express.static('public'))

// home
app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})

// planets
const planetsRoutes = require('./routes/planetsRoutes')

app.use('/planets', planetsRoutes)

//
app.listen(3000, () => {
    console.log('El servidor ya está corriendo en el puerto 3000')
})