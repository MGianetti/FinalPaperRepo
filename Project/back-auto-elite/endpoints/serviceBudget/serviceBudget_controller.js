const express = require('express');
const router = express.Router();

const {
    getServicesBudgets,
    getServiceBudgetById,
    getServiceBudgetByBudgetId
} = require('./serviceBudget_model');

router.get('/', (req, res) => {
    const { id, budget } = req.query;

    if(id) return res.send(getServiceBudgetById(id));
    if(budget) return res.send(getServiceBudgetByBudgetId(budget));
    return res.send(getServicesBudgets());

});

router.post('/', (req, res) => {
    res.send('Post on Service Budget succefuly made');
});

module.exports = router;