const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on employees succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on employees succesfuly made')
});

module.exports = router;
