const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get on Service Budget succefuly made');
});

router.post('/', (req, res) => {
    res.send('Post on Service Budget succefuly made');
});