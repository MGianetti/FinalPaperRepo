'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Employees', [{
        cpf: "14363076780",
        observation: "obs",
        bankAccount: "asdadsasdas",
        cellPhone: "4445564654654",
        telephone: "4445564654654",
        name: "Jakiso",
        cep: "352215547",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
