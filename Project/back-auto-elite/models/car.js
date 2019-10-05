'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    plate: DataTypes.STRING,
    is_Mercosul: DataTypes.BOOLEAN,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    paranoid: true,
  });
  Car.associate = function(models) {
    Car.belongsTo(models.Client, {
      foreignKey: 'client_id',
      constraints: true
    })
  };
  return Car;
};