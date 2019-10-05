'use strict';
module.exports = (sequelize, DataTypes) => {
  const Billing = sequelize.define('Billing', {
    deadline: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Billing.associate = function(models) {
    // associations can be defined here
    
  };
  return Billing;
};