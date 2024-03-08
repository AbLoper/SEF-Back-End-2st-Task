const request = require('request');
// const inp = process.argv[2]
const forecast = "http://api.weatherapi.com/v1/current.json?key=1b1df1141b5348bd9bf140005240603%20&q=lebanon&aqi=no"
const geocode = "https://api.mapbox.com/geocoding/v5/mapbox.places/lebanon.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

const url = geocode

request({ url, json: true }, (error, response) => {

    // if (error) {
    //     console.log("Website Not Found")
    // }
    // else if (response.body.error) {
    //     console.log(response.body.error.message);
    // }
    // else{
    //     console.log(response.body.location.name);
    // }
console.log(response.body);

})