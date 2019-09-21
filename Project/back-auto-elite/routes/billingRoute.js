const express = require('express');
const router = express.Router();

const billing = require('../controller/billingController');

//Create a new billing
router.post('/', billing.create);

//Find all pendent billings
router.get('/pendents', billing.findPendents);

//Find all closed billings
router.get('/closed', billing.findClosed);

//Retrieve pendent billings by 
router.get('/pendents/byClientName/:name', billing.findpendentByClient);

router.get('/pendents/byCarPlate/:plate', billing.findpendentByCarPlate);

router.get('/pendents/byService/:serviceid', billing.findpendentByService);

router.get('/pendents/byBudget/:budgetid', billing.findpendentByBudget);

router.get('/pendents/byValue/:value', billing.findpendentByValue);


//Retrieve closed billings by 
router.get('/closeds/byClientName/:name', billing.findclosedByClient);

router.get('/closeds/byCarPlate/:plate', billing.findclosedByCarPlate);

router.get('/closeds/byService/:serviceid', billing.findclosedByService);

router.get('/closeds/byBudget/:budgetid', billing.findpendentByBudget);

router.get('/closeds/byValue/:value', billing.findpendentByValue);


//Update a billing with Id
router.put('/:billingId', billing.update);

//Delete a billing with Id
router.delete('/:billingId', billing.delete);

module.exports = router;