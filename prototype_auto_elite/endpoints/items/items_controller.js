const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Get on Items succesfuly accessed");
});

router.post('/', (req, res) => {
    return res.send("Post on Items Photo successfuly accessed");
});

module.exports = router;
