const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('Get on services succesfuly accessed');
});

router.post('/', (req, res) => {
    return res.send('Post on services succesfuly made')
});

module.exports = router;
