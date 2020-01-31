const geocode =(address)=> {
    const googleMaps = require('@google/maps').createClient({
        key: 'AIzaSyBGKOTPM2etXpm9QibniVfQXFEWjQ-6yl0',
        Promise: Promise
    });

    return googleMaps.geocode({
        address: address
    }).asPromise()
};

module.exports= geocode;


