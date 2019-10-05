'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Items', [
    {
    idCode: "asd45687qw",
    description: "chave 1",
    quantity: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
    idCode: "hhygfd7qw",
    description: "chave 2",
    quantity: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
    idCode: "asd456ASDD",
    description: "chave 3",
    quantity: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
    }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Items', null, {});
  }
};
