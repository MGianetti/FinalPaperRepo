const express = require('express');
const router = express.Router();

const car = require('../controller/carController');

//Create a new Car
router.post('/', car.create);

//Find all cars
router.get('/', car.findAll);

//Retrieve Cars by 
router.get('/byPlate/:plate', car.findByPlate);

router.get('/byClient/:clientName', car.findByClient);

router.get('/byModel/:model', car.findByModel);

router.get('/byYear/:year', car.findByYear);

//Update a car with Id
router.put('/:carId', car.update);

//Delete a car with Id
router.delete('/:carId', car.deleteCar);

module.exports = router;