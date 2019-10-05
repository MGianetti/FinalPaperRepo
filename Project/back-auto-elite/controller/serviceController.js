const db = require('../models/index');
const Sequelize = require('sequelize');
const Service = db.Service;
const Op = Sequelize.Op;

exports.create = (req, res) => {
    Service.create({
        obligatoryInspection : req.body.obligatoryInspection,
        observations: req.body.observations,
        summary: req.body.summary,
        status: req.body.status,
        type: req.body.type,
        car_id: req.body.car_id,
        employee_id: req.body.employee_id,
        totalValue: req.body.totalValue
    }).then(ServiceData => {
        res.status(201).send(ServiceData);
    });
};

exports.findAll = (req, res) => {
    Service.findAll({
        include:[{
            model: db.Car,
            attributes:['plate','model']
        },
        {
            model: db.Employee,
            attributes:['name']
        }
        ]
    }).then(AllService => res.send(AllService))
}

exports.findById = (req, res) => {
    Service.findOne({where: {
        id: req.params.id
    },
    include:[{
        model: db.Car,
        attributes:['plate','model']
    },
    {
        model: db.Employee,
        attributes:['name']
    }
    ]}).then(Service => res.send(Service))
}

exports.findBySummary = (req, res) => {
    Service.findAll({
        where: {
            summary: {
                [Op.iLike]: '%' + req.params.summary + '%'
            }
        },
        include:[{
            model: db.Car,
            attributes:['plate','model']
        },
        {
            model: db.Employee,
            attributes:['name']
        }
        ]
    }).then(ServiceData => {
        res.send(ServiceData);
    })
}

exports.findByEmployee= (req, res) => {
    Service.findAll({
        where: {
            employee_id: req.params.employeeId
        },
        include:[{
            model: db.Car,
            attributes:['plate','model']
        },
        {
            model: db.Employee,
            attributes:['name']
        }
        ]
    }).then(ServiceData => {
        res.send(ServiceData);
    })
}

exports.findByCar= (req, res) => {
    Service.findAll({
        where: {
            car_id: req.params.carId
        },
        include:[{
            model: db.Car,
            attributes:['plate','model']
        },
        {
            model: db.Employee,
            attributes:['name']
        }
        ]
    }).then(ServiceData => {
        res.send(ServiceData);
    })
}

exports.update = (req, res) => {
    
    const values = {};

    if(req.body.obligatoryInspection)values.obligatoryInspection = req.body.obligatoryInspection;
    if(req.body.observations)values.observations = req.body.observations;
    if(req.body.summary)values.summary = req.body.summary;
    if(req.body.status)values.status = req.body.status;
    if(req.body.types)values.types = req.body.types;
    if(req.body.car_id)values.car_id = req.body.car_id;
    if(req.body.employee_id)values.employee_id = req.body.employee_id;
    if(req.body.totalValue)values.totalValue = req.body.totalValue;

    Service.update(values,{
        where: {
            id: req.params.serviceId
        }
    }).then(ServiceData => {
        res.send(ServiceData);
    })
}

exports.deleteService = (req, res) => {
    Service.destroy({
        where: {
            id: req.params.serviceId
        }
    }).then(ServiceData => {
        console.log(ServiceData)
        if(ServiceData == 1)res.status(200).send('Service Deleted Successfully with ID = '+ req.params.serviceId);
        if(ServiceData == 0)res.send('Could Not find the Service')
    })
}
