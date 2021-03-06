const request = require('request')

const forecast = (latitude, longitude, callback) => {
    // Insert your own API Key here
    const url = `https://api.darksky.net/forecast/${APIkey}/${latitude},${longitude}?units=si`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services.')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature}°C degrees out. The apparent temperature is ${body.currently.apparentTemperature}°C degrees. There is a %${body.currently.precipProbability} chance of rain.`)
        }
    })
}

module.exports = forecast