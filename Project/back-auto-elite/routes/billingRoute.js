const express = require('express');
const router = express.Router();

const billing = require('../controller/billingController');

//Create a new billing
router.post('/', billing.create);

//Find all pendent billings
router.get('/pendents', billing.findPendents);

//Find all closed billings
router.get('/closed', billing.findCloseds);

//Retrieve pendent billings by 
router.get('/pendents/byClientName/:name', billing.findpendentByClient);

router.get('/pendents/byCarPlate/:plate', billing.findpendentByCarPlate);

router.get('/pendents/byService/:serviceid', billing.findpendentByService);


//Retrieve closed billings by 
router.get('/closeds/byClientName/:name', billing.findclosedByClient);

router.get('/closeds/byCarPlate/:plate', billing.findclosedByCarPlate);

router.get('/closeds/byService/:serviceid', billing.findclosedByService);


//Update a billing with Id
router.put('/:billingId', billing.update);

//Delete a billing with Id
router.delete('/:billingId', billing.deleteBilling);

module.exports = router;