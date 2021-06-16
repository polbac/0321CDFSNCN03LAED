const { body } = require('express-validator')
const path = require('path')

const { isFileImage } = require('../helpers/file')

const validationNewPlanet = [
    body('name')
        .notEmpty()
        .withMessage('Por favor ingrese un nombre de planeta')
        .bail()
        //
        .isLength({ min: 3 })
        .withMessage('Por favor un nombre más largo'),
        // como es la última no usamos bail()
    body('rings')
        .notEmpty().withMessage('Por favor seleccione si tiene anillos'),
    body('image')
        .custom((value, { req }) => {
            const { file } = req

            console.log('file', file)
            
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

module.exports = validationNewPlanet