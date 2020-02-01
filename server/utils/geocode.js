const geocode =(address)=> {
    const googleMaps = require('@google/maps').createClient({
        key: process.env.API_KEY,
        Promise: Promise
    });

    return googleMaps.geocode({
        address: address
    }).asPromise()
};

module.exports= geocode;


