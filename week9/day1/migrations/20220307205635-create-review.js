"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reviewerId: {
        type: Sequelize.INTEGER,
      },
      stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 5,
        },
      },
      title: {
        type: Sequelize.STRING,
      },
      review: {
        type: Sequelize.STRING,
      },
      restaurantId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reviews");
  },
};
