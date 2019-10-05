'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inspection = sequelize.define('Inspection', {
    fuelLevel_reserveTank: DataTypes.BOOLEAN,
    fuelLevel_quarterTank: DataTypes.BOOLEAN,
    fuelLevel_halfTank: DataTypes.BOOLEAN,
    fuelLevel_threeQuarterTank: DataTypes.BOOLEAN,
    fuelLevel_fullTank: DataTypes.BOOLEAN,
    warningLights_fuelInjection: DataTypes.BOOLEAN,
    warningLights_oilPressure: DataTypes.BOOLEAN,
    warningLights_battery: DataTypes.BOOLEAN,
    warningLights_brake: DataTypes.BOOLEAN,
    warningLights_temperature: DataTypes.BOOLEAN,
    warningLights_airBag: DataTypes.BOOLEAN,
    warningLights_ABS: DataTypes.BOOLEAN,
    warningLights_EPC: DataTypes.BOOLEAN,
    warningLights_EPS: DataTypes.BOOLEAN,
    warningLights_ESC: DataTypes.BOOLEAN,
    warningLights_TPMS: DataTypes.BOOLEAN,
    scratches_hood: DataTypes.BOOLEAN,
    scratches_frontBumper: DataTypes.BOOLEAN,
    scratches_rearBumper: DataTypes.BOOLEAN,
    scratches_driverDoor: DataTypes.BOOLEAN,
    scratches_passengerDoor: DataTypes.BOOLEAN,
    scratches_rightRearDoor: DataTypes.BOOLEAN,
    scratches_leftRearDoor: DataTypes.BOOLEAN,
    scratches_trunk: DataTypes.BOOLEAN,
    specialTireIron: DataTypes.BOOLEAN
  }, {
    paranoid: true,
  });
  Inspection.associate = function(models) {
    Inspection.belongsTo(models.Service,{
      foreignKey: 'service_id'
    })
  };
  return Inspection;
};