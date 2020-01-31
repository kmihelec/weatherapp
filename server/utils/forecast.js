const fetch = require('node-fetch');

async function forecast(latitude, longitude) {

    const url = 'https://api.darksky.net/forecast/5239d203e7cfd3dab40f7aa6da71e33f/'+latitude+','+longitude+'?units=si&lang=en';
    return await fetch(url).then(res => res.json())


}

module.exports = forecast;