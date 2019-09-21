const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const privateKey = fs.readFileSync(path.resolve(__dirname, "../private.key"))
var jwt = require('jsonwebtoken');


exports.login = (userData, password, res) => {
        bcrypt.compare(password, userData.password, function(err, response) {
            if(response){
            jwt.sign(userData, privateKey, { algorithm: 'HS256'},(err, token) => {
                res.cookie('authToken',token, { maxAge: 900000, httpOnly:true})
                res.status(200).send({data:userData, AuthToken: token, authentication: true});
            })
            }else{
            res.status(403).send({authentication: false})
            }
        });
}

exports.validadeCookie = (cookie, res, next) => {
    jwt.verify(cookie, privateKey, function(err, decoded) {
        if(err){
            res.sendStatus(403);
        }else{
            next();
        }
      });
}