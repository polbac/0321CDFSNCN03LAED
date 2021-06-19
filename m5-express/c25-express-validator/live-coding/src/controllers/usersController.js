const fs = require('fs')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const usersModel = require('../models/usersModel')
const { maxAgeUserCookie } = require('../config/config')

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

        // lo que viene del login
        const { email, remember } = req.body
        
        // le pedimos al modelo el usuario
        const user = usersModel.findByField('email', email)
        //req.session = {}

        // cargamos los datos del usuario en la sesión
        
        // le sacamos el password
        delete user.password

        // cargamos dentro de la sesión la propieda logged con el usuario (menos el password)
        req.session.logged = user

        // guardamos un dato de nuestro usuario en la sesión (email, user_id)
        if (remember) {
            // clave
            res.cookie('user', user.id, {
                maxAge: maxAgeUserCookie
            })
        }

      
        // redirigimos al profile
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
        // borrar session y cookie
        req.session.destroy()
        res.clearCookie('user')
        
        res.redirect('/')
    }
  
}

module.exports = usersController