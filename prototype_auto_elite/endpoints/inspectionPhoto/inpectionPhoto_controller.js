const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Get on Inspection Photo succesfuly accessed");
});

router.post('/', (req, res) => {
    return res.send("Post on Inspection Photo successfuly accessed");
});

module.exports = router;
