const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on cars succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on cars succesfuly made')
});

module.exports = router;
