const Sequelize = require('sequelize');
const db = require('../../config/config');

const User = db.define('users',{
    userName: {
        type: Sequelize.STRING,

    },
    userPassWord: {
        type: Sequelize.STRING,
    },
});

module.exports = User;