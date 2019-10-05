const express = require('express');
const router = express.Router();

const inspection = require('../controller/inspectionController');

//Create a new Inspection
router.post('/', inspection.create);

//Find all Inspections
router.get('/', inspection.findAll);

//Retrieve Inspections by 
router.get('/byId/:id', inspection.findById);

router.get('/byServiceResume/:serviceResume', inspection.findByServiceResume);

router.get('/byClient/:clientName', inspection.findByClient);

router.get('/byCar/:carPlate', inspection.findByCar);

//Update a Inspection with Id
router.put('/:inspectionId', inspection.update);

//Delete a Inspection with Id
router.delete('/:inspectionId', inspection.deleteInspection);

module.exports = router;