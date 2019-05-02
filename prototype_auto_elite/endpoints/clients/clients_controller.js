const express = require('express');
const router = express.Router();
const getClients = require('./clients_models');

router.get('/', (req, res) => {
    let clients = JSON.stringify(getClients());
    return res.send(clients);
});

router.post('/', (req, res) => {
    return res.send('Post on clients succesfuly made')
});

module.exports = router;
