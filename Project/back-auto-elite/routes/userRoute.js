const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

router.post('/', user.create);

router.get('/', user.findAll);

router.get('/:username', user.findByUsername);

//Update a User with Id
router.put('/:userId', user.update);

//Delete a User with Id
router.delete('/:userId', user.deleteUser);

//AUTHENTICATION

router.post('/login', user.login);


module.exports = router;