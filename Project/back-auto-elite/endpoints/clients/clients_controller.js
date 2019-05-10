const express = require('express');
const router = express.Router();

const { 
    getClients,
    getClientByCpf,
    getClientById,
    getClientByName    
} = require('./clients_model');

router.get('/', (req, res) => {    
    const { id, cpf, name } = req.query;

    if(id) return res.send(getClientById(id));
    if(cpf) return res.send(getClientByCpf(cpf));
    if(name) return res.send(getClientByName(name));    
    return res.send(getClients());
    
});

router.post('/', (req, res) => {
    return res.send('Post on clients succesfuly made')
});

module.exports = router;
