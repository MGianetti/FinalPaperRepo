const express = require('express');
const router = express.Router();

const { 
    getEmployees,
    getEmployeeByCpf,
    getEmployeeById,
    getEmployeeByName    
} = require('./employees_model');

router.get('/', (req, res) => {    
    const { id, cpf, name } = req.query;

    if(id) return res.send(getEmployeeById(id));
    if(cpf) return res.send(getEmployeeByCpf(cpf));
    if(name) return res.send(getEmployeeByName(name));    
    return res.send(getEmployees());
    
});

router.post('/', (req, res) => {
    return res.send('Post on employees succesfuly made')
});

module.exports = router;
