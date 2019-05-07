const express = require('express');
const router = express.Router();

const {
    getInspections,
    getInspectionsById
} = require('./inspection_model');

router.get('/', (req, res) => {
    const { id } = req.query;

    if(id) return res.send(getInspectionsById(id));
    return res.send(getInspections());
    
});

router.post('/', (req, res) => {
    return res.send('Post on inspection succesfuly made')
});

module.exports = router;
