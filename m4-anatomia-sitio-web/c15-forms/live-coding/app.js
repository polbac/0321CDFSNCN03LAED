const express = require('express')
const app = express()
const path = require('path')

// definimos la carpeta que devuelve archivos estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'))
})

app.get('/send-planet', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/send-planet.html'))
})


app.listen(3000, () => {
    console.log('El servidor ya está corriendo en el puerto 3000')
})