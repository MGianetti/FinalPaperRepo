const express = require('express');
const router = express.Router();

const budget = require('../controller/budgetController');

//Create a new Car
router.post('/', budget.create);

//Find all Budgets
router.get('/', budget.findAll);

//Retrieve Budgets by 
router.get('/byId/:id', budget.findById);

//router.get('/byResume/:resume', budget.findByResume);

//router.get('/byClient/:client', budget.findByClient);

//router.get('/byPlate/:plate', budget.findByCar);

// router.post('/addItemToBudget/:id', budget.addItemToBudget);

//Update a budget with Id
router.put('/:budgetId', budget.update);

//Delete a budget with Id
router.delete('/:budgetId', budget.deleteBudget);

module.exports = router;