const express = require('express');
const router = express.Router();

const { 
    getBillingsById, 
    getBillingsByStatus,
    getBillings 
} = require('./billing_model');

router.get('/', (req, res) => {
    const { id, status } = req.query;

    if(id) return res.send(getBillingsById(id));
    if(status) return res.send(getBillingsByStatus(status));        
    return res.send(getBillings());   
    
});

router.post('/', (req, res) => {
    return res.send('Post on billing succesfuly made')
});

module.exports = router;
