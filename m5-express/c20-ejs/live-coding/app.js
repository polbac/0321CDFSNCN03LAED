const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', './views')

// definimos la carpeta que devuelve archivos estáticos
app.use(express.static('public'))

// home
app.get('/', (req, res) => {
    res.render('home', {
        title: 'PLANETAS'
    })
})

// planets
const planetsRoutes = require('./routes/planetsRoutes')

app.use('/planets', planetsRoutes)

//
app.listen(3000, () => {
    console.log('El servidor ya está corriendo en el puerto 3000')
})