const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    return res.send("Post on index");
});

router.get('/', (req, res) => {
    return res.send("Get on index");
});

module.exports = router;