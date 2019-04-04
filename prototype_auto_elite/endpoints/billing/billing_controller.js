const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on billing succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on billing succesfuly made')
});

module.exports = router;
