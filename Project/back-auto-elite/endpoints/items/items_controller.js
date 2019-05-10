const express = require('express');
const router = express.Router();

const {
    getItems,
    getItemById,
    getItemByCode
} = require('./items_model');

router.get('/', (req, res) => {
    const { id, code } = req.query;

    if(id) return res.send(getItemById(id));
    if(code) return res.send(getItemByCode(code));
    return res.send(getItems());
    
});

router.post('/', (req, res) => {
    return res.send("Post on Items Photo successfuly accessed");
});

module.exports = router;
