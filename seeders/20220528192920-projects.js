"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "projects",
      [
        {
          name: "score-board",
          description: "increse score for players",
          linkUrl: "http://nothingfor-now",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "E-comerce Shop",
          description:
            "here you can buy anything you don't need and not feel bad about! ",
          linkUrl: "http://nothingfor-now",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
