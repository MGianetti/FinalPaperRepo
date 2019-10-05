const express = require('express');
const router = express.Router();

const service = require('../controller/serviceController');

//Create a new Service
router.post('/', service.create);

//Find all Services
router.get('/', service.findAll);

//Retrieve Services by 
router.get('/byID/:id', service.findByID);

router.get('/byResume/:resume', service.findByResume);

router.get('/byClient/:client', service.findByClient);

router.get('/byCar/:car', service.findByCar);

//Update a service with Id
router.put('/:serviceId', service.update);

//Delete a service with Id
router.delete('/:serviceId', service.delete);

module.exports = router;