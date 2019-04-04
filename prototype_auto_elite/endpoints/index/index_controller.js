const express = require('express');
const router = express.Router();
const User = require('../index/index_models');

router.post('/', (req, res) => {
    User.create({userName: 'gia', userPassWord: 'senha'})
        .then((result) => {
            return res.send(result);
        }).catch((err) => {
            return res.send( {error: err} );
        });
});

router.get('/', (req, res) => {
    return res.send("Get on index");
});

module.exports = router;