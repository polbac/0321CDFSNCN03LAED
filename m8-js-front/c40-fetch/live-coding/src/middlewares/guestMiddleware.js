module.exports = (req, res, next) => {
    // detectamos si la persona esta logueada
    const userSession = req.session.logged
    
    if (userSession) {
        res.redirect('/users/profile')
    }

    next()
}