const { body } = require('express-validator')
const bcrypt = require('bcryptjs')
const userModel = require('../models/usersModel')

const validationLoginUser = [
    body('email')
        .notEmpty()
        .withMessage('Por favor ingrese su e-mail')
        .isEmail()
        .withMessage('No es en formato e-mail'),
    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese su password')
        .bail()
        .custom((value, { req }) => {
            const { email, password } = req.body
            
            // encontrar un usuario con el email
            // FIXME Modificar el método de búsqueda
            const userFound = userModel.findByField('email', email)

            // chequear que userFound exista
            if (userFound) {

                // comparar contraseñas
                const passwordMatch = bcrypt.compareSync(password, userFound.password)

                if (passwordMatch) {
                    return true
                }
            }

            return false
        })
        .withMessage('El usuario o la contraseña son inválidas'),
]

module.exports = validationLoginUser