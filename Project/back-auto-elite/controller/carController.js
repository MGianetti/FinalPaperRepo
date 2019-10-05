const db = require('../models/index');
const Car = db.Car;
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

exports.create = (req, res) => {
    Car.create({
        plate: req.body.plate,
        is_Mercosul: req.body.is_Mercosul,
        model: req.body.model,
        year: req.body.year,
        client_id: req.body.client_id
    }).then (car => {
        res.status(201).send(car);
    })
    .catch(err => res.status(500).send({"error": err}))

};

exports.findAll = (req, res) => {
    Car.findAll({
        include:[{
            model:db.Client
        }]
    }).then(Allcars => {
        res.status(200).send(Allcars);
    })
    .catch(err => res.status(500).send({"error": err}))

};

exports.findByPlate = (req, res) => {
    Car.findAll({
        where:{
           plate: req.params.plate
        },
        include:[{
            model:db.Client
        }]
    }).then(carData => {
        res.status(200).send(carData);
    })
    .catch(err => res.status(500).send({"error": err}))
};

exports.findByClient = (req, res) => {
    Car.findAll({
        include:[{
            model: db.Client,
            where:{
                name: {[Op.iLike]: '%' + req.params.clientName + '%'}
            }
        }]

    }).then(ClientData => {
        const CarClientData = ClientData.filter((data)=> {
            return data != null
        })
        res.status(200).send(CarClientData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findByModel = (req, res) => {
   Car.findAll({
        where:{
           model: req.params.model
        },
        include:[{
            model:db.Client
        }]
    }).then(car => {
        res.send(car);
    })
    .catch(err => res.status(500).send({"error": err}))

};

exports.findByYear = (req, res) => {
    Car.findAll({
        where:{
           year: req.params.year
        },
        include:[{
            model:db.Client
        }]
    }).then(car => {
        res.send(car);
    })
    .catch(err => res.status(500).send({"error": err}))

};

exports.update = (req, res) => {
    const values = {};

    if(req.body.client_id)values.client_id = req.body.client_id;
    if(req.body.plate)values.plate = req.body.plate;
    if(req.body.model)values.model = req.body.model;
    if(req.body.year)values.year = req.body.year;

    Car.update(values,{
        where: {
            id: req.params.carId
        }
    }).then(car=> {
        res.send(car);
    })
    .catch(err => res.status(500).send({"error": err}))

};


exports.deleteCar= (req, res) => {
    Car.destroy({ 
        where: { 
            id: req.params.carId
        }
    }).then(car => {
        console.log(car)
        if(car == 1)res.status(200).send('Car Deleted Successfully with ID = '+ req.params.carId);
        if(car == 0)res.send('Could Not find the Car')
    })
    .catch(err => res.status(500).send({"error": err}))

}
