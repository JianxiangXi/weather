const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/1f0a4bf6117fd654c095473a8da74bdf/${latitude},${longitude}?units=si`

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services.')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a %${body.currently.precipProbability} chance of rain.`)
        }
    })
}

module.exports = forecast