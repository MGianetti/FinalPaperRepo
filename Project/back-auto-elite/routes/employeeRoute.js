const express = require('express');
const router = express.Router();

const employee = require('../controller/employeeController');

//Create a new employee
router.post('/', employee.create);

//Find all employees
router.get('/', employee.findAll);

//Retrieve employees by 
router.get('/byId/:id', employee.findById);

//Retrieve employees by 
router.get('/byName/:name', employee.findByName);

//Retrieve employees by 
router.get('/bycpf/:cpf', employee.findByCPF);

//Retrieve employees by 
router.get('/byCellphone/:cellPhone', employee.findByCellphone);

//Retrieve employees by 
router.get('/bytelephone/:telephone', employee.findByTelephone);

//Retrieve employees by 
router.get('/bycep/:cep', employee.findByCEP);

//Update a employee with Id
router.put('/:employeeId', employee.update);

//Delete a employee with Id
router.delete('/:employeeId', employee.deleteEmployee);

module.exports = router;