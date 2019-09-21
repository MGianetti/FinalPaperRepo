const db = require('../models/index');
const Client = db.Client;

exports.create = (req, res, next) => {
    Client.create({
        cpf: req.body.cpf,
        cellPhone: req.body.cellPhone,
        telephone: req.body.telephone,
        name: req.body.name,
        cep: req.body.cep
    }).then(clientData => {
        res.status(201).send(clientData);
    });
};

exports.findAll = (req, res, next) => {
    Client.findAll({
        include:[{
            model: db.Car
        }]
    }).then(AllClient => res.send(AllClient))
}

exports.findByPlate = (req, res, next) => {
    // Client.findAll
    
}

exports.findByCPF = (req, res, next) => {
    Client.findAll({
        where: {
            cpf: req.params.cpf
        }
    }).then(ClientData => {
        res.send(ClientData);
    })
}

exports.findByName = (req, res, next) => {
    Client.findAll({
        where: {
            name: req.params.name
        }
    }).then(ClientData => {
        res.send(ClientData);
    })
}

exports.findByCellphone = (req, res, next) => {
    Client.findAll({
        where: {
            cellPhone: req.params.cellPhone
        }
    }).then(ClientData => {
        res.send(ClientData);
    })
}
exports.findByTelephone = (req, res, next) => {
    Client.findAll({
        where: {
            telephone: req.params.telephone
        }
    }).then(ClientData => {
        res.send(ClientData);
    })
}
exports.findByCEP = (req, res, next) => {
    Client.findAll({
        where: {
            cep: req.params.cep
        }
    }).then(ClientData => {
        res.send(ClientData);
    })
}
exports.update = (req, res, next) => {
    
    const values = {};

    if(req.body.cpf)values.cpf = req.body.cpf;
    if(req.body.cellPhone)values.cellPhone = req.body.cellPhone;
    if(req.body.telephone)values.telephone = req.body.telephone;
    if(req.body.name)values.name = req.body.telephone;
    if(req.body.cep)values.cep = req.body.cep;


    Client.update(values,{
        where: {
            id: req.params.clientId
        }
    }).then(clientData => {
        res.send(clientData);
    })
}
exports.deleteClient = (req, res, next) => {
    Client.destroy({
        where: {
            id: req.params.clientId
        }
    }).then(clientData => {
        console.log(clientData)
        if(clientData == 1)res.status(200).send('Client Deleted Successfully with ID = '+ req.params.clientId);
        if(clientData == 0)res.send('Could Not find the Client')
    })
}
