'use strict';
module.exports = (sequelize, DataTypes) => {
  const Items_Budget = sequelize.define('Items_Budget', {
    budgetId: DataTypes.UUID,
    itemId: DataTypes.UUID
  }, {});
  Items_Budget.associate = function(models) {
    // associations can be defined here
  };
  return Items_Budget;
};