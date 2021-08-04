module.exports = (req, res, next) => {
    // locals.title está disponible desde las vistas
    res.locals.title = 'esto es un título'
    res.render('not-found')
}