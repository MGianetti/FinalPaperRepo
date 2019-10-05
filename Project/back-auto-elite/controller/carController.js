const db = require('../models/index');
const Car = db.Car;

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
};

exports.findAll = (req, res) => {
    Car.findAll({
        include:[{
            model:db.Client
        }]
    }).then(Allcars => {
        res.send(Allcars);
    })
};

exports.findByPlate = (req, res) => {
    Car.findAll({
        where:{
           plate: req.params.plate
        }
    }).then(car => {
        res.send(car);
    })
};

exports.findByClient = (req, res) => {}
 //Ver como fazer 

exports.findByModel = (req, res) => {
   Car.findAll({
        where:{
           model: req.params.model
        }
    }).then(car => {
        res.send(car);
    })
};

exports.findByYear = (req, res) => {
    Car.findAll({
        where:{
           year: req.params.year
        }
    }).then(car => {
        res.send(car);
    })
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
}
