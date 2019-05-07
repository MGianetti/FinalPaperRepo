const express = require('express');
const router = express.Router();

const {
    getServiceById,
    getServiceByStatus,
    getServiceByType,
    getServiceByCar,
    getServiceByEmployee,
    getServiceByBilling,
    getServiceByInspection,
    getServices
} = require('./services_model');

router.get('/', (req, res) => {
    const { id, status, type, car, employee, billing, inspection } = req.query;

    if(id) return res.send(getServiceById(id));
    if(status) return res.send(getServiceByStatus(status));
    if(type) return res.send(getServiceByType(type));
    if(car) return res.send(getServiceByCar(car));
    if(employee) return res.send(getServiceByEmployee(employee));
    if(billing) return res.send(getServiceByBilling(billing));
    if(inspection) return res.send(getServiceByInspection(inspection));
    return res.send(getServices());
});

router.post('/', (req, res) => {
    return res.send('Post on services succesfuly made')
});

module.exports = router;
