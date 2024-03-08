const request = require('request');

const foreCast = (latitude, longtitude, callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=1b1df1141b5348bd9bf140005240603%20&q=" + latitude + "," + longtitude + "&aqi=no"
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Failed To Connect Website",undefined)
        }
        else if (response.body.error) {
            callback(response.body.error.message, undefined)
        }
        else {
            callback(undefined, response.body.location.name + "it's " + response.body.current.condition.text)
        }
    })
}
module.exports = foreCast