'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    obligatoryInspection: DataTypes.STRING,
    observations: DataTypes.STRING,
    summary: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING,
    totalValue: DataTypes.DECIMAL,
  }, {
    paranoid: true,
  });
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
      foreignKey: "service_id",
      constraints: true
    })
  };
  return Service;
};