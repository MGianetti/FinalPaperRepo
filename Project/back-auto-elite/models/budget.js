'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
    labor: DataTypes.STRING,
    is_Active: DataTypes.BOOLEAN
  }, {});
  Budget.associate = function(models) {
    // associations can be defined here
    Budget.belongsToMany(models.Item, 
      { through: 'Items_Budget', 
        foreignKey: 'budgetId', 
        otherKey: 'itemId'})
    Budget.belongsTo(models.Service, {
      foreignKey: "service_id",
      constraints: true
    })
  };
  return Budget;
};