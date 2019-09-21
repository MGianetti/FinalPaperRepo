'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    idCode: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Budget, 
      { through: 'Items_Budget', 
        foreignKey: 'itemId',
        otherKey: 'budgetId'
      })
  };
  return Item;
};