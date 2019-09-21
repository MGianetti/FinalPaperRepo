const express = require('express');
const router = express.Router();

const client = require('../controller/clientController');

//Create a new Client
router.post('/', client.create);

//Retrieve all Clients
router.get('/', client.findAll);

//Retrieve Clients by 
router.get('/byPlate/:plate', client.findByPlate);

router.get('/byCPF/:cpf', client.findByCPF);

router.get('/byName/:name', client.findByName);

router.get('/byCellphone/:cellphone', client.findByCellphone);

router.get('/byTelephone/:telephone', client.findByTelephone);

router.get('/byCEP/:cep', client.findByCEP);

//Update a Client with Id
router.put('/:clientId', client.update);

//Delete a Client with Id
router.delete('/:clientId', client.deleteClient);

module.exports = router;
