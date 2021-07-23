const { body } = require('express-validator')
const userModel = require('../models/usersModel')
const { isFileImage } = require('../helpers/file')

const validationRegisterUser = [
    body('name')
        .notEmpty()
        .withMessage('Por favor ingrese su nombre'),
    body('email')
        .notEmpty()
        .withMessage('Por favor ingrese su e-mail')
        .isEmail()
        .withMessage('No es en formato e-mail')
        .bail()
        .custom((email) => {
            // FIXME Modificar el método de búsqueda
            const userFound = userModel.findByField('email', email)

            if (userFound) {
                return false
            }

            return true
        })
        .withMessage('El usuario ya existe'),
    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese su password')
        .bail()
        /* .isStrongPassword()
        .withMessage('Por favor ingrese un password etc') */
        ,
    body('image')
        .custom((value, { req }) => {
            const { file } = req

            // chequea que haya cargado imagen
            if (!file) {
                // esto es como si hicieramos .withMessage('Seleccione un archivo')
                throw new Error('Por favor ingrese una imagen')
            }


            if (!isFileImage(file.originalname)) {
                // disparar error
                throw new Error('Por favor ingrese una archivo que sea una imagen')
            }

            // chequea que la extensión sea la correcta
            
            return true
        })
]

module.exports = validationRegisterUser