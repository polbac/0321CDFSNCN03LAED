const { getPhotosFromMars } = require('../resources/nasa')
module.exports = {
    async listPhotos(req, res) {
        const planetsFromMars = await getPhotosFromMars()
        res.render('satellite/photos', { photos: planetsFromMars.photos })
    }
}