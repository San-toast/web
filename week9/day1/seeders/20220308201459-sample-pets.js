"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pets", [
      {
        type: "Persian",
        species: "Cat",
        name: "El Gato",
        age: 7,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Shorthair",
        species: "Cat",
        name: "Cat Mayne",
        age: 5,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
