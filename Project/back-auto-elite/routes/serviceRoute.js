const express = require('express');
const router = express.Router();

const service = require('../controller/serviceController');

//Create a new Service
router.post('/Services', service.create);

//Find all Services
router.get('/Services', service.findAll);

//Retrieve Services by 
router.get('/Services/byID/:id', service.findByID);

router.get('/Services/byResume/:resume', service.findByResume);

router.get('/Services/byClient/:client', service.findByClient);

router.get('/Services/byCar/:car', service.findByCar);

//Update a service with Id
router.put('/Services/:serviceId', service.update);

//Delete a service with Id
router.delete('/Services/:serviceId', service.delete);

module.exports = router;