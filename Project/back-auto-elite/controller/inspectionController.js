const db = require('../models/index');
const Inspection = db.Inspection;
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

exports.create = (req, res) => {
    Inspection.create({
        fuelLevel_reserveTank: req.body.fuelLevel_reserveTank,
        fuelLevel_quarterTank: req.body.fuelLevel_quarterTank,
        fuelLevel_halfTank: req.body.fuelLevel_halfTank,
        fuelLevel_threeQuarterTank: req.body.fuelLevel_threeQuarterTank,
        fuelLevel_fullTank: req.body.fuelLevel_fullTank,
        warningLights_fuelInjection: req.body.warningLights_fuelInjection,
        warningLights_oilPressure: req.body.warningLights_oilPressure,
        warningLights_battery: req.body.warningLights_battery,
        warningLights_brake: req.body.warningLights_brake,
        warningLights_temperature: req.body.warningLights_temperature,
        warningLights_airBag: req.body.warningLights_airBag,
        warningLights_ABS: req.body. warningLights_ABS,
        warningLights_EPC: req.body.warningLights_EPC,
        warningLights_EPS: req.body.warningLights_EPS,
        warningLights_ESC: req.body.warningLights_ESC,
        warningLights_TPMS: req.body.warningLights_TPMS,
        scratches_hood: req.body.scratches_hood,
        scratches_frontBumper: req.body.scratches_frontBumper,
        scratches_rearBumper: req.body.scratches_rearBumper,
        scratches_driverDoor: req.body.scratches_driverDoor,
        scratches_passengerDoor: req.body.scratches_passengerDoor,
        scratches_rightRearDoor: req.body. scratches_rightRearDoor,
        scratches_leftRearDoor: req.body.scratches_leftRearDoor,
        scratches_trunk: req.body.scratches_trunk,
        specialTireIron: req.body.specialTireIron,
        service_id: req.body.service_id
    }).then(InspectionData => {
        res.status(201).send(InspectionData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findAll = (req, res) => {
    Inspection.findAll({
        include:[{
            model: db.Service
        }]
    }).then(AllInspection => {
        res.status(200).send(AllInspection);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findById = (req, res) => {
    Inspection.findAll({
        where: {
            id: req.params.id
        },
        include:[{
            model: db.Service
        }]
    }).then(InspectionData => {
        res.status(200).send(InspectionData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findByServiceResume = (req, res) => {
    Inspection.findAll({
    include:[{
        model: db.Service,
        where: {
            summary :{[Op.iLike]: '%' + req.params.serviceResume + '%'},
        }
    }]   
    }).then(InspectionData => {
        const InspectionServiceData = InspectionData.filter((data)=>{
            return data!= null
        })
            res.status(200).send(InspectionServiceData);
        }).catch(err => res.status(500).send({"error": err}))
};

exports.findByClient = (req, res) => {
    Inspection.findAll({
        include:[{
            model: db.Service,
            include:[{
                model: db.Car,
                    include:[{
                        model: db.Client,
                        where: {
                            name :{[Op.iLike]: '%' + req.params.clientName + '%'},
                        }
                    }]  
            }]  
        }]
    }).then(InspectionData => {
        const InspectionClientData = InspectionData.filter((data)=>{
            return data.Service.Car != null
        })
        res.status(200).send(InspectionClientData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.findByCar= (req, res) => {
    Inspection.findAll({
        include:[{
            model: db.Service,
            include:[{
                model: db.Car,
                    where: {
                        plate: req.params.carPlate
                    }
            }]  
        }]  
    }).then(InspectionData => {
        res.status(200).send(InspectionData);
    }).catch(err => res.status(500).send({"error": err}))
}

exports.update = (req, res) => {
    
    const values = {};

    if(req.body.fuelLevel_reserveTank)values.fuelLevel_reserveTanke = req.body.fuelLevel_reserveTank;
    if(req.body.fuelLevel_quarterTank)values.fuelLevel_quarterTank = req.body.fuelLevel_quarterTank;
    if(req.body.fuelLevel_halfTank)values.fuelLevel_halfTank = req.body.fuelLevel_halfTank;
    if(req.body.fuelLevel_threeQuarterTank)values.fuelLevel_threeQuarterTank = req.body.fuelLevel_threeQuarterTank;
    if(req.body.fuelLevel_fullTank)values.fuelLevel_fullTank = req.body.fuelLevel_fullTank;
    if(req.body.warningLights_fuelInjection)values.warningLights_fuelInjection = req.body.warningLights_fuelInjection;
    if(req.body.warningLights_oilPressure)values.warningLights_oilPressure= req.body.warningLights_oilPressure;
    if(req.body.warningLights_battery)values.warningLights_battery= req.body.warningLights_battery;
    if(req.body.warningLights_brake)values.warningLights_brake= req.body.warningLights_brake;
    if(req.body.warningLights_temperature)values.warningLights_temperature= req.body.warningLights_temperature;
    if(req.body.warningLights_airBag)values.warningLights_airBag= req.body.warningLights_airBag;
    if(req.body.warningLights_ABS)values.warningLights_ABS= req.body.warningLights_ABS;
    if(req.body.warningLights_EPC)values.warningLights_EPC= req.body.warningLights_EPC;
    if(req.body.warningLights_EPS)values.warningLights_EPSe= req.body.warningLights_EPS;
    if(req.body.warningLights_ESC)values.warningLights_ESC= req.body.warningLights_ESC;
    if(req.body.warningLights_TPMS)values.warningLights_TPMS= req.body.warningLights_TPMS;
    if(req.body.scratches_hood)values.scratches_hood= req.body.scratches_hood;
    if(req.body.scratches_frontBumper)values.scratches_frontBumper= req.body.scratches_frontBumper;
    if(req.body.scratches_rearBumper)values.scratches_rearBumper= req.body.scratches_rearBumper;
    if(req.body.scratches_driverDoor)values.scratches_driverDoor= req.body.scratches_driverDoor;
    if(req.body.scratches_passengerDoor)values.scratches_passengerDoor= req.body.scratches_passengerDoor;
    if(req.body.scratches_rightRearDoor)values.scratches_rightRearDoor= req.body.scratches_rightRearDoor;
    if(req.body.scratches_leftRearDoor)values.scratches_leftRearDoor= req.body.scratches_leftRearDoor;
    if(req.body.scratches_trunk)values.scratches_trunk= req.body.scratches_trunk;
    if(req.body.specialTireIron)values.specialTireIron= req.body.specialTireIron;
    if(req.body.service_id)values.service_id= req.body.service_id;

    Inspection.update(values,{
        where: {
            id: req.params.inspectionId
        }
    }).then(InspectionData => {
        res.status(200).send(InspectionData);
    }).catch(err => res.status(500).send({"error": err}))
};

exports.deleteInspection = (req, res) => {
    Billing.destroy({
        where: {
            id: req.params.inspectionId
        }
    }).then(InspectionData => {
        if(InspectionData == 1)res.status(200).send('Inspection Deleted Successfully with ID = '+ req.params.inspectionId);
        if(InpectionData == 0)res.send('Could Not find the Inspection')
    })
}
