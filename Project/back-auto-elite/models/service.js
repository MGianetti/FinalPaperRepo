'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    obligatoryInspection: DataTypes.STRING,
    observations: DataTypes.STRING,
    summary: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Service.associate = function(models) {
    Service.belongsTo(models.Car, {
      foreignKey: 'car_id',
      constraints: true
    })
    Service.hasOne(models.Inspection, {
      foreignKey: 'service_id',
      constraints: true
    })
    Service.belongsTo(models.Employee, {
      foreignKey: "employee_id",
      constraints: true
    })
    Service.hasOne(models.Billing, {
      foreignKey: "billing_id",
      constraints: true
    })
  };
  return Service;
};