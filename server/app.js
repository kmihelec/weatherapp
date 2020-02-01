
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const app = express();
app.use(cors());

const port = process.env.PORT || 7000;

app.get('/api/weather', async (req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    try {

        const location = await geocode(req.query.address)
        if(location.json.status === "ZERO_RESULTS"){
             return res.send({error:'Unable to find location!'})
        }
        const latitude = location.json.results[0].geometry.location.lat;
        const longitude = location.json.results[0].geometry.location.lng;
        const name = location.json.results[0].formatted_address;
        const weather = await forecast(latitude,longitude);

        res.send({location: name, weather:weather})
    }catch(e){

        res.send(e)
    }
});




app.listen(port, ()=>{
    console.log('Server up on port '+port);
});