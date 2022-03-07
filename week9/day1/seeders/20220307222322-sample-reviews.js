"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("reviews", [
      {
        reviewerId: 1337,
        stars: 5,
        title: "It was oaky",
        restaurantId: 8008,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        reviewerId: 68,
        stars: 3,
        title: "It was great!",
        restaurantId: 70,
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
