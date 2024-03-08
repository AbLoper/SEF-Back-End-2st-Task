const request = require('request');

const geocode = (address, callback) => {
    const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    request({ url: geoCodeUrl, json: true }, (error, response) => {
        if (error) {
            callback("Failed To Connect Website")
        }
        else if (response.body.message) {
            callback(response.body.message, undefined)
        }
        else if (response.body.features.length == 0) {
            callback("Unable To Find Location")
        }
        else {
            callback(undefined, {
                longtitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode