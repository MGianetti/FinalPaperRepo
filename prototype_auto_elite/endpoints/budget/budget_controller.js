const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on budget succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on budget succesfuly made')
});

module.exports = router;
