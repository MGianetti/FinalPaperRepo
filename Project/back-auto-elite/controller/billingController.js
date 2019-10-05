const db = require('../models/index');
const Billing = db.Billing;
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

exports.create = (req, res) => {
    Billing.create({
        deadline : req.body.deadline,
        status: req.body.status,
        service_id: req.body.service_id
    }).then(BillingData => {
        res.status(201).send(BillingData);
    });
};

exports.findPendents = (req, res) => {
    Billing.findAll({
        where: {
            status: "Pendent"
        },
        include:[{
            model: db.Service,
        }]
    }).then(AllBilling => {
        res.status(200).send(AllBilling);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findCloseds = (req, res) => {
    Billing.findAll({
        where: {
            status: "Closed"
        },
        include:[{
            model: db.Service,
        }]
    }).then(AllBilling => {
        res.status(200).send(AllBilling);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findpendentByClient = (req, res) => {
    Billing.findAll({
    where: {
        status: "Pendent"
    },
    include:[{
        model: db.Service,
        include:[{
            model: db.Car,
                include:[{
                    model: db.Client,
                    where: {
                        name :{[Op.iLike]: '%' + req.params.name + '%'},
                    }
                }]  
        }]  
    }]
    }).then(Billing => {
        const BillingClientData = Billing.filter((data)=>{
            return data.Service.Car != null
        })
            res.status(200).send(BillingClientData);
        }).catch(err => res.status(500).send({"error": err}))
};

exports.findpendentByCarPlate = (req, res) => {
    Billing.findAll({
    where: {
        status: "Pendent"
    },
    include:[{
        model: db.Service,
        include:[{
            model: db.Car,
            where: {
                plate : req.params.plate
            }
        }]
    }]
    }).then(BillingData => {
        const BillingCarData = BillingData.filter((data)=>{
            return data.Service != null
        })
        res.status(200).send(BillingCarData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findpendentByService= (req, res) => {
    Billing.findAll({
    where: {
        status: "Pendent"
    },
    where: {
        service_id: req.params.serviceid
    },
    include:[{
        model: db.Service
    }]
    }).then(BillingData => {
        res.status(200).send(BillingData);
    }).catch(err => res.status(500).send({"error": err}))
}

exports.findclosedByClient = (req, res) => {
    Billing.findAll({
    where: {
        status: "Closed"
    },
    include:[{
        model: db.Service,
        include:[{
            model: db.Car,
                include:[{
                    model: db.Client,
                    where: {
                        name :{[Op.iLike]: '%' + req.params.name + '%'},
                    }
                }]  
        }]  
    }]
    }).then(Billing => {
        const BillingClientData = Billing.filter((data)=>{
            return data.Service.Car != null
        })
        res.status(200).send(BillingClientData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findclosedByCarPlate = (req, res) => {
    Billing.findAll({
    where: {
        status: "Closed"
    },
    include:[{
        model: db.Service,
        include:[{
            model: db.Car,
            where: {
                plate : req.params.plate
            }
        }]
    }]
    }).then(BillingData => {
        const BillingCarData = BillingData.filter((data)=>{
            return data.Service != null
        })
        res.status(200).send(BillingCarData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findclosedByService= (req, res) => {
    Billing.findAll({
    where: {
        status: "Closed"
    },
    where: {
        service_id: req.params.serviceid
    },
    include:[{
        model: db.Service
    }]
    }).then(BillingData => {
        res.status(200).send(BillingData);
    }).catch(err => res.status(500).send({"error": err}))
};


exports.update = (req, res) => {
    
    const values = {};

    if(req.body.deadline)values.deadline = req.body.deadline;
    if(req.body.status)values.status = req.body.status;
    if(req.body.service_id)values.service_id = req.body.service_id;

    Billing.update(values,{
        where: {
            id: req.params.billingId
        }
    }).then(BillingData => {
        res.status(200).send(BillingData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.deleteBilling = (req, res) => {
    Billing.destroy({
        where: {
            id: req.params.billingId
        }
    }).then(BillingData => {
        if(BillingData == 1)res.status(200).send('Billing Deleted Successfully with ID = '+ req.params.BillingId);
        if(BillingData == 0)res.send('Could Not find the Billing')
    })
}
