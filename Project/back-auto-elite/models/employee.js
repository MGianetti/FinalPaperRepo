'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    cpf: DataTypes.STRING,
    observation: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    cellPhone: DataTypes.STRING,
    telephone: DataTypes.STRING,
    name: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    paranoid: true,
  });
  Employee.associate = function(models) {
    Employee.hasOne(models.Service, {
      foreignKey:"employee_id"
    })
  };
  return Employee;
};