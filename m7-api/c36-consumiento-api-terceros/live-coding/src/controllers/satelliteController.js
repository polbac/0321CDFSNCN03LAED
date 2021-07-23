module.exports = {
    listPhotos(req, res) {
        const photos = [
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
            { image: 'https://services.meteored.com/img/article/si-los-romanos-hubieran-lanzado-un-satelite-caeria-hoy-316651-1_1280.jpg', title: 'Titulo foto' },
        ]

        res.render('satellite/photos', { photos })
    }
}