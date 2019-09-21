'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    cpf: DataTypes.STRING,
    cellPhone: DataTypes.STRING,
    telephone: DataTypes.STRING,
    name: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    Client.hasMany(models.Car, {
      foreignKey: 'client_id',
      constraints: true
    })
  };
  return Client;
};