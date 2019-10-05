'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items_Budget = sequelize.define('ItemsBudget', {
    budgetId: DataTypes.UUID,
    itemId: DataTypes.UUID
  }, {
    paranoid: true,
  });
  Items_Budget.associate = function(models) {
    Items_Budget.belongsTo(models.Item)
    Items_Budget.belongsTo(models.Budget)
  };
  return Items_Budget;
};