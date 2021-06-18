const { body } = require('express-validator')

const validationLoginUser = [
    body('email')
        .notEmpty()
        .withMessage('Por favor ingrese su e-mail')
        .isEmail()
        .withMessage('No es en formato e-mail'),
    body('password')
        .notEmpty()
        .withMessage('Por favor ingrese su password'),
]

module.exports = validationLoginUser