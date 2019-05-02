const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on inspection succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on inspection succesfuly made')
});

module.exports = router;
