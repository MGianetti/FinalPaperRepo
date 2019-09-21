const express = require('express');
const router = express.Router();

const item = require('../controller/itemController');

//Create a new item
router.post('/', item.create);

//Find all Items
router.get('/', item.findAll);

//Retrieve Items by 
router.get('/byIdCode/:idCode', item.findByIdCode);

//Retrieve Items by 
router.get('/byId/:id', item.findById);

// router.get('/byName/:name', item.findByName);

// router.get('/byPrice/:price', item.findByClient); UNDERSTAND

//Update a item with Id
router.put('/:itemId', item.update);

//Delete a item with Id
router.delete('/:itemId', item.deleteItem);

module.exports = router;