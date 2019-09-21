'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inspection = sequelize.define('Inspection', {
    observations: DataTypes.STRING
  }, {});
  Inspection.associate = function(models) {
    // associations can be defined here
  };
  return Inspection;
};