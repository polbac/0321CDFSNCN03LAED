const express = require('express')
const planetsRoutes = express.Router()
const multer = require('multer')
const path = require('path')

const { isFileImage } = require('../helpers/file')

const validationNewPlanet = require('../middlewares/validationNewPlanet')

// destino donde guardar el archivo
// nombre del archivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // guardamos el destino de la carpeta absoluta
        const detinationPath = path.join(__dirname, '../../public/images')
        // llamamos al callback con error (null) y el path de donde guardaría el archivo
        cb(null, detinationPath)
    },
    filename: (req, file, cb) => {
        console.log('file', file)
        // El nombre del archivo original es: file.originalname
        const extension = path.extname(file.originalname) // .jpg

        // generamos un identificador único a partir de la fecha
        const now = Date.now() // 32173821637218631

        // generar un nombre para nuestro archivo
        //const filename = `${now}${extension}`
        const filename = now + extension
        
        // ejecutamos callback con null (error) y el nombre del archivo
        cb(null, filename)
    },
})

// fileFilter es un byPass para que multer guarde o no el archivo
const fileFilter = (req, file, cb)  => {
    if (!file) {
        cb(null, false)

        // corta ejecución
        return
    }

    if (!isFileImage(file.originalname)) {
        // gonza workaround para que llegue a express-validator el archivo
        req.file = file

        cb(null, false)

        // corta ejecución
        return
    }
   
    // Si aceptamos el archivo
    cb(null, true)

  }

const upload = multer({ storage, fileFilter })

const planetsController = require('../controllers/planetsController')
const { fstat } = require('fs')

planetsRoutes.get('/list', planetsController.list)
planetsRoutes.get('/detail/:id', planetsController.detail)

// Create
planetsRoutes.get('/create', planetsController.formNew);

// aca deberíamos pasar multer
planetsRoutes.post('/create', upload.single('image'), validationNewPlanet, planetsController.store);

// Update
planetsRoutes.get('/:id/edit', planetsController.edit);

// aca deberíamos pasar multer
planetsRoutes.put('/:id', upload.single('image'), planetsController.update);

// Delete
planetsRoutes.delete('/:id', planetsController.destroy);

module.exports = planetsRoutes