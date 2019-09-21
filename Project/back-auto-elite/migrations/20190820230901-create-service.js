'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      obligatoryInspection: {
        type: Sequelize.STRING
      },
      observations: {
        type: Sequelize.STRING
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Cars',
          key: 'id'
        }
      },
      // inspection_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Inspections',
      //     key: 'id'
      //   }
      // },
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees',
          key: 'id'
        }
      },
      summary: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Services');
  }
};