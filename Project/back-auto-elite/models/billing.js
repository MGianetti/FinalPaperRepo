'use strict';
module.exports = (sequelize, DataTypes) => {
  const Billing = sequelize.define('Billing', {
    deadline: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    paranoid: true,
  });
  Billing.associate = function(models) {
    Billing.belongsTo(models.Service,{
      foreignKey: "service_id"
    })
  };
  return Billing;
};