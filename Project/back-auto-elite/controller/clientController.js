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
    })
    .catch(err => res.status(500).send({"error": err}))

};

exports.findAll = (req, res, next) => {
    Client.findAll({
        include:[{
            model: db.Car
        }]
    }).then(AllClient => res.status(200).send(AllClient))
    .catch(err => res.status(500).send({"error": err}))

}

exports.findByPlate = (req, res, next) => {
    Client.findAll({
        include:[{
            model: db.Car,
            where:{
                plate: req.params.plate
            }
        }]
    }).then(ClientData => {
        const CarClientData = ClientData.filter((data)=> {
            return data != null
        })
        res.status(200).send(CarClientData);
    }).catch(err => res.status(500).send({"error": err}))   
}

exports.findByCPF = (req, res, next) => {
    Client.findAll({
        where: {
            cpf: req.params.cpf
        },
        include:[{
            model: db.Car
        }]
    }).then(ClientData => {
        res.status(200).send(ClientData);
    })
    .catch(err => res.status(500).send({"error": err}))

}

exports.findByName = (req, res, next) => {
    Client.findAll({
        where: {
            name: req.params.name
        },
        include:[{
            model: db.Car
        }]
    }).then(ClientData => {
        res.status(200).send(ClientData);
    }).catch(err => res.status(500).send({"error": err}))
}

exports.findByCellphone = (req, res, next) => {
    Client.findAll({
        where: {
            cellPhone: req.params.cellPhone
        },
        include:[{
            model: db.Car
        }]
    }).then(ClientData => {
        res.status(200).send(ClientData);
    })
    .catch(err => res.status(500).send({"error": err}))
}

exports.findByTelephone = (req, res, next) => {
    Client.findAll({
        where: {
            telephone: req.params.telephone
        },
        include:[{
            model: db.Car
        }]
    }).then(ClientData => {
        res.status(200).send(ClientData);
    })
    .catch(err => res.status(500).send({"error": err}))

}
exports.findByCEP = (req, res, next) => {
    Client.findAll({
        where: {
            cep: req.params.cep
        },
        include:[{
            model: db.Car
        }]
    }).then(ClientData => {
        res.status(200).send(ClientData);
    })
    .catch(err => res.status(500).send({"error": err}))

}
exports.update = (req, res, next) => {
    
    const values = {};

    if(req.body.cpf)values.cpf = req.body.cpf;
    if(req.body.cellPhone)values.cellPhone = req.body.cellPhone;
    if(req.body.telephone)values.telephone = req.body.telephone;
    if(req.body.name)values.name = req.body.name;
    if(req.body.cep)values.cep = req.body.cep;


    Client.update(values,{
        where: {
            id: req.params.client_id
        }
    }).then(clientData => {
        res.send(clientData);
    })
    .catch(err => res.status(500).send({"error": err}))

}
exports.deleteClient = (req, res, next) => {
    Client.destroy({
        where: {
            id: req.params.client_id
        }
    }).then(clientData => {
        console.log(clientData)
        if(clientData == 1)res.status(200).send('Client Deleted Successfully with ID = '+ req.params.client_id);
        if(clientData == 0)res.send('Could Not find the Client')
    })
    .catch(err => res.status(500).send({"error": err}))

}
