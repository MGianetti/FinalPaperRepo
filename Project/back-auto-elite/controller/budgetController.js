const db = require('../models/index');
const itemsController = require('./itemController');
const Budget = db.Budget;
const ItemsBudget = db.ItemsBudget;

exports.create = (req, res, next) => {
    Budget.create({
        laborValue: req.body.laborValue,
        is_Active: true,
        totalValue: req.body.totalValue
    }).then(BudgetData => {
        res.status(201).send(BudgetData);
    });
};

exports.findAll = (req, res, next) => {
    Budget.findAll({
        include:[{
            model: db.Item
        }]
    })
    .then(AllBudget => res.send(AllBudget))
    .catch(err => res.status(500).send({"error": err}))

}

// exports.addItemToBudget = (req, res, next) => {
//     const itemId = req.body.itemId;
//     // res.send({id: itemId})
//     ItemsBudget.create({
//         itemId:itemId,
//         budgetId: req.params.id
//     }).then(ItemsBudgetData => {
//         res.status(201).send(ItemsBudgetData);
//     });
// }

exports.findById = (req, res, next) => {
    Budget.findOne({
        where: {
            id: req.params.id
        }
    }).then(BudgetData => {
        res.send(BudgetData);
    })
    .catch(err => res.status(500).send({"error": err}))

}



/*exports.findByResume = (req, res, next) => {
    Budget.findAll({
        where: {
            name: req.params.name
        }
    }).then(BudgetData => {
        res.send(BudgetData);
    })
    .catch(err => res.status(500).send({"error": err}))

}*/

/*exports.findByClient = (req, res, next) => {
    Budget.findAll({
        where: {
            cellPhone: req.params.cellPhone
        }
    }).then(BudgetData => {
        res.send(BudgetData);
    })
    .catch(err => res.status(500).send({"error": err}))

}*/

/*exports.findByCar = (req, res, next) => {
    Budget.findAll({
        where: {
            telephone: req.params.telephone
        }
    }).then(BudgetData => {
        res.send(BudgetData);
    })
}*/

exports.update = (req, res, next) => {
    
    const values = {};

    if(req.body.laborValue)values.laborValue = req.body.laborValue;
    if(req.body.is_Active)values.is_Active = req.body.is_Active;
    if(req.body.totalValue)values.totalValue = req.body.totalValue;
  
    Budget.update(values,{
        where: {
            id: req.params.budgetId
        }
    }).then(BudgetData => {
        res.send(BudgetData);
    })
    .catch(err => res.status(500).send({"error": err}))

}
exports.deleteBudget = (req, res, next) => {
    Budget.destroy({
        where: {
            id: req.params.budgetId
        }
    }).then(BudgetData => {
        console.log(BudgetData)
        if(BudgetData == 1)res.status(200).send('Budget Deleted Successfully with ID = '+ req.params.budgetId);
        if(BudgetData == 0)res.send('Could Not find the Budget')
    })
    .catch(err => res.status(500).send({"error": err}))

}
