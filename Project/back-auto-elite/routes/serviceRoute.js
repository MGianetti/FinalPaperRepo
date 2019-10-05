const express = require('express');
const router = express.Router();

const service = require('../controller/serviceController');

//Create a new Service
router.post('/', service.create);

//Find all Services
router.get('/', service.findAll);

//Retrieve Services by 
router.get('/:id', service.findById);

router.get('/bySummary/:summary', service.findBySummary);

router.get('/byEmployee/:employeeId', service.findByEmployee);

router.get('/byCar/:carId', service.findByCar);

//Update a service with Id
router.put('/:serviceId', service.update);

//Delete a service with Id
router.delete('/:serviceId', service.deleteService);

module.exports = router;