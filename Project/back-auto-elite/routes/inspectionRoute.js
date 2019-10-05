const express = require('express');
const router = express.Router();

const Inspection = require('../controller/inspectionController');

//Create a new Inspection
router.post('/Inspections', inspection.create);

//Find all Inspections
router.get('/Inspections', inspection.findAll);

//Retrieve Inspections by 
router.get('/Inspections/byId/:id', inspection.findById);

router.get('/Inspections/byResume/:resume', inspection.findByResume);

router.get('/Inspections/byClientId/:clientid', inspection.findByClient);

router.get('/Inspections/byCar/:plate', inspection.findByCar);

//Update a Inspection with Id
router.put('/Inspections/:InspectionId', inspection.update);

//Delete a Inspection with Id
router.delete('/Inspections/:InspectionId', inspection.delete);

module.exports = router;