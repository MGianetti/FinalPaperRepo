const db = require('../models/index');
const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const privateKey = fs.readFileSync(path.resolve(__dirname, "../private.key"))
const saltRounds = 10;
const User = db.User;
const authentication = require('./authenticationController');


exports.create = (req, res, next) => {
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, passwordHash) {
        User.create({
            username: req.body.username,
            password: passwordHash
        }).then(UserData => {
            //var token = jwt.sign(req.body, privateKey, { algorithm: 'RS256'});
            res.status(201).send({data:UserData});
        });
      });
    
};

exports.findAll = (req, res, next) => {
    User.findAll({}).then(AllUser => res.send(AllUser))
}

exports.findByUsername = (req, res, next) => {
    User.findAll({
        where: {
            username: req.params.username
            }
    }).then(UserData => res.send(UserData))
}

exports.update = (req, res, next) => {
    
    const values = {};

    if(req.body.username)values.username = req.body.username;
    if(req.body.password)values.password = req.body.password;//needs to hash password


    User.update(values,{
        where: {
            id: req.params.userId
        }
    }).then(UserData => {
        res.send(UserData);
    })
}

exports.deleteUser = (req, res, next) => {
    User.destroy({
        where: {
            id: req.params.userId
        }
    }).then(UserData => {
        console.log(UserData)
        if(UserData == 1)res.status(200).send('User Deleted Successfully with ID = '+ req.params.userId);
        if(UserData == 0)res.send('Could Not find the User')
    })
}

//AUTHENTICATION

exports.login = (req, res, next) => {
    User.findAll({
        raw:true,
        where: {
            username: req.body.username
        }
    }).then(UserData => {
        console.log(UserData[0])
        authentication.login(UserData[0],req.body.password,res);
        // bcrypt.compare(req.body.password, UserData[0].password, function(err, response) {
        //     if(response){
        //     jwt.sign(req.body, privateKey, { algorithm: 'HS256'},(err, token) => {
        //         //console.log(token)
        //         res.cookie('authToken',token, { maxAge: 900000, httpOnly:true})
        //         res.status(201).send({data:UserData[0], AuthToken: token, authentication: true});
        //     })
        //     }else{
        //     res.status(403).send({authentication: false})
        //     }
        // });
    })
}


// res.send(AllUser)