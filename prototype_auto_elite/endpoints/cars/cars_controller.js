const express = require('express');
const router = express.Router();
const getCars = require('./cars_model');

router.get('/', (req, res) => {
    const cars = JSON.stringify(getCars());
    return res.send(cars);
});

router.post('/', (req, res) => {
    return res.send('Post on cars succesfuly made')
});

module.exports = router;
