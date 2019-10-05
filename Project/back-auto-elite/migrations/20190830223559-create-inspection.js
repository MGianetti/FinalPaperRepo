'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inspections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fuelLevel_reserveTank:{
        type: Sequelize.BOOLEAN
      }, 
      fuelLevel_quarterTank:{
        type: Sequelize.BOOLEAN
      }, 
      fuelLevel_halfTank:{
        type: Sequelize.BOOLEAN
      }, 
      fuelLevel_threeQuarterTank:{
        type: Sequelize.BOOLEAN
      }, 
      fuelLevel_fullTank:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_fuelInjection:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_oilPressure:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_battery:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_brake:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_temperature:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_airBag:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_ABS:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_EPC:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_EPS:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_ESC:{
        type: Sequelize.BOOLEAN
      }, 
      warningLights_TPMS:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_hood:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_frontBumper:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_rearBumper:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_driverDoor:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_passengerDoor:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_rightRearDoor:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_leftRearDoor:{
        type: Sequelize.BOOLEAN
      }, 
      scratches_trunk:{
        type: Sequelize.BOOLEAN
      }, 
      specialTireIron:{
        type: Sequelize.BOOLEAN
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Services',
          key: 'id'
        }
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inspections');
  }
};