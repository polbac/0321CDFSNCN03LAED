const fs = require('fs')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const usersModel = require('../models/usersModel')

const usersController = {
    login: (req, res) => {
         res.render('users/login')
    },
    
    processLogin: (req, res) => {
        const formValidation = validationResult(req)
        const oldValues = req.body

        if (!formValidation.isEmpty()) {
            return res.render('users/login', { oldValues, errors: formValidation.mapped() })
        } 

        // y acá que anselmo?

        res.redirect('/users/profile')
    },
    register: (req, res) => {
        res.render('users/register')
    },
    processRegister: (req, res) => {
        const formValidation = validationResult(req)
        const oldValues = req.body
        
        if (!formValidation.isEmpty()) {
            // borrar imagen
            if (req.file) {
                // primero chequeamos que exista
                fs.unlinkSync(req.file.path)
            }
            

            // tenemos errores
            res.render('users/register', { oldValues, errors: formValidation.mapped() })
          return  
        } 



        // Crear el objeto usuario
        const { name, email, password } = req.body;

        // dentro de req.file va a venir la información del archivo
        const { file } = req
        
        // nuestra ruta al archivo
        const image = file.filename

        // hashear el password
        const hashPassword = bcrypt.hashSync(password)

        const user = {
            name,
            email,
            password: hashPassword,
            image: '/images/users/' + image,
        }
        
        usersModel.create(user);

        res.redirect('/users/login');
    },

    profile: (req, res) => {
        res.render('users/profile')
    },

    logout: (req, res) => {
        res.redirect('/')
    }
  
}

module.exports = usersController