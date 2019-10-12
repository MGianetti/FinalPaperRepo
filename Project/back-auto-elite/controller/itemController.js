const db = require('../models/index');
const Item = db.Item;

exports.create = (req, res, next) => {
    Item.create({
        idCode: req.body.idCode,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
    }).then(ItemData => {
        res.status(201).send(ItemData);
    });
};
exports.findAll = (req, res, next) => {
    Item.findAll({}).then(AllItem => res.send(AllItem))
}
exports.findByIdCode = (req, res, next) => {
    Item.findAll({
        where: {
            id: req.params.idCode
        }
    }).then(ItemData => {
        res.send(ItemData);
    })
}
exports.findById = (req, res, next) => {
    Item.findAll({
        where: {
            id: req.params.id
        }
    }).then(ItemData => {
        res.send(ItemData);
    })
}
exports.getById = (req, res, next) => {
    Item.findAll({
        where: {
            id: req.params.id
        }
    }).then(ItemData => {
        return ItemData
    })
}
exports.update = (req, res, next) => {
    const values = {};

    if(req.body.idCode)values.idCode = req.body.idCode;
    if(req.body.description)values.description = req.body.description;
    if(req.body.quantity)values.quantity = req.body.quantity;
    if(req.body.price)values.price = req.body.price;

    Item.update(values,{
        where: {
            id: req.params.itemId
        }
    }).then(ItemData => {
        res.send(ItemData);
    })
}
exports.deleteItem = (req, res, next) => {
    Item.destroy({
        where: {
            id: req.params.itemId
        }
    }).then(ItemData => {
        console.log(ItemData)
        if(ItemData == 1)res.status(200).send(
        'Item Deleted Successfully with ID = '
        + req.params.itemId);
        if(ItemData == 0)res.send('Could Not find the Item')
    })
}