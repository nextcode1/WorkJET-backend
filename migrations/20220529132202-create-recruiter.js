"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("recruters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      isRecruting: {
        type: Sequelize.BOOLEAN,
      },
      jobDescription: {
        type: Sequelize.STRING,
      },

      jobTitle: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("recruters");
  },
};
