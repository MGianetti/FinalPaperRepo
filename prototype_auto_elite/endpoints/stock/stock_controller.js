const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on stock succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on stock succesfuly made')
});

module.exports = router;
