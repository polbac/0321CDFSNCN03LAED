const fetch = require('node-fetch')
const NodeCache = require( "node-cache" )
const config = require('../config/config')

const cache = new NodeCache( { stdTTL: 120, checkperiod: 120 } );

/* cache.get('photos') // devuelve los datos guardados en la cache
cache.set('photos', []) // guardas un array vacio en la key photos
cache.has('photos') // devuelve un booleano si existe la key photos */

function addApiKeyToEndpoint(endpoint) {
    //return `${endpoint}&api_key=${config.nasaApiKey}`
    return endpoint + "&api_key=" + config.nasaApiKey
}

function getPhotosFromMars() {
    if (cache.has('photos')) {
        return Promise.resolve(cache.get('photos'))
    }

    const endpoint = addApiKeyToEndpoint(config.endpointPhotosMars)
    // esto es lo mismo que: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key={{API_KEY}}
    return fetch(endpoint)
            .then(res => {
                return res.json()
            })
            .then(json => {
                cache.set('photos', json)
                return json
            })


}

module.exports = {
    getPhotosFromMars,
}