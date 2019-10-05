'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    idCode: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    paranoid: true,
  });
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Budget, 
      { through: 'ItemsBudget' })
  };
  return Item;
};