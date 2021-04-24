const express = require('express')
const app = express()
const path = require('path')

// definimos la carpeta que devuelve archivos estáticos
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

const PRODUCTS = [
    {id:1, name:'producto1'},
    {id:2, name:'producto2'},
    {id:3, name:'producto3'},
]

app.get('/products', (req, res) => {
    res.send(PRODUCTS)
})

app.get('/products/:id', (req, res) => {
    res.send('Pagina detalle de productos')
})

app.get('*', (req, res) => {
    res.status(404  ).send('Página no encontrada')
})

app.listen(3005, () => {
    console.log('El servidor ya está corriendo en el puerto 3005')
})