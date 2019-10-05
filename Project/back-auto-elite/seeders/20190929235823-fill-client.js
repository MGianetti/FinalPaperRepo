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
   return queryInterface.bulkInsert('Clients', [{
      cpf: "14363076780",
      cellPhone: "21997477847",
      telephone: "2124927265",
      name: "Breno Salgado de Oliveira",
      cep: "37500228",
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    cpf: "11860725635",
    cellPhone: "35992011049",
    telephone: "35992011049",
    name: "Carla Grande de Freitas",
    cep: "37500000",
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
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
