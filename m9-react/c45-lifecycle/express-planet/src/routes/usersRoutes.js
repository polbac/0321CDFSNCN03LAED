const express = require('express')
const usersRoutes = express.Router()
const multer = require('multer')
const path = require('path')

const { isFileImage } = require('../helpers/file')

const validationLoginUser = require('../middlewares/validationLoginUser')
const validationRegisterUser = require('../middlewares/validationRegisterUser')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

// destino donde guardar el archivo
// nombre del archivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // guardamos el destino de la carpeta absoluta
        const detinationPath = path.join(__dirname, '../../public/images/users')
        // llamamos al callback con error (null) y el path de donde guardaría el archivo
        cb(null, detinationPath)
    },
    filename: (req, file, cb) => {
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

const usersController = require('../controllers/usersController')

usersRoutes.get('/login', guestMiddleware, usersController.login)
usersRoutes.post('/login', guestMiddleware, validationLoginUser, usersController.processLogin);

usersRoutes.get('/register', guestMiddleware, usersController.register)
usersRoutes.post('/register', guestMiddleware, upload.single('image'), validationRegisterUser, usersController.processRegister);

usersRoutes.get('/profile', authMiddleware, usersController.profile)
usersRoutes.get('/logout', authMiddleware, usersController.logout)

module.exports = usersRoutes