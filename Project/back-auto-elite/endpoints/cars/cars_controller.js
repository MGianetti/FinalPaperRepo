const express = require('express');
const router = express.Router();

const { 
    getCars, 
    getCarByClient, 
    getCarById, 
    getCarByPlate 
} = require('./cars_model');

router.get('/', (req, res) => {
    const { id, client, plate } = req.query;

    if(id) return res.send(getCarById(id));
    if(client) return res.send(getCarByClient(client));
    if(plate) return res.send(getCarByPlate(plate));
    return res.send(getCars());
    
});

router.post('/', (req, res) => {
    return res.send('Post on cars succesfuly made')
});

formatId = id => {
    return id.length < 2 ? "0" + id : id;
};

module.exports = router;
