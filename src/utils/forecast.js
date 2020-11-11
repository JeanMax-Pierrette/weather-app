const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f503e06cee61a56155d43658fd4c99a3&query=${latitude},${longitude}`;
  
    request({ url, json: true }, (error, { body }) => {
        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,`It is currently ${body.current.temperature} degrees out and there is the probability of ${body.current.precip}% chance of rain `)
        }
    })
}

module.exports = forecast