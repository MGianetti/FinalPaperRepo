const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on home succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on home succesfuly made')
});

module.exports = router;
