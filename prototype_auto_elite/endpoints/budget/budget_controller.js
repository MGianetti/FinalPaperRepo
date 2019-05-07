const express = require('express');
const router = express.Router();

const { 
    getBudgetById, 
    getBudgetByCost, 
    getBudgets
} = require('./budget_model');

router.get('/', (req, res) => {
    const { id, cost } = req.query;  

    if(id) return res.send(getBudgetById(id));    
    if(cost) return res.send(getBudgetByCost(cost));
    return res.send(getBudgets());

});

router.post('/', (req, res) => {
    return res.send('Post on budget succesfuly made')
});

module.exports = router;
