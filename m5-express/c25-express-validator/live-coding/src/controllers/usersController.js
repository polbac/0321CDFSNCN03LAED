const { validationResult } = require('express-validator')
const usersModel = require('../models/usersModel')
const fs = require('fs')

const usersController = {
    login: (req, res) => {
         res.render('users/login')
    },
    
    processLogin: (req, res) => {
        const formValidation = validationResult(req)
        
        if (!formValidation.isEmpty()) {
            const oldValues = req.body
            return res.render('users/login', { oldValues, errors: formValidation.mapped() })
          
        } 

        // login ok!
        res.send('ok! que hacemos?')
    },
    register: (req, res) => {
        res.render('users/register')
    },
    processRegister: (req, res) => {
        const formValidation = validationResult(req)
        
        if (!formValidation.isEmpty()) {
            // borrar imagen
            if (req.file) {
                // primero chequeamos que exista
                fs.unlinkSync(req.file.path)
            }
            

            // tenemos errores
            const oldValues = req.body
            res.render('users/register', { oldValues, errors: formValidation.mapped() })
          return  
        } 


        // Crear el objeto planeta
        const { name, email, password } = req.body;

        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        // nuestra ruta al archivo
        const image = file.filename

        const user = {
            name,
            email,
            password,
            image: '/images/users/' + image,
        }
        
        usersModel.create(user);

        res.redirect('/users/login');
    },
  
}

module.exports = usersController