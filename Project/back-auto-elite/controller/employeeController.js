const db = require('../models/index');
const Employee = db.Employee;

exports.create = (req, res, next) => {
    Employee.create({
        cpf: req.body.cpf,
        observation: req.body.observation,
        bankAccount: req.body.bankAccount,
        cellPhone: req.body.cellPhone,
        telephone: req.body.telephone,
        name: req.body.name,
        cep: req.body.cep
    }).then(EmployeeData => {
        res.status(201).send(EmployeeData);
    });
};

exports.findById = (req, res, next) => {
    Employee.findOne({where: {
        id: req.params.id
    }}).then(Employee => res.send(Employee))
}

exports.findAll = (req, res, next) => {
    Employee.findAll({}).then(AllEmployee => res.send(AllEmployee))
}

exports.findByCPF = (req, res, next) => {
    Employee.findAll({
        where: {
            cpf: req.params.cpf
        }
    }).then(EmployeeData => {
        res.send(EmployeeData);
    })
}

exports.findByName = (req, res, next) => {
    Employee.findAll({
        where: {
            name: req.params.name
        }
    }).then(EmployeeData => {
        res.send(EmployeeData);
    })
}

exports.findByCellphone = (req, res, next) => {
    Employee.findAll({
        where: {
            cellPhone: req.params.cellPhone
        }
    }).then(EmployeeData => {
        res.send(EmployeeData);
    })
}

exports.findByTelephone = (req, res, next) => {
    Employee.findAll({
        where: {
            telephone: req.params.telephone
        }
    }).then(EmployeeData => {
        res.send(EmployeeData);
    })
}

exports.findByCEP = (req, res, next) => {
    Employee.findAll({
        where: {
            cep: req.params.cep
        }
    }).then(EmployeeData => {
        res.send(EmployeeData);
    })
}

exports.update = (req, res, next) => {
    
    const values = {};

    if(req.body.cpf)values.cpf = req.body.cpf;
    if(req.body.cellPhone)values.cellPhone = req.body.cellPhone;
    if(req.body.telephone)values.telephone = req.body.telephone;
    if(req.body.name)values.name = req.body.telephone;
    if(req.body.cep)values.cep = req.body.cep;
    if(req.body.observation)values.observation = req.body.observation;
    if(req.body.bankAccount)values.bankAccount = req.body.bankAccount;


    Employee.update(values,{
        where: {
            id: req.params.employeeId
        }
    }).then(EmployeeData => {
        res.send(EmployeeData);
    })
}
exports.deleteEmployee = (req, res, next) => {
    Employee.destroy({
        where: {
            id: req.params.employeeId
        }
    }).then(EmployeeData => {
        console.log(EmployeeData)
        if(EmployeeData == 1)res.status(200).send('Employee Deleted Successfully with ID = '+ req.params.employeeId);
        if(EmployeeData == 0)res.send('Could Not find the Employee')
    })
}
