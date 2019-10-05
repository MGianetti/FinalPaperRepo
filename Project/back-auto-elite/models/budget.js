'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
    laborValue: DataTypes.STRING,
    is_Active: DataTypes.BOOLEAN,
    totalValue: DataTypes.DECIMAL
  }, {
    paranoid: true,
  });
  Budget.associate = function(models) {
    // associations can be defined here
    Budget.belongsToMany(models.Item, 
      { through: 'ItemsBudget' })
    Budget.belongsTo(models.Service, {
      foreignKey: "service_id",
      constraints: true
    })
  };
  return Budget;
};